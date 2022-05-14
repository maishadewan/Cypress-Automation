export class LoginPage {

    login_email = 'label[for="InlineUserEmailSignUp"]'
    login_password = 'label[for="InlineUserPasswordSignUp"]'
    login_click = '.css-1dqhu4c'

    signinpopup_button = 'Sign In'
    signin_email = 'label[for="modalUserEmail"]'
    signin_password = 'label[for="modalUserPassword"]'
    signin_click =  'button[name="submit"]'

    go_home = 'div[class="siteHeader__HeaderStyles__brandLogoContainer"]'

    searchbox = 'input[name="sc.keyword"]'
    profileupdate_area = '[data-test="profile-container"]'

    details_jobtitle = 'input[placeholder ="Job Title"]'


    navigate(url) {
        cy.visit(url)
    }
    putEmail(email) {
        cy.get(this.login_email).click()
    }
    putPassword(password) {
        cy.get(this.login_password).click()
    }
    clickContinueWithLogin() {
        cy.get(this.login_click).click() 
    }


    findSignin() {
        cy.contains(this.signinpopup_button).click({force : true})
        //{force : true} to click on not visible button
    }
    signinEmail(email) {
        cy.get(this.signin_email).type(email)
    }
    signinPassword(password) {
        cy.get(this.signin_password).type(password)
    }
    signinClick() {
        cy.get(this.signin_click).click()
    }
    searchTypeEnter(query) {
        cy.get(this.searchbox).type(query)
    }


    findHome() {
        cy.get(this.go_home).click()
    }

    
}