// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    "GPL 3.0": "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
  };

  const licenseBadge = licenseBadges[data.license] || "";


  const tableOfContents = `\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)`;
  
  return `

  ${licenseBadge}

  ## ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${tableOfContents}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions}
  `;}

module.exports = generateMarkdown;


