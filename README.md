**Part II. Testing us**  
I used Cypress. 
Steps to run tests:
1. Install Cypress: _npm install cypress --save-dev_
2. Open Cypress: _npx cypress open_
3. Go through setup
4. Put _data.json_ in _cypress/fixtures_. Fill with your data
 ```
    {
        "email": <<your_email_address>>,
        "amount": <<amount>>
    }
```
5. Fill _cypress.config.js_ with your data
```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: <<websiteAddress>>,
    viewportHeight: 1000,
    viewportWidth: 1900,
  },
});
```
