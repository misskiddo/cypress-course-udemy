describe('New Paymente Test', ()=>{
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
       cy.contains('Pay Saved Payee').click()
       cy.get('#sp_payee').select('Bank of America')
       cy.get('#sp_account').select(4)
       cy.get('#sp_amount').type("200")
       cy.get('#sp_date').type('2022-04-28 {enter}')
       cy.get('#sp_description').type('Description')
       cy.get('#ui-tabs-1 input[value="Pay"]').click()

     
      
   })

   it ('Should show success message',()=>{
      cy.get('#alert_content').should('be.visible').and('contain', "The payment was successfully submitted.")
       
})


})