import { Suspense, useState } from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import TechnologyCard from "./Components/TechnologyCard"
import type { Technology } from "./Types/TechnologyType"
import YourStack from "./Components/YourStack"



const technologyFetch = async():Promise<Technology[]> =>{
  const res=await fetch('./Data.json');
  const data=await res.json();
  return data;
}

function App() {


  const [stack,setStack]=useState<Technology[]>([]);

  const [selectedCount,setSelectedCount]=useState(0);


  const addToStack = (technology:Technology) => {
    const alreadySelected =stack.some((stack) => stack.id===technology.id)

    if(alreadySelected){
      return ;
    }
    setStack([...setStack,technology]);
    selectedCount(setSelectedCount+1);
  };

  const removeSelectedStack =(id:string) => {
    setStack(
     stack.filter((technology)=>technology.id !==id)
    );
    setSelectedCount(selectedCount-1);
  } 

  const removeAllStack = () => {
    setStack([]);

    setSelectedCount(0);
  }

  
 
  
  const technologyPromise=technologyFetch();

  return (
    <>
     

      <Nav></Nav>

      <Hero></Hero>

      <Header></Header>
     <div className="flex items-start gap-6">
     
      <Suspense fallback={<h2>....Loading</h2>}>
      <TechnologyCard 
      technologyPromise={technologyPromise}
      addToStack ={addToStack}
      stack={stack}
      ></TechnologyCard>
      </Suspense>

     <YourStack
  stack={stack}
  selectedCount={selectedCount}
  removeSelectedStack={removeSelectedStack}
  removeAllStack={removeAllStack}
/>
</div>
     
    </>
  )
}

export default App

