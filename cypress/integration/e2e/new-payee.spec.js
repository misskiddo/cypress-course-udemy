describe('New Payee Test', ()=>{
   before(function(){

    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture('users').then((user)=>{
        const username = user.username
        const pwd = user.password
        cy.login(username, pwd)
    })

   })

   it ('Should add new payee to the list',()=>{
     //  cy.xpath('//a[contains(text(),"Pay Bills")]').click()
       cy.get('a:contains("Pay Bills")').click()
       cy.contains('Add New Payee').click()
       const payee = 'Endesa'
       cy.get('#np_new_payee_name').type(payee)
       cy.get('#np_new_payee_address').type('Address')
       cy.get('#np_new_payee_account').type('Account')
       cy.get('#np_new_payee_details').type('Details')
       cy.get('#ui-tabs-2 input[type="submit"]').click()


   })


   it ('Should show success message',()=>{
       cy.get('.alert.alert-success.hide').should('be.visible').and('contain', `The new payee ${payee} was successfully created.`)
       
})


})