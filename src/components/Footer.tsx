import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'


const Footer = () => {

  

  return (
    <footer className='w-full px-4 md:px-40 py-10 text-white flex md:flex-row flex-col bg-primaryGreen items-center justify-between relative'>
        <div className='flex h-full items-center text-md mb-4 md:mb-0 md:text-xl text-white footer-text'>
            Copyright &copy; 2024 Porsche. All Rights Reserved.
        </div>
        <div className='flex max-w-max'>
            <div className='flex gap-4'>
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={linkedin}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer