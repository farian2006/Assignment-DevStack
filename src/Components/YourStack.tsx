import type { Technology } from "../Types/TechnologyType";
import { RxCross1 } from "react-icons/rx";


interface YourStackProps {
  stack :Technology[];
  selectedCount:number;
  removeSelectedStack:(id: string) => void;
  removeAllStack:() => void;
}


const YourStack = ({stack,selectedCount,removeSelectedStack,removeAllStack}:YourStackProps) => {
    return (
        <div className="w-130 rounde-lg border border-gray-200 bg-white p-10">
            <h2 className="text-4xl font-bold ">
                Your Stack
            </h2>
            <p className="mt-1 text-2xl text-gray-400y">
        {selectedCount} Technologies selected
      </p>

<div>

      {stack.length === 0 ? (
        <p className="text-2xl text-gray-400">Your stack is empty</p>
      ) : (
        <div className="mt-5">
          {stack.map((technology) => (
            <div className="flex justify-between m-5 border rounded-3xl border-gray-200 bg-gray-100 w-85 h-35 p-5 items-center " key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
              className="w-15 h-15" />
              <div className="flex flex-col text-3xl"> 
              <p>{technology.name}</p>
              <p>{technology.category}</p>
              </div>
              <button onClick={() => removeSelectedStack(technology.id)}>
                <RxCross1 />
              </button>
              </div>
            

    ))};

     
</div>
      )}
 </div>  

    <button onClick={removeAllStack} className="btn btn-outline mt-4 w-full">  Remove All</button>
</div>
      );
 };

export default YourStack;