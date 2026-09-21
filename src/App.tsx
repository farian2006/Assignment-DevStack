import { Suspense } from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import TechnologyCard from "./Components/TechnologyCard"
import type { Technology } from "./Types/TechnologyType"



const technologyFetch = async():Promise<Technology[]> =>{
  const res=await fetch('./Data.json');
  const data=await res.json();
  return data;
}

function App() {
  
  const technologyPromise=technologyFetch();

  return (
    <>
     

      <Nav></Nav>

      <Hero></Hero>

      <Header></Header>
      <Suspense fallback={<h2>....Loading</h2>}>
      <TechnologyCard technologyPromise={technologyPromise}></TechnologyCard>
      </Suspense>
     
    </>
  )
}

export default App

