import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "What of the following is used in React.js to increase performance?",
        "a": "Original DOM",
        "b": "Virtual DOM",
        "c": "Both A and B",
        "d": "None of the above.",
        "correct": "b"
    },
    {
        "question": "What is the default port where webpack-server runs?",
        "a": "3000",
        "b": "8080",
        "c": "8000",
        "d": "6060",
        "correct": "b"
    },
    {
        "question": "How many numbers of elements a valid react component can return?",
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "correct": "a"
    },
    {
        "question": "What is the declarative way to render a dynamic list of components based on values in an array?",
        "a": "Using the reduce array method",
        "b": "Using the <Each /> component",
        "c": "Using the Array.map() method",
        "d": "With a for/while loop",
        "correct": "c"
    },
    {
        "question": "What are the two ways to handle data in React?",
        "a": "State & Props",
        "b": "Services & Components",
        "c": "State & Services",
        "d": "State & Components",
        "correct": "A"
    },
    {
        "question": "Among The following options, choose the one which helps react for keeping their data uni-directional?",
        "a": "DOM",
        "b": "Flux",
        "c": "JSX",
        "d": "Props",
        "correct": "b"
    },
    {
        "question": "Using which of the following command can prevent default behaviour at in react?",
        "a": "preventDefault()",
        "b": "avoidDefault()",
        "c": "revokeDefault()",
        "d": "none of the above",
        "correct": "a"
    },
    {
        "question": " What is Babel?",
        "a": "A transpiler",
        "b": "An interpreter",
        "c": "A Compiler",
        "d": "Both Compiler and Transpilar",
        "correct": "b"
    },
    {
        "question": "What is the purpose of super() in React?",
        "a": "To call the constructor of the parent class",
        "b": "To call the constructor of the child class",
        "c": "To call the constructor of the current class",
        "d": "To call the constructor of the sibling class",
        "correct": "a"
    },
    {
        "question": "What does ES6 stand for?",
        "a": "ECMAScript 6",
        "b": "ECMA 6",
        "c": "ECMAJavascript 6",
        "d": "ECMAScript Javascript",
        "correct": "a"
    },
    {
        "question": "What is the purpose of the render() method in React?",
        "a": "To render the component",
        "b": "To render the component to the DOM",
        "c": "To render the component to the DOM and return the component",
        "d": "To render the component to the DOM and return the component to the DOM",
        "correct": "b"
    },
    {
        "question": "Which of the following function is used to change the state of the React.js component?",
        "a": "this.setState()",
        "b": "this.setChangeState",
        "c": "this.State{}",
        "d": "None of the above",
        "correct": "A"
    },
    {
        "question": "Which of the following method refers to the parent class in React.js?",
        "a": "inherits()",
        "b": "self()",
        "c": "super()",
        "d": "this()",
        "correct": "C "
    },
    {
        "question": "Which of the following is not a valid React.js component?",
        "a": "React.Component",
        "b": "React.PureComponent",
        "c": "React.Mixin",
        "d": "React.Children",
        "correct": "c"
    },
    {
        "question": "What will happen if you render an input element with disabled = {false}?",
        "a": "It will be rendered as disabled",
        "b": "It will not be rendered at all",
        "c": "It will be rendered as enabled",
        "d": "You cannot set it false.",
        "correct": "c"
    }

        

]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    const TIMEOUT_IN_SECONDS = 50;
    const [timeLeft, setTimeLeft] = useState(TIMEOUT_IN_SECONDS);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect,timeLeft,setTimeLeft
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
