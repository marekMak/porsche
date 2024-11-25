import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Experience = () => {

    const itemContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
        if(itemContainer.current) {
            gsap.registerPlugin(ScrollTrigger)
            const items = itemContainer.current.querySelectorAll('.stagger-item')

            gsap.fromTo(items,{
                opacity:0,
                x:-200
            },{
                opacity:1,
                x:0,
                stagger:0.3,
                scrollTrigger:{
                    trigger: itemContainer.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub:true
                }
            })
        }

    },[])

  return (
    <section className='min-h-screen w-full px-6 lg:px-20 bg-baseBG flex justify-center lg:justify-start items-center'>
        <div ref={itemContainer} className=''>
            <h1 className='text-primaryGreen text-5xl lg:text-7xl mb-10 font-medium stagger-item'>Premium<span className='block'>Experience</span></h1>
            <p className='w-1/2 text-md lg:text-xl leading-relaxed text-justify stagger-item'>The Caspita had a bonded aluminium and carbon fibre monocoque chassis made by Mitsubishi Rayon Co., Ltd. The construction technique involved sandwiching aluminium between layers of carbon fibre and curing them in an autoclave to create a rigid structure. The process was repeated 15 times over a span of more than 2 months.</p>
        </div>
    </section>
  )
}

export default Experience