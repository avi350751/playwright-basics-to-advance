const{test,expect} = require('@playwright/test')

test.use({viewport:{width: 1536, height: 960},
locale: 'en-US',
timezoneId: 'America/Chicago'})

test('Verify login', async function({page}){

    await page.goto("https://shop-here.lovable.app/")
    console.log(await page.viewportSize().height)
    console.log(await page.viewportSize().width)

    await page.locator("(//a[contains(@href,'login')])[1]").click()
    await page.getByPlaceholder('demo').fill("demo")
    await page.locator("//input[@id='password']").fill("demo123")
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/)
    await page.locator('//button[@data-testid="logout-button"]').click()
})