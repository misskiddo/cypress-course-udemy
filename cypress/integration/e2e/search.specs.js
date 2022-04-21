describe('Searchbox test', ()=>{
    before (function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should type into searchbox and submit when pressing enter', ()=>{
        cy.get('#searchTerm').type('some text {enter}')

    })

    it('Should contain search results', ()=>{
        // Two options
        cy.get('.top_offset h2').should('contain', 'Search Results')
        cy.get('h2').contains('Search Results')
        
    })
})