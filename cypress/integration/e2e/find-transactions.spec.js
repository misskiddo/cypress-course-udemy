describe('Transfer Funds Test', ()=>{
   before(function(){

    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture('users').then((user)=>{
        const username = user.username
        const pwd = user.password
        cy.login(username, pwd)
    })

   })

   it ('Should fill form',()=>{
       cy.get('a:contains("Account Activity")').click()      
       cy.contains('Find Transactions').click()
       cy.get('#aa_fromAmount').type('100')
       cy.get('#aa_toAmount').type('999')
       cy.get('.pull-right button').click()
     
      
   })


   it ('Should Display results',()=>{
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('lenght').should('be.gt',0)

           
})


})