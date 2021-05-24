// function to generate markdown for README
function generateMarkdown(data) {
    // returns inquirer prompted data. Writing in markdown inside backticks and using data to personalize markdown page.
    return `# ${data.title}
  <a href="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license[0]}-brightgreen"></a>
  ----
  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information For Questions](#Questions?)
  # Description
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contribution
  ${data.contribution}
  # Test-Instructions
  ${data.tests}
  # License
  ${data.license}
  # Questions?
  Contact Me: ${data.email}

  My Github Page: https://github.com/${data.username}

  
  `;
  }
  // function exporting generateMarkdown function
  module.exports = generateMarkdown;