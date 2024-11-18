[![Coverage Status](https://coveralls.io/repos/github/aidul23/software-testing-assignment/badge.svg?branch=main)](https://coveralls.io/github/aidul23/software-testing-assignment?branch=main)

# Student template

## Group Members:

Md Aidul Islam, Id: 152151564 
MD Iftekhar Hossain Tanveer, ID: 152258658 

﻿# **Software Testing Project**

This project demonstrates a comprehensive testing workflow for a JavaScript utility library. It includes unit tests, automated CI integration via GitHub Actions, and coverage reporting through Coveralls.

---

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Continuous Integration](#continuous-integration)
- [Coverage Reports](#coverage-reports)
- [Project Structure](#project-structure)


---

## **Overview**
This project tests various utility functions using **Jest** as the testing framework. Automated tests run in a CI pipeline configured with **GitHub Actions**, and test coverage is tracked using **Coveralls**. 

The repository includes:
- Utility functions such as `add`, `divide`, `capitalize`, and more.
- Comprehensive unit tests for all utility functions.
- A robust CI/CD pipeline for automated testing and coverage reporting.

---

## **Features**
- **Unit Tests**: Tests for core utility functions.
- **Continuous Integration**: Automated test execution on every push or pull request using GitHub Actions.
- **Coverage Reporting**: Integration with Coveralls to track and visualize code coverage.
- **ES Modules Support**: Modern JavaScript features using Babel.

---

## **Getting Started**

### **Prerequisites**
To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### **Installation**
Clone the repository and install dependencies:
```bash
git clone https://github.com/aidul23/software-testing-assignment.git
cd your-repository
npm install
```

---

## **Usage**
Run the tests locally:
```bash
npm test
```

---

## **Testing**
### **How Tests Work**
- Tests are written using mocha and are located in the `test` directory.
- Each utility function has corresponding test cases covering edge cases and typical usage.

### **Run Tests**
To execute the test suite:
```bash
npm test
```

### **Generate Coverage Reports**
To view test coverage locally:
```bash
npm run coverage
```

---

## **Continuous Integration**
This project uses GitHub Actions for continuous integration. Tests and coverage reports are automatically triggered on:
- Pushes to the `main` branch.
- Pull requests targeting the `main` branch.

The workflow file is located at `.github/workflows/node_test.yml`.

### **CI Steps**
1. Check out the repository.
2. Set up the Node.js environment.
3. Install dependencies.
4. Run tests and generate coverage reports.
5. Upload coverage data to Coveralls.

---

## **Coverage Reports**
Test coverage is tracked using Coveralls. After each GitHub Actions run, coverage data is uploaded to Coveralls and can be viewed online.

**View Coverage Report**:

![image](https://github.com/user-attachments/assets/27aebbe0-af45-46b9-82e0-3ca604a43877)


---

## **Project Structure**
```plaintext
├── test/              # Unit tests for utility functions
├── src/               # Src which contains all functions
├── .github/workflows/ # CI configuration for GitHub Actions
├── coverage/          # Coverage reports (generated after running tests)
├── package.json       # Project configuration and dependencies
├── LICENSE            # MIT License
├── README.md          # Project documentation
```

