describe('Transfer Funds Test', ()=>{
   before(function(){

    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.fixture('users').then((user)=>{
        const username = user.username
        const pwd = user.password
        cy.login(username, pwd)
    })

   })

   it ('Should fill transfer funds form',()=>{
       cy.get('a:contains("Transfer Funds")').click()      
       cy.get('#tf_fromAccountId').select(2)
       cy.get('#tf_toAccountId').select(4)
       cy.get('#tf_amount').type('200')
       cy.get('#tf_description').type('Description')
       cy.get('#btn_submit').click()
      
      
   })

   it ('Should verify correct data',()=>{
  
    cy.get('#tf_fromAccountId').should('have.value', 'Savings')
    cy.get('#tf_toAccountId').should('have.value', 'Credit Card')
    cy.get('#tf_amount').should('have.value', '200')
    cy.contains('Transfer Money & Make Payments - Verify')
    cy.get('.pull-right #btn_submit').click()
   
})


   it ('Should show success message',()=>{
     cy.get('.alert-success').should('be.visible').and('contain', 'You successfully submitted your transaction.')
           
})


})