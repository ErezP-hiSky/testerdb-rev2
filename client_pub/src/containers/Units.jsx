import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Units.css';


function Units() {

    const [allsn, setAllsn] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('/general-test-data')
                .then((response) => {
                    // console.log(response.data);
                    const newData = response.data;
                    const allsnArr = []
                    newData.forEach((item) => {
                        // console.log(allsn.includes(item['unit_SN']));
                        if (!allsnArr.includes(item['unit_SN'])) {
                            // console.log(`number ${item['unit_SN']} in`)
                            allsnArr.push(item['unit_SN']);
                        }
                        
                    });
                    setAllsn(allsnArr);
                    // console.log("allsn")
                    // console.log(allsn);
                }, (error) => {
                    console.log(error);
                });
        }
        fetchData();
    });

    const options = ["all units" ];
    
    options.push(...allsn);
    // console.log("options");
    // console.log(options);
    // console.log(allsn)
    const [snchosen, setSnchosen] = useState();

    const history = useHistory();
    const formData = history.location.state;
    // console.log(formData);

    function handleChange(e) {
        const selectedSN = e.target.value;
        // console.log(selectedSN);
        if (selectedSN) {
            setSnchosen(selectedSN);
        }
    }

    function handleClick(e) {
        console.log(formData);
        e.preventDefault()
            history.push({
            pathname: '/tests-result',
                state: {
                    testsChosen: snchosen
                }
        }); 
    }

    return (
        <div>
            <h1> Choose Serial Number: </h1>
            <div className="select-container--main">
                <select onChange={handleChange}
                    value={snchosen}
                    className="select-container--options">
                    {options.length === 1 ?
                        <option value="empty">Empty</option> :
                        options.map((Item, i) => (
                        <option key={i} value={Item}>{Item}</option>
                    ))}
                </select>
            </div>

            <div>
                
                <button type="button" onClick={handleClick}
                    className="choose-btn">
              Search
            </button>          
            </div>
            
        </div>
    )
}

export default Units;
