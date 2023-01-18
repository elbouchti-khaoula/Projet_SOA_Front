import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function List() {
    const [data, setData] = useState([
        {id: '1', nom: "100", description:"...", date:"12/03/2023"},
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
                <Card key={item.id} item={item}  />
            ))}
        </div>
    );
}

export default List;
