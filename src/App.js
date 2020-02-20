import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Search from './containers/Search/Search'
import Content from './containers/Content/Content'

function App() {
  return (
    <Layout>
      <Search/>
       <Content/>
    </Layout>  
  );
}

export default App;
