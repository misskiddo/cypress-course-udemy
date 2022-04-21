
describe('Login/Logout Test', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
    })


    it('Should try to login with invalid data', ()=>{
   // validate error message
   cy.get('#login_form').should('be.visible')
      cy.login('invalid', 'invalid')
     
    })

    it('Should display error message', ()=>{
      // validate error message
      cy.get('.alert.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
       
       })

    it('Should login to application', ()=>{
      cy.fixture('users').then((user =>{
        const username = user.username
        const pass = user.password

        cy.login(username, pass)

      }))  
        
    })

    it('Should logout from application', ()=>{
      cy.get('.icon-user').click()
      cy.get('#logout_link').click()
      cy.url().should('include', 'index.html')
         
     })


   
   
})