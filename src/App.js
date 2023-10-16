import React from "react";
function ageCalc(){
  var data = document.getElementById("DOB").value;  
    let dob = new Date(data); 
    let day = dob.getDate(); 
    let month = dob.getMonth(); 
    let year = dob.getFullYear(); 
    const today = new Date();
    const cYear=today.getFullYear();
    const cMonth=today.getMonth();
    const cDay=today.getMonth();
    const age=(cYear-year-1)+Math.floor((12-month+cMonth-1+Math.floor((30-day+cDay))/30)/12);
    document.getElementById('result').innerHTML="You are "+age+" years old";
    return age;
}

function App() {
  
  return (
    
    <center>
    <div className="box">
      <h1>Age calculator</h1>
      <h3>Enter Your Date Of Birth</h3>
      <input id="DOB" type="date"/><br/>
      <button onClick={ageCalc}>Calculate Age</button>
      <h2 id="result">0</h2>
    </div>
    </center>
    
  );
}
export default App;
