// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

    {
        //Title
        type: 'input',
        message: 'What would you like your title to be?',
        name: 'title',
    },
    {
        //Description
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
        name: 'description',
    },
    {
        //Installation Instructions
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        // Usage information
        type: 'input',
        message: 'Provide instructions and examples on how to use your application.',
        name: 'usage',
    },
    {
        //Contribution Guidelines
        type: 'input',
        message: 'List your collaborators, if any.',
        name: 'contribution',
    },
    {
        //Test Instructions
        type: 'input',
        message: 'How would you write tests for your application?',
        name: 'testing',
    },
    {
        //License
        type: 'list',
        message: 'What license would your application be under?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },
    {
        //Github Username
        type: 'input',
        message: 'What is your public GitHub username?',
        name: 'GithubName',
    },
    {
        //Email
        type: 'input',
        message: 'What is your listed email address?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const badge = getBadge(data);

    const readmeContent = `# ${data.title}
${badge}

## Description

${data.description}

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation Instructions

${data.installation}

## Usage Information

${data.usage}

## Credits

${data.contribution}

## License

This application is covered under ${data.license}

## Tests

${data.testing}

## Contact

- Github: [${data.GithubName}](https://github.com/${data.GithubName})
- Email: [${data.email}](mailto:${data.email})
`;

    fs.writeFile(fileName, readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file has been generated successfully.');
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            writeToFile('README.md', response)
        )
}

// Function call to initialize app
init();

function getBadge(data) {
    if (data.license = 'GNU AGPLv3') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'

    } else if ('GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

    } else if ('GNU LGPLv3') {
        return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'

    } else if ('Mozilla Public License 2.0') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

    } else if ('Apache License 2.0') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

    } else if ('MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

    } else if ('Boost Software License 1.0') {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

    } else if ('The Unlicense') {
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

    }
}