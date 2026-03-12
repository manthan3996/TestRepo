const {test,expect} = require('@playwright/test')

test.only("Child Windows Test", async ({browser})=>{
 
  const context = await browser.newContext();
  const page = await context.newPage();
  const username = page.locator("#username")
   
  const documentLink = page.locator("a[href*='documents-request']")
   
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   
  const [newPage]=await Promise.all([
  context.waitForEvent("page"),
  documentLink.click()])// new page is opened.
  //listen for any new page.
   
  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@")
  const domain = arrayText[1].split(" ")[0]
  // console.log(arrayText)
  // console.log(domain)
  // console.log(text)
  await username.fill(domain)
  await page.pause()
  console.log(await username.textContent())
  })