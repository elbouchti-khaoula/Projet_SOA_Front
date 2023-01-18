
import React from 'react'
import './App.css';
import Layout from './other/Layout';
import Home_Page from "./Pages/Home_Page";
function Home() {

  return (
    <Layout active={'home'} >
      <Home_Page/>
    </Layout>
  );
}

export default Home;