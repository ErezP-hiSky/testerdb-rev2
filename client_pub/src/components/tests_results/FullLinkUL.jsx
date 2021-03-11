import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function FLuLRes({resultId}) {
    const [FLuLDetails, setFLuLDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const dbData = await axios.get(`/full-link-ul/findby_testid/${resultId}`);
            const theData = dbData.data[0];
            // console.log(theData);
            setFLuLDetails(theData);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Full Link UpLink Results Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(FLuLDetails).map((item, i) => 
                        item === "_id" ? null :
                        item === "test_id" ?
                        <tr key={i}>
                            <td >{item}</td>                            
                            <td >{FLuLDetails[item]}</td>                            
                        </tr> :
                         FLuLDetails[item].map((linkItem, j) => 
                        <tr key={j}>
                            <td >{item}</td>                        
                            <td >{FLuLDetails[item][j]}</td>                            
                        </tr>
                         )    
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FLuLRes;
