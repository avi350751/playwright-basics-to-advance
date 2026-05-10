const{test, expect} = require('@playwright/test')

test('Verify Error Message', async function({page}){

    await page.goto("https://shop-here.lovable.app")
    await page.locator("(//a[contains(@href,'login')])[1]").click()
    await page.getByPlaceholder('demo').fill("demo")
    await page.locator("//input[@id='password']").fill("demo1234")
    await page.locator("//button[@type='submit']").click()

    const errorMessage = await page.locator("//p[@data-testid='login-error']").textContent()
    console.log("Error Message: ", errorMessage)
    expect(errorMessage.includes("Invalid")).toBeTruthy();
    await expect(errorMessage).toBe("Invalid username or password.")
})