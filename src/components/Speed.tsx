import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Speed = () => {

  const speedContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
        if(speedContainer.current) {
            gsap.registerPlugin(ScrollTrigger)
            const items = speedContainer.current.querySelectorAll('.item-stagger')

            gsap.fromTo(items,{
                opacity:0,
                x:-200
            },{
                opacity:1,
                x:0,
                stagger:0.3,
                scrollTrigger:{
                    trigger: speedContainer.current,
                    start: 'top 50%',
                    end: 'top 30%',
                    scrub:true
                }
            })
        }

    },[])
  return (
    <section className='min-h-screen w-full px-6 lg:px-20 bg-baseBG flex justify-center lg:justify-start items-center'>
        <div ref={speedContainer} className='flex flex-col w-full justify-center items-start'>
            <h1 className='text-primaryGreen text-5xl lg:text-7xl mb-10 font-medium item-stagger'>Timeless<span className='block item-stagger'>Speed</span></h1>
            <p className='w-1/2 text-md lg:text-xl leading-relaxed text-justify item-stagger'>With energising performance derived from optimised aerodynamics ground.</p>
        </div>
        <div></div>
    </section>
  )
}

export default Speed