# Automated Test Generation and Refactoring with GPT-4o

## Overview

This project is designed to explore the process of generating and refactoring automated tests using AI technology, specifically **GPT-4o**. The goal is to first generate an automated test for an e-commerce scenario, and then refactor the generated test to improve its structure by implementing the **Page Object Model**.

The project consists of two primary steps:

1. **Automated Test Generation**
   - The first step involves generating an automated test using **Playwright** with **TypeScript**.
   - The scenario for the test is to order sneakers from the website **amazon.fr**.
   - The prompt provided to GPT-4o for this task is:

   > "Write an automated test using Playwright with TypeScript. The test case is to order sneakers from the website amazon.fr."

2. **Code Refactoring**
   - After the test is generated and works as expected, the next step is to refactor the code for better maintainability and scalability.
   - The refactor follows the **Page Object Model** pattern to organize the test code.
   - The prompt used for this step is:

   > "Help me rewrite this test for a better architecture with the Page Object Model."

## Technology Stack

- **Playwright**: Browser automation framework for end-to-end testing.
- **TypeScript**: Superset of JavaScript adding static typing.
- **GPT-4o**: AI model used for generating and refactoring the code.

## Project Workflow

1. **Step 1: Generate the Test**
   - The initial version of the test is generated using GPT-4o.
   - The test automates the ordering process of sneakers on **amazon.fr** using **Playwright**.

2. **Step 2: Refactor the Test**
   - The generated code is refactored to follow the **Page Object Model**.
   - This architecture separates page interactions into reusable classes, improving code organization.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the Initial Test:**

   ```bash
   npx playwright test
   ```

4. **Refactor the Code:**
   - Refactored code will be located in the `pages/` directory.

5. **Run the Refactored Test:**

   ```bash
   npx playwright test
   ```

## Benefits of GPT-4o in Automated Testing

- **Faster Test Creation**: Quickly generate initial test cases.
- **Improved Code Quality**: Automatically refactor code with best practices.
- **Scalability**: Modular architecture using the **Page Object Model**.

## Conclusion

This project highlights how **GPT-4o** can assist in both generating and refactoring automated tests. By combining AI and modern testing frameworks, the process of writing and maintaining automated tests becomes more efficient and scalable.

