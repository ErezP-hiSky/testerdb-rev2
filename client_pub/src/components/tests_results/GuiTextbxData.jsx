import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testsStyle.css';


function GuiDataRes({resultId}) {
    const [guiDataDetails, setGuiDataDetails] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            
            const guiData = await axios.get(`/gui-data/findbyid/${resultId}`);
            // console.log(guiData.data);
            setGuiDataDetails(guiData.data);
        }
        fetchData();
    }, [resultId]);


    return (
        <div  >
            <h1> Data user input in ui Details </h1>
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

export default GuiDataRes;
