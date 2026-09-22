import { use } from "react";
import type { Technology } from "../Types/TechnologyType";

interface technologyProps{
    technologyPromise: Promise<Technology[]>
    
}

const TechnologyCard = ({technologyPromise}:technologyProps) => {

    const technologies=use(technologyPromise);
   
    return (
      <section className="grid grid-cols-3 gap-6 mt-2 container mx-auto mb-6">
        {technologies.map((technology) => (
            <div key={technology.id}>

            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <img src={technology.icon}className="w-12" ></img>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{technology.name}</h2>
      <span className="text-xl rounded-3xl  ">{technology.badge}</span>
    </div>
   <p>
    {technology.description}
   </p>

   <div className="flex justify-between items-center gap-10">
    <p>{technology.category}</p>
    <p>{technology.difficulty}</p>
    <p>{technology.rating}</p>
   </div>
    <div className="mt-6">
    <button className="btn btn-neutral btn-xl px-25 py-6 rounded-3xl">Add To Stack</button>
    </div>
  </div>
</div>
        </div>
        ))}
      </section>
    );
};

export default TechnologyCard;