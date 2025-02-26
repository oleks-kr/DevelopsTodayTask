describe('Search Functionality', () => {
    it('should filter tracks correctly based on the search input', () => {
        cy.visit('/');
        
        cy.get('.MuiInputBase-input.MuiOutlinedInput-input').should('be.visible').type('Summer Breeze');
        cy.get('#tracklist').should('be.visible').and('have.length.greaterThan', 0);
        
        cy.get('#tracklist .MuiGrid-item').each(($track) => {
            const trackName = $track.find('p.MuiTypography-root').text();
            if (trackName.includes('Summer Breeze')) {
                cy.wrap($track).should('be.visible');
            }
        });
    });
});