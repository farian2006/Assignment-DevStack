import { use } from "react";
import type { Technology } from "../Types/TechnologyType";
import { MdOutlineStar } from "react-icons/md";

interface technologyProps{
    technologyPromise: Promise<Technology[]>
    addToStack:(technology:Technology) => void,
    stack:Technology[],
    
}

const TechnologyCard = ({technologyPromise,addToStack,stack}:technologyProps) => {

    const technologies=use(technologyPromise);
   
    return (
    <div className="grid grid-cols-3 gap-4 container mx-auto">
      {technologies.map((technology) => {
        const isSelected = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <div
            key={technology.id}
            className="w-64 rounded-lg border border-gray-200 bg-white p-7"
          >
            <div className="flex justify-between gap-10"> 
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-10 w-10 object-contain"
            />

            <p>{technology.badge}</p>
            </div>

            <h3 className="mt-3 text-lg font-bold">
              {technology.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {technology.description}
            </p>

            <div className="flex justify-between items-center gap-3 ">
            <p>{technology.category}</p>
            <p>{technology.difficulty}</p>
            <p>{technology.rating}
              <MdOutlineStar /></p> 
            </div> 

            <button
              onClick={() => addToStack(technology)}
              
              disabled={isSelected}
              className={`mt-4 w-full rounded-md py-2 text-sm font-medium ${
                isSelected
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologyCard;