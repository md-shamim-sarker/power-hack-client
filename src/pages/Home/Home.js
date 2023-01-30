import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero h-screen" style={{backgroundImage: `url("https://images.unsplash.com/photo-1509390221805-d1c887a72a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Power Hack</h1>
                        <p className="mb-5">Bangladesh became an independent country in 1971 and since 1972 electricity in Bangladesh had been produced and managed by the Bangladesh Power Development Board under the Ministry of Power, Energy and Mineral Resources.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="hero mt-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='...' />
                    <div className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Power Hack News</h1>
                        <p className="py-6">Bangladesh became an independent country in 1971 and since 1972 electricity in Bangladesh had been produced and managed by the Bangladesh Power Development Board under the Ministry of Power, Energy and Mineral Resources.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;