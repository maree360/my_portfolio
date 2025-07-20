const Experience = () => {
    return (
        <>
            <h2 className=" text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">Experience</h2>
            <div id='Experience' className='flex flex-col justify-center items-center gap-6 md:gap-2 mt-4 md:mt-0 m-8'>

                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mt-28 mt-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Wordpress</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            Teveta Limited | June 2023 - September 2023
                        </p>
                        <p className='text-sm md:text-md leading-tight text-yellow-300'>
                        &#9733; Awarded as a Certificate of the Month</p>
                        <p>
                            It was an amazing opportunity to learn & deep dive into wordpress. During this fellowship,
                            I had learnt a lot about wordpress, frontened technologies Elementor , blog , woocommerce,
                            and creating portfolio websites.
                        </p>
                    </div>
                </div>


                <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mx-6'>
                    <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
                        <h1 className='font-bold text-xl'>Web Development</h1>
                        <p className='text-sm md:text-md leading-tight text-slate-400'>
                            digiskills | feb 2024
                        </p>
                        <p>
                            During this online platform, my role is to create web applications using Html, CSS and JavaScript. While
                            creating my different projects I had also learnt about how to integrate APIs in different Projects.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Experience
