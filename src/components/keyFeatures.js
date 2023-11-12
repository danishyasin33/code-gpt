const KeyFeatures = () => {
    return (
        <div className="flex-col text-center mt-12 md:mt-24">
            <h2 className="text-5xl font-bold">
                Key Features
            </h2>
            <p className="font-medium mt-6">
                Help developers improve their code quality and efficiency with the help of AI powered code review.
            </p>
            <ul className="flex flex-wrap justify-around gap-4 md:mx-6 mt-8 w-full">
                <li className="w-1/3">
                    <div>
                        <h3 className="font-semibold">
                            Bug Detection
                        </h3>
                        <p>Find bugs and issues with your code</p>
                    </div>
                </li>
                <li className="w-1/3">
                    <div>
                        <h3 className="font-semibold">
                            Code Review
                        </h3>
                        <p>Review your code and find potential optimizations!</p>
                    </div>
                </li>
                <li className="w-1/3">
                    <div>
                        <h3 className="font-semibold">
                            Solution Builder
                        </h3>
                        <p>Build new solutions and efficient algorithms through AI</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default KeyFeatures;