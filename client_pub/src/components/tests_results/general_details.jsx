import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function GeneralTestDataRes({resultId}) {
    const [general, setGeneral] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('/general-test-data/findbyid/' + resultId)
                .then((response) => {
                    // console.log(response.data);
                    setGeneral(response.data);
                    // console.log(response.data['_id']);
                    
                }, (error) => {
                    console.log(error);
                });
            
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <span>general test details:</span>
            <div className="general-test-details-div">
                
                <span className="unit-sn-label">unit serial number: </span>
                <p className="general-test-item">{general['unit_SN']}</p>                
                <br />
                <span className="unit-sn-label">test id: </span>
                <p className="general-test-item">{general._id}</p> 
                <br />
                <span className="unit-sn-label">Tester name: </span>
                <p className="general-test-item">{general['Tester name']}</p> 
                <br />
                <span className="unit-sn-label">Test date: </span>
                <p className="general-test-item">{general['Test Date']}</p> 
                <br/>
                <span className="unit-sn-label">Final test result: </span>
                <p className="general-test-item">{general.final_test_result}</p>
                
            </div>
            
        </div>
    );
};

export default GeneralTestDataRes;
