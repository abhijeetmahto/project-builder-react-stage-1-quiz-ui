import React, { Component } from 'react';
import './Quiz.css'
const QuizComponent = () =>{
    return(
        <>
         <div className="box">
                <h1>Question</h1>
                <span className="quesNo">4 of 15</span>
                <div className="QueData">
                    <p>Which is the only mammal that can't jump?</p>
                </div>
                <div className="options">
                    <button>Dog</button>
                    <button>Goat</button>
                    <button>Elephant</button>
                    <button>Lion</button>
                </div>
                <div className="bottom">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        </>
    )
}
export default QuizComponent;