Cypress.Commands.add('addTrackToPlaylist', (trackName) => {
    cy.get('#tracklist')
        .contains(trackName)   // Find the track by name
        .parents('.MuiGrid-item')  // Get the parent container
        .find(':nth-child(1) > .MuiButton-root')  // Find the "+" button inside the container
        .click();  // Click the "+" button to add the track
});