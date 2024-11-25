import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Description = () => {

    const textContainer = useRef<HTMLDivElement>(null)
    const yearContainer = useRef<HTMLDivElement>(null)

    useEffect(()=>{

        if(textContainer.current){

            gsap.registerPlugin(ScrollTrigger)

            const items = textContainer.current.querySelectorAll('.item-stagger')


            gsap.fromTo(items,{
                opacity: 0,
                y:-200,
            },{
                opacity: 1,
                y:0,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: textContainer.current,
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub:true
                }
            })


        }

    },[])

    useEffect(()=>{

        if(yearContainer.current){
            const yearItems = yearContainer.current.querySelectorAll('.year-stagger');
            const brandText = yearContainer.current.querySelectorAll('.brand');


            console.log(brandText);

            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(yearItems,{
                opacity: 0,
                y:-200,
            },{
                opacity: 1,
                y:0,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: yearContainer.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub:true
                }
            })

            gsap.fromTo(brandText,{
                opacity: 0,
                y:200,
            },{
                opacity: 1,
                y:0,
                scrollTrigger: {
                    trigger: yearContainer.current,
                    start: 'top 70%',
                    end: 'bottom 50%',
                    scrub:true
                }
            })

        }

    },[])

  return (
    <div className='min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 bg-baseBG'>
       
            <div className='flex flex-col text-6xl py-20 lg:py-0 text-primaryGreen font-bold justify-center items-center'>
                <div ref={textContainer} className='flex flex-col justify-start items-center -rotate-90'>
                    <h1 className='item-stagger'>Pure.</h1>
                    <h1 className='my-10 item-stagger'>Rare.</h1>
                    <h1 className='item-stagger'>Beautiful.</h1>
                </div>
            </div>
            <div ref={yearContainer} className='flex flex-col py-20 lg:py-0 text-6xl text-white bg-primaryGreen font-bold h-full justify-center items-center'>
                <h1 className='year-stagger'>1</h1>
                <h1 className='py-10 year-stagger'>9</h1>
                <h1 className='pb-10 year-stagger'>7</h1>
                <h1 className='pb-10 year-stagger'>5</h1>
                <h1 className='pt-10 brand text-5xl lg:text-8xl text-secondaryGreen'>Porsche</h1>
            </div>
        </div>
  )
}

export default Description