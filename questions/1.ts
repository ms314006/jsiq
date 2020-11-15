import { Question } from 'models/Question';

export const q1: Question = {
  id: '1',
  title: "What's the output?",
  code: `
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();`,
  options: [
    { body: '`Lydia` and `undefined`', correct: false },
    { body: '`Lydia` and `ReferenceError`', correct: false },
    { body: '`ReferenceError` and `21`', correct: false },
    { body: '`undefined` and `ReferenceError`', correct: true },
  ],
  explanation:
    'Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven\'t defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don\'t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.',
  references: ['https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'],
  type: 'JavaScript',
  level: 'Beginner',
};
