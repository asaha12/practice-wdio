import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('admin', 'admin')
        const pageUrl = browser.getUrl();
        assert.equal(pageUrl,"https://play1.automationcamp.ir/order_submit.html")
    })
})

