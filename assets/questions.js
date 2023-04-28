const questionBank = [

    {
        question: 'Javascript language is?',
        answersArray: [
          { answer: 'Object Oriented', correct: false },
          { answer: 'Object Based', correct: true }, // Correct
          { answer: 'Assembly Language', correct: false },
          { answer: 'High-level', correct: false }
        ]
      },
      {
        question: 'Which is a Conditional Expression?',
        answersArray: [
          { answer: 'if-else', correct: false },
          { answer: 'Switch statement', correct: false },
          { answer: 'If-then-else', correct: false },
          { answer: 'immediate if', correct: true } // Correct
        ]
      },
      {
        question: 'What is a block statement?',
        answersArray: [
          { answer: 'Conditional block', correct: false },
          { answer: 'Combines a number of statements into a single compound statement', correct: true }, // Correct
          { answer: 'Both conditional block and a single statement', correct: false },
          { answer: 'Contains a single statement', correct: false }
        ]
      },
      {
        question: 'Function and Var are known as?',
        answersArray: [
          { answer: 'Keywords', correct: false },
          { answer: 'Data types', correct: false },
          { answer: 'Declaration statements', correct: true }, // Correct
          { answer: 'Prototypes', correct: false }
        ]
      },
      {
        question: 'Given the same name, which Var takes precendence?',
        answersArray: [
          { answer: 'Global', correct: false },
          { answer: 'Local element', correct: true }, // Correct
          { answer: 'A & B', correct: false },
          { answer: 'None of the above', correct: false }
        ]
      },
      {
        question: 'Correct way for calling Javascript code?',
        answersArray: [
          { answer: 'Preprocessor', correct: false },
          { answer: 'Triggering Event', correct: false },
          { answer: 'RMI', correct: false },
          { answer: 'Function/Method', correct: true } // Correct
        ]
      },
      {
        question: 'In Javascript, what is not considered an error?',
        answersArray: [
          { answer: 'Syntax error', correct: false },
          { answer: 'Missing semicolons', correct: false },
          { answer: 'Division by zero', correct: true }, // Correct
          { answer: 'Missing a bracket', correct: false }
        ]
      },
      {
        question: 'Which of the following object functions returns a number value?',
        answersArray: [
          { answer: 'toString()', correct: false },
          { answer: 'valueOf()', correct: true }, // Correct
          { answer: 'toLocaleString()', correct: false },
          { answer: 'toPrecision()', correct: false }
        ]
      },
      {
        question: 'In JavaScript, what will be used for calling the function definition expression?',
        answersArray: [
          { answer: 'Function prototype', correct: false },
          { answer: 'Function literal', correct: true }, // Correct
          { answer: 'Function calling', correct: false },
          { answer: 'Function declaration', correct: false }
        ]
      },
      {
        question: 'Which one of the following operator is used to check weather a specific property exists or not?',
        answersArray: [
          { answer: 'Exists', correct: false },
          { answer: 'exist', correct: false },
          { answer: 'within', correct: false },
          { answer: 'in', correct: true } // Correct
        ]
      },

];

function shuffleQB() {
    // clone questionBank
    let questionBankClone = questionBank;
    // For each question, shuffle answer order
    for (let i = 0; i < questionBankClone.length; i++) {

        let answersArray = questionBankClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // Shuffle question order
    questionBankClone = questionBankClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionBankClone;
};