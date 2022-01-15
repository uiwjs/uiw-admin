import React from 'react';
import Head from './Head';
import Tab from "./Tab"
import Hot from "./Hot"
const Home = () => {
  return (
    <div style={{ overflow: "auto" }} >
      <Head />
      <Tab />
      <Hot />
    </div>
  );
}
export default Home