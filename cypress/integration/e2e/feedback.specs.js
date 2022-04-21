
describe('Feedback Test', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
    })


    it('Should display feedback content', ()=>{
   
      cy.contains('Feedback').click()
      cy.url().should('contain','feedback')
      cy.get('#feedback-title').contains('Feedback')
    })

    it('Should fill form', ()=>{
     cy.get('#name').type('Toni Cabrera')
     cy.get('input[name="email"]').type('toni@yopmail.com')
     cy.get('.controls input[placeholder="Subject"]').type('Hola')
     cy.get('.controls.pictured textarea').type('Querido tommy')
     cy.contains('Send Message').click()
        
    })

    
    it('Should display feeback confirmation', ()=>{
      cy.get('.offset3').should('contain', "Thank you for your comments")
         
     })


   
   
})