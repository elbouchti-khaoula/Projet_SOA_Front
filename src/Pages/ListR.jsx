import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardR from './CardR';

function ListR() {
    const [data, setData] = useState([
        {id: '1', nom: "100", mission:"...",fraisTransport:"...", raisRestauration:"...", fraisHotel:"..." },
     
    ]);

    useEffect(() => {
        axios.get('http://Localhost:8083/affichageDemande')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);


    console.log(data);
    return (
        <div className="card-container">
            {data.map(item => (
                <CardR key={item.id} item={item}  />
            ))}
        </div>
    );
}

export default ListR;
