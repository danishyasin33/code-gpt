const prices = [
    {
        name: "Free Trial",
        price: 0,
        requestCount: 100,
        features: [
            "Live chat",
            "AI assist",
            "Solution Alternatives",
        ],
        advancedPermissions: false,
    },
    {
        name: "Basic",
        price: 10,
        requestCount: 1000,
        features: [
            "Live chat",
            "AI assist",
            "25 Free Light Users",
        ],
        advancedPermissions: false,
    },
    {
        name: "Pro",
        price: 20,
        requestCount: 10000,
        features: [
            "Live chat",
            "AI assist",
            "50 Free Light Users",
        ],
        advancedPermissions: true,
    }
]
const Pricing = () => {
    return (
        <div className="flex-col text-center mt-16 md:mt-24">
            <h2 className="text-4xl font-bold">
                Pricing
            </h2>
            <p className="md:mt-6">Check out our different packages and see what suits you best according to your needs</p>
            <div className="mt-14 flex flex-col md:flex-row gap-6">
                {prices.map((price, index) => {
                    return <PricingCard key={index} name={price.name} price={price.price} requestCount={price.requestCount} features={price.features} advancedPermissions={price.advancedPermissions} />
                })}
            </div>
        </div>
    );
}

const PricingCard = ({ name, price, requestCount, features, advancedPermissions }) => {
    return (
        <div className="w-full md:w-1/3 p-8 bg-neutral-100 rounded-xl justify-start items-start gap-1 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-9 inline-flex">
                <div className="self-stretch h-[389px] flex-col justify-start items-center gap-[60px] flex">
                    <div className="self-stretch h-[129px] flex-col justify-start items-center gap-4 flex">
                        <div className="self-stretch opacity-50 text-center text-slate-950 text-xl font-medium  leading-loose">{name}</div>
                        <div className="self-stretch h-[81px] flex-col justify-start items-center gap-4 flex">
                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                <div className="grow shrink basis-0 text-center text-violet-700 text-5xl font-semibold  leading-[48px]">${price}</div>
                            </div>
                            <div className="self-stretch text-center text-stone-900 text-sm font-bold  leading-none">{requestCount} requests</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[200px] flex-col justify-start items-start gap-[30px] flex">
                        <div className="self-stretch h-0.5 bg-blue-700" />
                        <div className="self-stretch h-[168px] flex-col justify-start items-start gap-6 flex">
                            {features.map((feature, index) => {
                                return (
                                    <div key={index} className="self-stretch justify-start items-center gap-[15px] inline-flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                            <div className="w-6 h-6 relative bg-blue-700 rounded-[71px] flex-col justify-start items-start flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow shrink basis-0 text-slate-950 text-sm font-bold  leading-normal">{feature}</div>
                                    </div>
                                );
                            })}
                            {!advancedPermissions && (
                                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-6 h-6 justify-center items-center flex">
                                        <div className="w-6 h-6 relative bg-white rounded-[71px] flex-col justify-start items-start flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 opacity-20 text-slate-950 text-sm font-bold  line-through leading-normal">Advanced permissions</div>
                                </div>
                            )}
                            {advancedPermissions && (
                                <div className="self-stretch justify-start items-center gap-[15px] inline-flex">
                                    <div className="w-6 h-6 justify-center items-center flex">
                                        <div className="w-6 h-6 relative bg-blue-700 rounded-[71px] flex-col justify-start items-start flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="grow shrink  text-sm font-bold  leading-normal">Advanced permissions</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button className="self-stretch px-8 py-3 bg-neutral-100 rounded-lg border border-slate-950 justify-center items-center gap-2 inline-flex hover:bg-indigo-600 hover:text-white">
                    <div className="text-center text-stone-900 text-sm font-semibold  leading-normal hover:text-white">Select Plan</div>
                </button>
            </div>
        </div>
    );
}

export default Pricing;