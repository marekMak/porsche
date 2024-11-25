import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Stable = () => {

    const stableContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
        if(stableContainer.current) {
            gsap.registerPlugin(ScrollTrigger)
            const items = stableContainer.current.querySelectorAll('.item-stagger')

            gsap.fromTo(items,{
                opacity:0,
                x:200
            },{
                opacity:1,
                x:0,
                stagger:0.3,
                scrollTrigger:{
                    trigger: stableContainer.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub:true
                }
            })
        }

    },[])

  return (
    <section className='min-h-screen w-full px-6 lg:px-20 grid grid-cols-2'>
        <div className='hidden lg:block'></div>
        <div ref={stableContainer} className='flex flex-col w-full justify-center items-start'>
            <h1 className='text-primaryGreen text-5xl lg:text-7xl mb-10 font-medium item-stagger'>More<span className='block item-stagger'>Stable</span></h1>
            <p className='w-full lg:w-1/2 text-md lg:text-xl leading-relaxed text-justify item-stagger'>The car had a sleek and aerodynamic body design inspired by Group C race cars. Jiotto Design selected three design proposals out of the initially proposed 200 for final development. Out of the three, a design having an integrated rear wing and large side air intakes was fully developed.</p>
        </div>
    </section>
  )
}

export default Stable