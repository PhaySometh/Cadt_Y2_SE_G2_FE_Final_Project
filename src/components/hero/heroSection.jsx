export function HeroSection() {
    return (
        <>
            <div className="text-black hero bg-base-200 min-h-screen bg-gray-200">
                <div className="hero-content flex-col lg:flex-row">     {/* lg:flex-row */}
                    <img
                    src="ChlartHero.png"
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=" mt-2 p-5 md:mt-3 md:p-5 lg:p-10 lg:mt-23">
                        <h1 className="text-5xl font-bold">Chlart Task Manager!</h1>
                        <p className="py-6">
                        Master your schedule with our intuitive time management platform. From daily tasks to long-term goals, we help you make every minute count.
                        </p>
                        <button className="text-white btn border-none bg-[rgb(58,76,255)] hover:bg-primary transition-colors duration-500">
                            <a href="/product">Get Started</a>
                        </button>
                        <button className="text-gray-400 btn border-none bg-gray-300 ml-8 hover:btn-primary hover:btn">
                            <a href="#">Learn More</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
