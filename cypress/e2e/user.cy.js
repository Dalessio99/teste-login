import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTittleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  wrongCredentialAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[placeholder='First Name']",
  middleNameField: "[placeholder='Middle Name']",
  lastNameField: "[placeholder='Last Name']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  genderBox: ".oxd-radio-input",
  dateCloseButton: ".--close",
  genericCheckBox: ".oxd-select-text--arrow",
  testField:"[options='']",
  buttonSave:"[type='submit']"
}

  it.only ('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employe')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicense')
    cy.get(selectorsList.dateField).eq(0).type('2021-05-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCheckBox).eq(0)
    cy.get(selectorsList.genericCheckBox).eq(1).type('Married')
    cy.get(selectorsList.dateField).eq(1).type('2021-03-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderBox).eq(1).click()
    cy.get(selectorsList.buttonSave).eq(0).click()
    cy.get(selectorsList.genericCheckBox).eq(2).type('O+')
    cy.get(selectorsList.testField).clear().type('Aprove')
    cy.get(selectorsList.buttonSave).eq(1).click()



    
  })

    it('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type('Adm')
      cy.get(selectorsList.passwordField).type('adm123') 
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
      
    })
})