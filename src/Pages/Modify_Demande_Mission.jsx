import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

function Modify_Demande_Mission() {
  
  const params = useLocation();
  let id = params.state.item.iddemandeMission;

  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [deteal, setDeteal] = useState("");
  const [msg, setMsg] = useState("");
  const [etat, setEtat] = useState('');
  const [retour, setRetour] = useState('');

console.log(id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { etat, retour};
    
    try {
      const response = await axios.put('http://Localhost:8083/demandeValidation?missionId='+id, data);
      console.log(response.data); setMsg(response.data);
    } catch (error) {
      console.error(error);
    }
    setName('');
    setDay('');
    setDeteal('');
  }

  console.error(params);
  return (

    <form onSubmit={handleSubmit}>
       {/* <p>{params.nom}</p>
        
        <p >{params.date}</p>
     

        <p>{params.description}</p>*/}
        
      <div className="input-zone ">
        <label className="input-label">Etat:</label>
        <input className="input-field w-1/2" type="text" value={etat} onChange={e => setEtat(e.target.value)} />
      </div>
      <div className="input-zone ">
        <label className="input-label">Retour:</label>
        <input className="input-field w-1/2" type="text" value={retour} onChange={e => setRetour(e.target.value)} />
      </div>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          //backgroundColor: COLORS.myGreen,
          backgroundColor: "#A9CAAA",
          marginTop: "20px",
          marginRight: "26px",
          marginLeft: "50%",
        }}
      >
        Valider
      </Button>

     
        <Button
        variant="contained" onClick={() => navigate("/list")}
        sx={{
          //backgroundColor: COLORS.myGreen,
          backgroundColor: "red",
          marginTop: "20px",
          marginRight: "26px",
          marginLeft: "50%",
        }}
      >
        Refuser
      </Button>
    </form>
  );
}

export default Modify_Demande_Mission;