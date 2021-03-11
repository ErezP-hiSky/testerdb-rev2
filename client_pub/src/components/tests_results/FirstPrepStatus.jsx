import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function FirstPrepStatRes({resultId}) {
    const [firstPrepStatDetails, setFirstPrepStatDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const firstPrepStatData = await axios.get(`/first-prep-stat/findbyid/${resultId}`);
            // console.log(firstPrepStatData.data);
            setFirstPrepStatDetails(firstPrepStatData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Data First prep results Details </h1>
            <table className="cur-cons-table">
                <tbody>
                    {Object.keys(firstPrepStatDetails).map((item, i) => 
                        <tr key={i*1}>
                            <td >{item}</td>                            
                            <td >{firstPrepStatDetails[item]}</td>                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FirstPrepStatRes;
