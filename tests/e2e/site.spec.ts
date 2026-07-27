import { expect, test } from "@playwright/test";

test("home page opens with the primary product actions", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Manage Modrinth from anywhere/ }),
  ).toBeVisible();
  await expect(page.locator('.hero-actions a[href^="/download"]')).toBeVisible();
  await expect(page.locator("#features")).toBeVisible();
});

test("theme choice persists and is applied on the next document", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Choose color theme" }).click();
  await page.getByRole("menuitemradio", { name: "Dark" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect
    .poll(() =>
      page.evaluate(() => getComputedStyle(document.documentElement).colorScheme),
    )
    .toBe("dark");
});

test("system theme is selected before hydration without an incorrect class", async ({
  browser,
}) => {
  const context = await browser.newContext({ colorScheme: "dark" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "system");
  await expect
    .poll(() =>
      page.evaluate(() => getComputedStyle(document.documentElement).colorScheme),
    )
    .toBe("dark");
  await context.close();
});

test("mobile menu is keyboard accessible and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 720 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Close navigation" }).last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("changelog displays fallback releases and quick view Markdown", async ({
  page,
}) => {
  await page.goto("/changelog");
  await expect(page.getByText(/verified fallback copy/i)).toBeVisible();
  await expect(page.getByRole("link", { name: "v2.2.0 Rinthy" })).toBeVisible();
  await page.getByRole("button", { name: "Quick view" }).first().click();
  const dialog = page.getByRole("dialog", { name: /v2.2.0 Rinthy/ });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "What's new" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("download page links to the correct APK asset", async ({ page }) => {
  await page.goto("/download?platform=android");
  const apk = page.getByRole("link", { name: /Download APK/ });
  await expect(apk).toHaveAttribute(
    "href",
    "https://github.com/Ryntra-App/Ryntra/releases/download/2.2.0/Rinthy.2.2.0.apk",
  );
  await expect(page.getByText("Recommended")).toBeVisible();
});

test("full changelog Markdown renders and unknown tags return 404", async ({
  page,
}) => {
  await page.goto("/changelog/2.2.0");
  await expect(page.getByRole("heading", { name: "What's new" })).toBeVisible();
  await expect(page.getByText("Rinthy.2.2.0.apk")).toBeVisible();
  await page.goto("/changelog/not-a-real-release");
  await expect(page.getByRole("heading", { name: /isn't in the release/ })).toBeVisible();
});

test("pages have no horizontal overflow at required widths", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === "mobile",
    "The test sets and verifies every required viewport itself.",
  );
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(1);
  }
});

test("reduced motion preference is respected", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const matches = await page.evaluate(() =>
    matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  expect(matches).toBe(true);
  const duration = await page
    .getByRole("button", { name: "Choose color theme" })
    .evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(duration).toMatch(/0\.00001s|1e-05s|0s/);
});

test("captures the polished responsive home page", async ({ page }, testInfo) => {
  await page.goto("/");
  const heroImage = page.locator(".hero-screenshot img");
  await expect(heroImage).toHaveJSProperty("complete", true);
  await expect
    .poll(() =>
      page.evaluate(() =>
        [".hero-description", ".hero-actions", ".hero-visual"].every(
          (selector) =>
            Number(
              getComputedStyle(document.querySelector(selector) as Element)
                .opacity,
            ) > 0.99,
        ),
      ),
    )
    .toBe(true);
  await page.screenshot({
    path: `output/playwright/home-${testInfo.project.name}-viewport.png`,
    fullPage: false,
  });

  const lazyImages = page.locator(
    ".feature-visual img, .platform-pair img, .people-panel img",
  );
  for (let index = 0; index < (await lazyImages.count()); index += 1) {
    const image = lazyImages.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
  }
  await page.screenshot({
    path: `output/playwright/home-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("primary routes do not emit console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const route of ["/", "/download", "/changelog", "/docs"]) {
    await page.goto(route);
  }
  expect(errors).toEqual([]);
});
