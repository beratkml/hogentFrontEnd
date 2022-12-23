Cypress.Commands.add('goToHomePage', () => { // 👈 1
  cy.visit('http://localhost:3000/');
});

Cypress.Commands.add('login', () => {
  cy.goToHomePage();
  cy.clearLocalStorage(); // 👈 2

  // 👇 3
  Cypress.log({
    displayName: 'login',
    message: `Signing in as ${Cypress.env('auth_username')}`,
  });

  const clientId = Cypress.env('auth_client_id');
  const audience = Cypress.env('auth_audience');
  const scope = 'openid profile email offline_access';

  // 👇 4
  cy.request({
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      grant_type: 'password',
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      audience,
      scope,
      client_id: clientId,
      client_secret: Cypress.env('auth_client_secret'),
    },
  }).then(({
    // 👇 5
    body: {
      access_token: accessToken,
      expires_in: expiresIn,
      id_token: idToken,
      token_type: tokenType,
    },
  }) => {
    cy.window() // 👈 6
      .then((win) => {
        // 👇 7
        win.localStorage.setItem(
          `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
          JSON.stringify({
            body: {
              client_id: clientId,
              access_token: accessToken,
              id_token: idToken,
              scope,
              expires_in: expiresIn,
              token_type: tokenType,
              decodedToken: {
                user: JSON.parse(
                  Buffer.from(idToken.split('.')[1], 'base64').toString('ascii'),
                ),
              },
              audience,
            },
            expiresAt: Math.floor(Date.now() / 1000) + expiresIn,
          }),
        );
        cy.reload(); // 👈 8
      });
  });
});

