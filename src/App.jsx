import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home_Page from "./Pages/Home_Page";
import Home from "./Home";
import Demande_Rembourssement from "./Pages/Demande_Rembourssement";
import Demande_Mission from "./Pages/Demande_Mission";
import  List  from "./Pages/List";
import Modify_Demande_Rembourssement from "./Pages/Modify_Demande_Rembourssement";

import Modify_Demande_Mission from "./Pages/Modify_Demande_Mission";
import ListR from "./Pages/ListR";

function App() {
	

	useEffect(() => {
		
	}, []);

	return (
		<BrowserRouter>
			<div >
				<Routes>
					<Route
						path="/"
						element={<Home_Page /> 
						}
					/>
					<Route
						path="/home"
						element={<Home_Page /> 
						}
					/>
					<Route
						path="/mission"
						element={
							<Demande_Mission />
						}
					/>
					<Route
						path="/rembourssement"
						element={<Demande_Rembourssement /> 
						}
					/>
					<Route
						path="/list"
						element={<List /> 
						}
					/>
					<Route
						path="/list_remboursement"
						element={<ListR /> 
						}
					/>
					<Route
						path="/modify-demande-mission"
						element={<Modify_Demande_Mission /> 
						}
					/>
					<Route
						path="/modify-demande-remboursement"
						element={<Modify_Demande_Rembourssement /> 
						}
					/>
					
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
