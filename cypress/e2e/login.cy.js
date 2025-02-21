import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField : "[name='username']",
  passwordField : "[name='password']",
  loginButton : "[type='submit']",
  sectionTittleTopBar : '.oxd-topbar-header-breadcrumb > .oxd-text',
  wrongCredentialAlert : '.oxd-alert'
}

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTittleTopBar).contains('Dashboard')
    
  })

    it('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type('Adm')
      cy.get(selectorsList.passwordField).type('adm123') 
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
      
    })
})