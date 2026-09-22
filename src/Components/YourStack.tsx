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
        <div>
            <h2 className="text-3xl font-bold ">
                Your Stack
            </h2>
            <p>
        {selectedCount} Technologies selected
      </p>

      {stack.length === 0 ? (
        <p>Your stack is empty</p>
      ) : (
        <div>
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