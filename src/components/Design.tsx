import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Design = () => {

    const designContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
        if(designContainer.current) {
            gsap.registerPlugin(ScrollTrigger)
            const items = designContainer.current.querySelectorAll('.item-stagger')

            gsap.fromTo(items,{
                opacity:0,
                x:200
            },{
                opacity:1,
                x:0,
                stagger:0.3,
                scrollTrigger:{
                    trigger: designContainer.current,
                    start: 'top 50%',
                    end: 'top 30%',
                    scrub:true
                }
            })
        }

    },[])
  return (
    <section className='min-h-screen w-full px-6 lg:px-20 grid grid-cols-2'>
        <div className='hidden lg:block'></div>
        <div ref={designContainer} className='flex flex-col w-full justify-center items-start'>
            <h1 className='text-primaryGreen text-5xl lg:text-7xl mb-10 font-medium item-stagger'>Beautiful<span className='block item-stagger'>Design</span></h1>
            <p className='w-full lg:w-1/2 text-md lg:text-xl leading-relaxed text-justify  item-stagger'>We believe that the purest creation are those where the design,the driving experience, the passenger experience and engineering, all play an equal role.</p>
        </div>
    </section>
  )
}

export default Design