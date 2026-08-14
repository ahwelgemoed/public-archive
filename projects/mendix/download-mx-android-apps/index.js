const puppeteer = require("puppeteer");
// Downloads Make it Native
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.tracing.start({
//     path: "trace.json",
//     categories: ["devtools.timeline"],
//   });
//   await page.goto("https://apkpure.com/make-it-native/com.mendix.developerapp");

//   // execute standard javascript in the context of the page.
//   const stories = await page.$$eval("a.da", (anchors) => {
//     return anchors.map((anchor) => anchor.textContent).slice(0, 10);
//   });
//   console.log(stories);
//   await page._client.send("Page.setDownloadBehavior", {
//     behavior: "allow",
//     downloadPath: "./make-it-native-8",
//   });
//   await page.goto(
//     "https://apkpure.com/make-it-native/com.mendix.developerapp/download?from=details"
//   );
//   page.on("dialog", async (dialog) => {
//     console.log(dialog.message());
//     await dialog.dismiss();
//   });
//   await page.waitFor(10000);
//   await page.tracing.stop();
//   await browser.close();
// })();

// Download MX9
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.tracing.start({
    path: "trace.json",
    categories: ["devtools.timeline"],
  });
  await page.goto(
    "https://apkpure.com/make-it-native-9/com.mendix.developerapp.mx9/download?from=developer"
  );

  // execute standard javascript in the context of the page.
  const stories = await page.$$eval("a.da", (anchors) => {
    return anchors.map((anchor) => anchor.textContent).slice(0, 10);
  });
  console.log(stories);
  await page._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: "./make-it-native-9",
  });
  await page.goto(
    "https://apkpure.com/make-it-native-9/com.mendix.developerapp.mx9/download?from=developer"
  );
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.dismiss();
  });
  await page.waitFor(30000);
  await page.tracing.stop();
  await browser.close();
})();
