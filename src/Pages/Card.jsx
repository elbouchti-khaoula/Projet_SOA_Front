import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Card({ item }) {
    let navigate = useNavigate();
    console.log(item);
    return (
        <div className="card">
            <div className="card-content">
                <p>Nom:{item.nom}</p>
                <p>Date:{item.date}</p>
                <p>Description:{item.description}</p>
                <p>Etat: {item.etat}</p>
                <p>Retour: {item.retour}</p>

            </div>
            
                <Button
                className="modify-btn" onClick={() => navigate("/modify-demande-mission" + `?missionId=${item.iddemandeMission}`, {
                        state: {
                            item: item,
                            id:item.id


                        }
                    })}
                    sx={{
                        //backgroundColor: COLORS.myGreen,
                        backgroundColor: "#A9CAAA",
                        marginTop: "2px",
                        marginRight: "26px",
                        marginLeft: "auto",
                        fontFamily: "Arial, sans-serif",
                        color: "white"
                    }}
                >
                    Modify
                </Button>
                

                          

        </div>
    );
}

export default Card;
