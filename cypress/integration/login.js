/// <reference types = "cypress"/>

import {LoginPage} from "../pages/LoginPage"

const loginPage = new LoginPage()


describe('glassdoor testcases', function() {

    it.skip('signup', function() {
        loginPage.navigate('https://www.glassdoor.com/index.htm')
        loginPage.putEmail('rgf@ghg.com')
        loginPage.putPassword('hahahafghrt')
        loginPage.clickContinueWithLogin()
    })

    it('login', function() {
        loginPage.navigate('https://www.glassdoor.com/')
        loginPage.findSignin()
        loginPage.signinEmail('rgf@ghg.com')
        loginPage.signinPassword('hahahafghrt')
        loginPage.signinClick()

    })

    it('searches stuff in searchbox and enters', function() {
        loginPage.searchTypeEnter('QA{enter}')

    })

})