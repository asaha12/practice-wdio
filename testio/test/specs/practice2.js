describe("C-4-A-1-Handle multiple window and Alert", ()=>{

it("Go to this page demoqa and handle window", async()=>{
await browser.url("https://demoqa.com/links");
const urlElement = await $("//a[@id='simpleLink']");
await urlElement.scrollIntoView();
await urlElement.click();
const totaltab = await browser.getWindowHandles();
await browser.switchToWindow(totaltab[1]); //swich to opened new tab
await browser.pause(3000);
await browser.switchToWindow(totaltab[0]);//swich to previous tab
await browser.pause(3000);

})

it("Go to  demoqa page and handle alerts", async()=>{
    await browser.url("https://demoqa.com/alerts");
    const alertButton = await $("#alertButton");
    await alertButton.click();
    await browser.pause(3000);
    await browser.acceptAlert();
    await browser.pause(3000);
    const promtButton = await $("#promtButton");
    await promtButton.scrollIntoView();
    const timerAlertButton = await $("#timerAlertButton");
    await timerAlertButton.click();
    await browser.pause(6000);
    await browser.acceptAlert();
    const confirmButton = await $("#confirmButton");
    await confirmButton.click();
    await browser.dismissAlert();
    await browser.pause(2000);
    await confirmButton.click();
    await browser.acceptAlert();
    await browser.pause(2000);
    await promtButton.click();
    await browser.sendAlertText("WebdriverIO is fun");
    await browser.acceptAlert();
    await browser.pause(2000);
    })





})