import type { Technology } from "../Types/TechnologyType";
import { AiOutlineDelete } from "react-icons/ai";


interface YourStackProps {
  stack :Technology[];
  selectedCount:number;
  removeSelectedStack:(id: string) => void;
  removeAllStack:() => void;
}


const YourStack = ({stack,selectedCount,removeSelectedStack,removeAllStack}:YourStackProps) => {
    return (
        <div className="w-72 rounde-lg border border-gray-200 bg-white p-5">
            <h2 className="text-4xl font-bold ">
                Your Stack
            </h2>
            <p className="mt-1 text-sm text-gray-400y">
        {selectedCount} Technologies selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400">Your stack is empty</p>
      ) : (
        <div className="mt-5">
          {stack.map((technology) => (
            <div key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
              />

              <p>{technology.name}</p>

              <button onClick={() => removeSelectedStack(technology.id)}>
                <AiOutlineDelete />                
              </button>
              </div>
    ))};

     <button onClick={removeAllStack}>
            Remove All
          </button>
</div>
      )}
</div>
      );
 };

export default YourStack;