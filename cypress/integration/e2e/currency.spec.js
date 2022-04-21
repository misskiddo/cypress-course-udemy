describe('Currency Exchange Test', ()=>{
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
       cy.contains('Purchase Foreign Currency').click()

      
       cy.get('#pc_currency').select('CAD')
       cy.get('#pc_amount').type(4000)
       cy.get('#pc_inDollars_true').click()
       cy.get('#pc_calculate_costs').click()
       

     
      
   })


   it ('Should show success message',()=>{
     cy.get('#pc_conversion_amount').should('be.visible')
           
})


})