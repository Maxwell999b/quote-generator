export const quizData = {
  easy: [
    {
      question: "What is React primarily used for?",
      options: ["Building APIs", "Building User Interfaces", "Managing Databases", "Server-side Rendering"],
      correctAnswer: "Building User Interfaces",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["String", "Class", "HTTP", "SQL"],
      correctAnswer: "String",
    },
    {
      question: "What is JSX in React?",
      options: ["A JavaScript library", "A programming language", "A syntax extension", "A styling framework"],
      correctAnswer: "A syntax extension",
    },
    {
      question: "Which method is used to create a component in React?",
      options: ["createComponent", "ReactDOM", "render", "useState"],
      correctAnswer: "createComponent",
    },
    {
      question: "How do you import React in a project?",
      options: ["import React from 'react'", "import 'React'", "import Component from 'react'", "require('React')"],
      correctAnswer: "import React from 'react'",
    },
    {
      question: "Which of these is not a JavaScript framework?",
      options: ["React", "Vue", "Angular", "CSS"],
      correctAnswer: "CSS",
    },
    {
      question: "Which function in React allows for adding state to functional components?",
      options: ["useContext", "useEffect", "useState", "useRef"],
      correctAnswer: "useState",
    },
    {
      question: "In JavaScript, which of the following is used to declare a variable?",
      options: ["var", "let", "const", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What is the default port for React applications?",
      options: ["3000", "8080", "5000", "4000"],
      correctAnswer: "3000",
    },
    {
      question: "What is a JavaScript function?",
      options: ["A way to store numbers", "A reusable block of code", "A variable type", "An event handler"],
      correctAnswer: "A reusable block of code",
    },
  ],
  medium: [
    {
      question: "What is the correct way to update state in a functional React component?",
      options: ["this.setState", "setState()", "useState()", "setState({ newState })"],
      correctAnswer: "useState()",
    },
    {
      question: "Which method is used to fetch data in React asynchronously?",
      options: ["fetchData()", "useFetch()", "axios()", "fetch()"],
      correctAnswer: "fetch()",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A representation of the actual DOM",
        "A server-side database",
        "A CSS framework",
        "An algorithm for sorting",
      ],
      correctAnswer: "A representation of the actual DOM",
    },
    {
      question: "Which lifecycle method is invoked after a component is rendered in React (Class Components)?",
      options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentWillUpdate"],
      correctAnswer: "componentDidMount",
    },
    {
      question: "What does the useEffect hook do in React?",
      options: [
        "Adds event listeners",
        "Runs side effects in functional components",
        "Manipulates the DOM",
        "Manages global state",
      ],
      correctAnswer: "Runs side effects in functional components",
    },
    {
      question: "In JavaScript, what is the output of 2 + '2'?",
      options: ["22", "4", "'22'", "'4'"],
      correctAnswer: "'22'",
    },
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A block of code that runs immediately",
        "A function that remembers its scope even after the outer function has executed",
        "An error handler",
        "A callback function",
      ],
      correctAnswer: "A function that remembers its scope even after the outer function has executed",
    },
    {
      question: "What is the spread operator in JavaScript?",
      options: ["...", "$$", "--", "++"],
      correctAnswer: "...",
    },
    {
      question: "How do you pass data from a parent to a child component in React?",
      options: ["Using state", "Using props", "Using events", "Using refs"],
      correctAnswer: "Using props",
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "'==' checks for value equality, '===' checks for both value and type equality",
        "They are the same",
        "'===' checks for value equality, '==' checks for type equality",
        "'===' is used for objects only",
      ],
      correctAnswer: "'==' checks for value equality, '===' checks for both value and type equality",
    },
  ],
  hard: [
    {
      question: "What is the purpose of React keys in lists?",
      options: [
        "To identify elements uniquely for performance optimizations",
        "To sort elements",
        "To manage state",
        "To bind event handlers",
      ],
      correctAnswer: "To identify elements uniquely for performance optimizations",
    },
    {
      question: "What does the JavaScript 'this' keyword refer to in the context of React classes?",
      options: ["The class itself", "The instance of the class", "The parent class", "The global object"],
      correctAnswer: "The instance of the class",
    },
    {
      question: "What is the use of React.Fragment?",
      options: [
        "To return multiple elements without adding extra nodes to the DOM",
        "To manage application state",
        "To group event listeners",
        "To store temporary data",
      ],
      correctAnswer: "To return multiple elements without adding extra nodes to the DOM",
    },
    {
      question: "What are higher-order components (HOCs) in React?",
      options: [
        "Components that manage application state",
        "Functions that take a component and return a new component",
        "Components that render other components",
        "Functions that return JSX elements",
      ],
      correctAnswer: "Functions that take a component and return a new component",
    },
    {
      question: "What is the difference between 'let', 'var', and 'const' in JavaScript?",
      options: [
        "'var' has function scope, 'let' and 'const' have block scope",
        "'var' is block-scoped, 'let' is function-scoped",
        "'const' is immutable, 'let' is mutable",
        "'var' is only used in loops",
      ],
      correctAnswer: "'var' has function scope, 'let' and 'const' have block scope",
    },
    {
      question: "What is the purpose of the useReducer hook in React?",
      options: [
        "To manage complex component state logic",
        "To call side effects",
        "To replace Redux",
        "To manipulate DOM elements",
      ],
      correctAnswer: "To manage complex component state logic",
    },
    {
      question: "How does React's reconciliation process work?",
      options: [
        "It compares the new virtual DOM with the previous one to update only the changed parts",
        "It updates the entire DOM after every render",
        "It fetches data from the server",
        "It batches state updates to improve performance",
      ],
      correctAnswer: "It compares the new virtual DOM with the previous one to update only the changed parts",
    },
    {
      question: "What is event delegation in JavaScript?",
      options: [
        "Attaching an event listener to a parent element to handle events on its child elements",
        "Preventing event propagation",
        "Using events to update state",
        "Binding multiple event handlers to a single element",
      ],
      correctAnswer: "Attaching an event listener to a parent element to handle events on its child elements",
    },
    {
      question: "What are controlled components in React?",
      options: [
        "Components that store form input values in state",
        "Components that have a controlled lifecycle",
        "Components that control other components",
        "Components that render conditionally",
      ],
      correctAnswer: "Components that store form input values in state",
    },
    {
      question: "What is hoisting in JavaScript?",
      options: [
        "JavaScript's default behavior of moving declarations to the top",
        "Moving code to the server",
        "Using an external library",
        "An error-handling mechanism",
      ],
      correctAnswer: "JavaScript's default behavior of moving declarations to the top",
    },
  ],
};
