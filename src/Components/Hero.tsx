import Banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="flex justify-between gap-4 m-10 items-center container mx-auto">
            <div>
                <h1 className="text-7xl font-bold">Build Your Ideal </h1>
                <h1 className="text-7xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Development Stack</h1>
                <p className="mt-6 mb-6 max-w-lg leading-7 text-[24px] text-slate-600" >
                     Explore frontend, backend, database, and tooling options,
    compare them side by side, and put together the stack that fits your
    next project.
                </p>
                <div className="flex gap-4">
                    <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white font-semibold px-4 py-2.5 rounded-2xl">Technologies</button>
                   <button className="btn btn-soft rounded-2xl outline-white">Learn More</button>
                </div>
            </div>
            <div>
                <img src={Banner} alt="Banner Image"></img>
            </div>
        </section>
    );
};

export default Hero;