// function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n`;
  return `# ${data.title}
  ${tableOfContents}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.questions}
`;}

module.exports = generateMarkdown;


