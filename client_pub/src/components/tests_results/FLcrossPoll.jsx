import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function FLCrossPollRes({resultId}) {
    const [guiDataDetails, setGuiDataDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const dbData = await axios.get(`/fl-cross-poll/findbyid/${resultId}`);
            // console.log(dbData.data);
            setGuiDataDetails(dbData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> FL cross poll Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(guiDataDetails).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{guiDataDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FLCrossPollRes;
