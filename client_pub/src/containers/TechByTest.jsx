import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Technician.css';

function TechByTest() {
  const history = useHistory();

  const [tests, setTests] = useState([]);
    
  const handleCheckboxChange = event => {
    const inputChecked = event.target.checked;
    const inputVal = event.target.name;
    
    if (inputChecked) {
          setTests([
            ...tests,
            inputVal
          ]);
    }
  }

  function handleClick (e) {
    e.preventDefault()
    history.push({
      pathname: '/units',
      state: {
        testsChosen: tests
      }
    }); 
  }

  return (
    <div className="tech-container" >
      <h1 className="header">Technician Page</h1>
      <h2 className="header-sub"> Search by Test: </h2>
        <form action="/search" method="POST">
          <div className="search-fields">
            
          </div>
            <div className="tests-input">
              <p className="tests-header">tests :</p>
              
              <label className="checkbox-lbl test1">
                <input
                  type="checkbox"
                  name="firstPrepRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">First-General-Prep-test</span>
            </label>
            
            <label className="checkbox-lbl test2">
                <input
                  type="checkbox"
                  name="imuGpsRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">IMU-test</span>
            </label>
            
            <label className="checkbox-lbl test3">
                <input
                  type="checkbox"
                  name="TcxoCalRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">TCXO-calibration</span>
            </label>
            
            <label className="checkbox-lbl test4">
                <input
                  type="checkbox"
                  name="p1dbRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">P1db-test</span>
            </label>
            
            <label className="checkbox-lbl test5">
                <input
                  type="checkbox"
                  name="curConsRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">Current-consumption</span>
            </label>
            
            <label className="checkbox-lbl test6">
                <input
                  type="checkbox"
                  name="fulLinkRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">FullLink</span>
            </label>
            
            <label className="checkbox-lbl test7">
                <input
                  type="checkbox"
                  name="crossPollRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">cross-poll</span>
            </label>
            
            <label className="checkbox-lbl test8">
                <input
                  type="checkbox"
                  name="generalRes"
                  className="test-checkbox"
                  onChange={handleCheckboxChange}
                />
                <span className="test-text">General results</span>
            </label>
                        
                          
            </div>
            <br />
           
          
          <div>
            <button type="button" onClick={handleClick} className="search-button">
              Search
            </button>          
          </div>
        </form>
    </div>
  );
}

export default TechByTest;
