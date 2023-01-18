import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function CardR({ item }) {
    let navigate = useNavigate();
    console.log(item);
    return (
        <div className="card">
            <div className="card-content">
                <p>Nom:{item.nom}</p>
                <p>mission:{item.mission}</p>
                <p>fraisTransport:{item.fraisTransport}</p>
                <p>raisRestauration:{item.raisRestauration}</p>
                <p>fraisHotel:{item.fraisHotel}</p>
                <p>durée:{item.durée}</p>
                <p>Etat: {item.etat}</p>
                <p>Retour: {item.retour}</p>

            </div>
            
                <Button
                className="modify-btn" onClick={() => navigate("/modify-demande-remboursement" + `?remboursementId=${item.idrembouresement}`, {
                        state: {
                            item: item,
                            id:item.id


                        }
                    })}
                    sx={{
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

export default CardR;
