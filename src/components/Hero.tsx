import { useEffect, useRef } from 'react'

import porscheLogo from '../assets/porscheLogo.png'

import gsap from 'gsap'
const Hero = () => {

    const infoContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const items = document.querySelectorAll('.stagger-item');

        gsap.fromTo(items,
            {opacity: 0, y:-200}
            ,{
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3
        })
    },[])

    useEffect(() => {

        if(infoContainer.current){
            const infoStagger = infoContainer.current.querySelectorAll('.info-stagger');
            gsap.fromTo(infoStagger,
                {opacity: 0, x:200}
                ,{
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.3
            })
        }

    }, [])

  return (
    <div className='h-screen w-full bg-baseBG pt-10 px-20 flex flex-col justify-between relative'>
        <h1 className='stagger-item absolute w-full left-[50%] top-80 lg:top-80 text-slate-300 opacity-30 -translate-y-[50%] text-center -translate-x-[50%] text-3xl lg:text-7xl font-extrabold'>Porsche 911 Carrera S4</h1>
        <div className='w-full flex flex-col items-center z-10'>
            <img src={porscheLogo} className='w-72 stagger-item' />
            <h1 className='stagger-item text-xl my-10'>An experience so Beautiful that even the God envy.</h1>
        </div>
        <div className='absolute w-full h-96 top-[50%] left-0 -translate-y-[50%]'>
        </div>
        <div ref={infoContainer} className="grid grid-cols-1 xl:grid-cols-5 min-h-28 py-10 px-20">
            <div className="flex flex-col mb-2 lg:mb-0 items-center text-xl info-stagger">
                <h1 className='text-xl'>Speed</h1>
                <h2 className='text-2xl'><span className='text-primaryGreen font-bold'>299 </span>km/h</h2>
            </div>
            <div className="flex flex-col mb-2 lg:mb-0 items-center text-xl info-stagger">
                <h1 className='text-xl'>Power</h1>
                <h2 className='text-2xl'><span className='text-primaryGreen font-bold'>193.9 </span>kw</h2>
            </div>
            <div className="flex flex-col mb-2 lg:mb-0 items-center text-xl info-stagger">
                <h1 className='text-xl'>0-100 km/h</h1>
                <h2 className='text-2xl'><span className='text-primaryGreen font-bold'>4.1 </span>s</h2>
            </div>
            <div className="flex flex-col mb-2 lg:mb-0 items-center text-xl info-stagger">
                <h1 className='text-xl'>Fuel</h1>
                <h2 className='text-2xl text-primaryGreen font-bold'>Gasoline</h2>
            </div>
            <div className="flex flex-col mb-2 lg:mb-0 items-center text-xl info-stagger">
                <h1 className='text-xl'>Type</h1>
                <h2 className='text-2xl text-primaryGreen font-bold'>Sport</h2>
            </div>
        </div>
    </div>

  )
}

export default Hero