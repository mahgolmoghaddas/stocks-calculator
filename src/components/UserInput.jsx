import React, { useState } from "react";

function UserInput({onChangeInput, userInput}) {


  return (
    <section id="user-input">
      <div className="input-group">
        <label>INITIAL INVESTMENT</label>
        <input type="number" required onChange={(e)=>onChangeInput('initialInvestment', e.target.value)} value={userInput.initialInvestment}/>
        <label>ANNUAL INVESTMENT</label>
        <input type="number" required onChange={(e)=>onChangeInput('annualInvestment', e.target.value)} value={userInput.annualInvestment}/>
      </div>
      <div className="input-group">
        <label>EXPECTED RETURN</label>
        <input type="number" required onChange={(e)=>onChangeInput('expectedReturn', e.target.value)} value={userInput.expectedReturn}/>
        <label>DURATION</label>
        <input type="number" required onChange={(e)=>onChangeInput('duration', e.target.value)} value={userInput.duration}/>
      </div>
    </section>
  );
}

export default UserInput;
