# 0x04. TypeScript

## Description
This project introduces TypeScript basics and its integration in frontend development.  
You will learn how to define interfaces, work with classes, extend existing types, and use advanced TypeScript features while compiling everything with Webpack.

All tasks are designed to help you understand the importance of **strong typing** in JavaScript applications and how TypeScript can prevent runtime errors by catching issues at compile time.

---

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Code will be transpiled on **Ubuntu 18.04**
- TypeScript scripts will be checked with **Jest (v24.9.\*)**
- A `README.md` file at the root of the project is mandatory
- Code should use the `.ts` extension when possible
- TypeScript compiler should not show any warnings or errors
- Webpack is used for bundling

---

## Configuration Files
The following configuration files are provided and must be copied into the respective task folders:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

---

## Tasks

### 0. Creating an interface for a student
**Directory:** `task_0/`  
**Files:**  
- `task_0/js/main.ts`  
- `task_0/package.json`  
- `task_0/.eslintrc.js`  
- `task_0/tsconfig.json`  
- `task_0/webpack.config.js`

**Instructions:**
1. Create an interface named `Student` with the following properties:
   - `firstName` (string)  
   - `lastName` (string)  
   - `age` (number)  
   - `location` (string)

2. Create two student objects.

3. Create an array named `studentsList` containing the two students.

4. Using vanilla JavaScript:
   - Render a table in the DOM.  
   - For each element in the array, append a new row containing the **first name** and **location** of the student.

**Requirements:**
- When running `npm run build`, Webpack should return **No type errors found**.
- All variables must use **TypeScript** types whenever possible.

---

## Setup & Usage

1. Install dependencies:
   ```bash
   npm install
