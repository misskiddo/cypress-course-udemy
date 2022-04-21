
describe('Password Test', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    afterEach(function(){
      cy.go('back')

    })

    it('Should display online banking content', ()=>{
      cy.get('ul#pages-nav li:nth-child(2)').click()
      cy.get('h1').should('contain','Online Banking')
     
    })

    it('Should display feedback content', ()=>{
   
      cy.contains('Feedback').click()
      cy.url().should('contain','feedback')
    })

    it('Should display homepage content', ()=>{
     cy.contains('Home').click()
     cy.get('.carousel-inner').should('be.visible')
        
    })

   
})