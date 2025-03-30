import Header from "./components/Header";
import UserInput from "./components/UserInput";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(
    {
        initialInvestment: 1000,
        annualInvestment: 12000,
        expectedReturn: 5,
        duration: 10
    }
)

const changeInput=(inputIdentifier, newValue)=>{
  setUserInput(
      (prevState)=>{
       return   {
              ...prevState,
              [inputIdentifier] : +newValue
              
          }
      }
  )
}

  return (
    <>
      <Header />
      <UserInput onChangeInput={changeInput} userInput={userInput}/>
    </>
  );
}

export default App;
