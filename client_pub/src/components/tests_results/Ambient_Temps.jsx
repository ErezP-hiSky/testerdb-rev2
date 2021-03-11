import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function AmbientTempRes({resultId}) {
    const [temps, setTemps] = useState([]);

    useEffect(() => {
        const fetchTemps = async () => {
            const tempData = await axios.get(`/ambient-temp/findbyid/${resultId}`);
            // console.log(tempData.data);
            setTemps(tempData.data);
        }
        fetchTemps();
    }, [resultId]);


    return (
        <div className="ambient-temp-div">
            <span>Ambient Temperature :</span>
            <table>
                <thead>
                    <tr>
                        <th>id</th>                        
                        <th className="ambient-temp-item-id">{temps._id}</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>temp:</td>                        
                        <td className="ambient-temp-item">{temps.ambient_temp}</td>                        
                    </tr>
                </tbody>
                
            </table>
            
        </div>
    );
};

export default AmbientTempRes;
