import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Home.css";

function Demande_Rembourssement() { 
  const [name, setName] = useState('');
  const [mission, setMission] = useState('');
  const [fraisTransport, setFraisTransport] = useState('');
  const [fraisRestauration, setFraisRestauration] = useState('');
  const [fraisHotel, setFraisHotel] = useState('');
  const [durée, setDurée] = useState('');
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);


 

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = { name, mission,fraisTransport,fraisRestauration,fraisHotel, durée,retour,etat, };
      try {
        const response = await axios.post('http://Localhost:8083/demandeRemboursement', data);
        console.log(response.data); setMsg(response.data); setShowMsg(true);
      } catch (error) {
        console.error(error); setShowMsg(false);
      }
      setName('');
      setMission('');
  }
  return (
  
    <form >
    <div className="input-zone ">
          <label className="input-label">Nom:</label>
          <input className="input-field w-1/2" type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
    <br />
    <div className="input-zone ">
          <label className="input-label">Mission:</label>
          <input className="input-field w-1/2" type="text" value={mission} onChange={e => setMission(e.target.value)} />
      </div>
      <br />
      <div className="input-zone ">
          <label className="input-label">Frais de Transport:</label>
          <input className="input-field w-1/2" type="text" value={fraisTransport} onChange={e => setFraisTransport(e.target.value)} />
      </div>
    <br />
    <div className="input-zone ">
          <label className="input-label">Frais de Restauration:</label>
          <input className="input-field w-1/2" type="text" value={fraisRestauration} onChange={e => setFraisRestauration(e.target.value)} />
      </div>
    <br />
    
    <div className="input-zone ">
          <label className="input-label">Frais Hotel :</label>
          <input className="input-field w-1/2" type="text" value={fraisHotel} onChange={e => setFraisHotel(e.target.value)} />
      </div>
    <br />
    
    <div className="input-zone ">
          <label className="input-label">La durée:</label>
          <input className="input-field w-1/2" type="text" value={durée} onChange={e => setDurée(e.target.value)} />
      </div>
    <br />
   

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
            Submit
          </Button>
          <div>
    {showMsg && (<label className="input-label">{msg}</label>)}</div>
  </form>
  );
}

export default Demande_Rembourssement;
