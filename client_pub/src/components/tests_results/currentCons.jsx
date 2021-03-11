
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function CurrentConsumption({resultId}) {
    const [Currentdata, setCurrentdata] = useState({});
   
    useEffect(() => {
       
        const fetchData = async () => {
            await axios.get(`/current-cons/findbyid/${resultId}`)
                .then(function (response) {
                    // handle success
                    const newData = response.data;
                    setCurrentdata(newData);
                })
                .catch(function (error) {
                    // handle error
                    console.log("There is an error");
                    console.log(error);
                    // console.log(Currentdata);
                });
        }
        fetchData();
    }, [resultId]);

    return (
        <div className="cur-cons-data-div">
            <span className="current-consumption-header">Current Consumption :</span>
            <br />
            
            <table className="cur-cons-table">
                <thead>
                    <tr>
                        <th>current parameters:</th>
                        {JSON.stringify(Currentdata) === '{}' ? <th>"waiting for data ..."</th> :
                            Object.keys(Currentdata['current_consumption_test']['bat_status'])
                                .map((item) =>
                            <th key={item} className="current-consumption-table-keys">{item}</th>
                                )}
                    </tr>
                </thead>
                <tbody>                    
                    {JSON.stringify(Currentdata) === '{}' ? <tr><td>Waiting for data ...</td></tr> :
                    Currentdata['current_consumption_test']['bat_status']['current'].map((object, i) => 
                            <tr key={i}>
                                <td>{i + 1}</td>
                                {JSON.stringify(Currentdata) === '{}' ? <td>Waiting for data ...</td> :
                                    Object.keys(Currentdata['current_consumption_test']['bat_status']).map((item, ii) =>                                            
                                            <td key={ii + i} className="current-consumption-table-keys">
                                                {Currentdata['current_consumption_test']['bat_status'][item][i]}
                                            </td>)}
                            </tr>
                    )}                      
                </tbody>               
            </table>
            <span className="cur-con-result">Current Consumption result :</span>
            <span>{' '}{JSON.stringify(Currentdata) === '{}' ? "waiting for data ..." :
                Currentdata['current_consumption_test']['current Consumption Test result']}</span>
        </div>
    );
};

export default CurrentConsumption;
