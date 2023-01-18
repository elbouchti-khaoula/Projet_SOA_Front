/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home_Page() {
    const [missionRequest, setMissionRequest] = useState(false);
    const [refundRequest, setRefundRequest] = useState(false);
  
    const handleMissionRequest = () => {
      alert("You have clicked on Mission Request button.");
      setMissionRequest(!missionRequest);
    }
  
    const handleRefundRequest = () => {
      alert("You have clicked on Refund Request button.");
      setRefundRequest(!refundRequest);
    }
  
  return (
    <div className="flex">
     <div className="w-full h-[91vh] overflow-auto flex flex-col items-center ">
      
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     <div>
<Link to="/mission">
            <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "#A9CAAA",
                marginRight: "26px",
                marginLeft: "auto",
              }}
              onClick={handleMissionRequest}
            >
              Demande de mission
            </Button>
          </Link>
</div>
<div>
<Link to="/rembourssement">
            <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "#A9CAAA",
                marginRight: "26px",
                marginLeft: "auto",
              }}
              onClick={handleRefundRequest}
            >
              Demande de rembourssement
            </Button>
          </Link>
</div>
<div>
<Link to="/list">
            <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "#A9CAAA",
                marginRight: "26px",
                marginLeft: "auto",
              }}
              onClick={handleRefundRequest}
            >
              Visualiser les Demandes  de mission
            </Button>
          </Link>
</div>
<div>
<Link to="/list_remboursement">
            <Button
              variant="contained"
              sx={{
                //backgroundColor: COLORS.myGreen,
                backgroundColor: "#A9CAAA",
                marginRight: "26px",
                marginLeft: "auto",
              }}
              onClick={handleRefundRequest}
            >
              Visualiser les Demandes rembourssement
            </Button>
          </Link>
</div>
 </div>
 
    
        
      </div>
	  
    </div>
  );
}

export default Home_Page;