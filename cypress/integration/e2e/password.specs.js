describe('Password Test', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should click on signin button', ()=>{
      cy.get('#signin_button').click()

    })

    it('Should click on the forgotten password', ()=>{
    //  cy.contains('Forgot your password').click()
      cy.get('.offset3 > a').click()
      /*
        The ‘>’ Symbol
        This is called the child selector. CSS rules will be applied to elements which are direct children of the particular element.
      */
        
    })

    it('Should fill email form', ()=>{
      cy.get('#send_password_form .controls input').type('test@yopmail.com')
        
    })

    it('Should submit the form', ()=>{
        cy.get('#send_password_form .form-actions input').click()
        
    })
})