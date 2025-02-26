describe('Verify Total Duration of Playlist', () => {
    it('should calculate the total duration of all tracks correctly in seconds', () => {
        cy.visit('https://vite-react-alpha-lemon.vercel.app/');
        
        cy.get('#tracklist').should('be.visible');
        cy.get('.MuiButton-outlined') 
            .click({ multiple: true });

        const expectedTotalDuration = 1030; 
        
        cy.get('#playlist').should('be.visible');
        cy.get('#playlist-duration').should('contain.text', expectedTotalDuration.toString()); 
        
    });
});
