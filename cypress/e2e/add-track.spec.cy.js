describe('Add Track Functionality', () => {
    it('should add a track to the playlist when the "+" button is clicked', () => {
        cy.visit('https://vite-react-alpha-lemon.vercel.app/');
        
        cy.get('#tracklist').should('be.visible');
        
        cy.get(':nth-child(1) > .MuiButton-root').click();
        
        cy.get('#playlist').should('be.visible');
        cy.get('#playlist').should('contain.text', 'Summer Breeze');
    });
});