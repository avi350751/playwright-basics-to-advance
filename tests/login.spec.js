const{test,expect} = require('@playwright/test')

test('Validate Login', async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText('profile picture').click()
})

test('Verify login', async function({page}){

    await page.goto("https://shop-here.lovable.app/")
    await page.locator("(//a[contains(@href,'login')])[1]").click()
    await page.getByPlaceholder('demo').fill("demo")
    await page.locator("//input[@id='password']").fill("demo123")
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)
    await page.locator('//button[@data-testid="logout-button"]').click()
})