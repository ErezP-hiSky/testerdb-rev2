import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function FLdLRes({resultId}) {
    const [FLdLDetails, setFLdLDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const dbData = await axios.get(`/full-link-dl/findby_testid/${resultId}`);
            const theData = dbData.data[0];
            // console.log(theData);
            setFLdLDetails(theData);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Full Link DownLink Results Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(FLdLDetails).map((item, i) => 
                        item === "_id" ? null :
                        item === "test_id" ?
                        <tr key={i}>
                            <td >{item}</td>                            
                            <td >{FLdLDetails[item]}</td>                            
                        </tr> :
                         FLdLDetails[item].map((linkItem, j) => 
                        <tr key={j}>
                            <td >{item}</td>                        
                            <td >{FLdLDetails[item][j]}</td>                            
                        </tr>
                         )    
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FLdLRes;
