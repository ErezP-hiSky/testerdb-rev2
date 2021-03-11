import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Technician.css';

function TechPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [unitSN, setunitSN] = useState("");
  const [tests, setTests] = useState([]);

  function handleChange(e) {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    
    switch (inputName) {
      case "name":
        setName(inputVal);
        break;
      case "startDate":
        setDate(inputVal);
        break;
      case "unitSN":
        setunitSN(inputVal);
        break;
      case "generalRes":
        console.log("general checxked");
        setTests({
          ...tests,
          generalRes: inputVal
        });
        break;
      default:
        console.log("no input name chosen " + inputName + " " + inputVal);
        break;
    }
  }

  function handleClick (e) {
    e.preventDefault()
    history.push({
      pathname: '/results',
      state: {
        techName: name,
        testDate: date,
        techUnitSN: unitSN,
        testsChosen: tests
      }
    }); 
  }

  return (
    <div className="tech-container" >
      <h1 className="header">Technician Page</h1>
      <h2 className="header-sub"> Search by Serial Number: </h2>
        <form action="/search" method="POST">
          <div className="search-fields">
            
            <br />
            <div className="name-input">
              <p className="name">date :</p>
              <input className="name-input-field"
                type="date"
                name="startDate" 
                autoComplete="off"
                onChange={handleChange}/>
            </div>
          <br />
           <div className="name-input">
              <p className="name">unit SN :</p>
              <input className="name-input-field"
                name="unitSN" 
                autoComplete="off"
                onChange={handleChange}/>
          </div>
          <br/>
            <button type="button" onClick={handleClick} className="search-button">
              Search
            </button>          
          </div>
        </form>
    </div>
  );
}

export default TechPage;
