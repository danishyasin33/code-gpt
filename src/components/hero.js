const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row w-full mt-10 md:mt-20">
            <div className="w-full md:w-1/2">
                <h1 className="text-6xl font-bold py-3">
                    Automate Bug Detection
                </h1>
                <p className="font-medium my-4">AI can help you find bugs and issues with your code and make you a better developer. Use our tool for free!</p>
                <button className="bg-indigo-700 text-white p-4 px-8 mt-5 rounded-full hover:shadow-xl">Try for Free</button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
                <img src="/hero-section.svg" />
            </div>

        </div>
    );
}

export default Hero