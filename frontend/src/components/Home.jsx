

import image from "../../public/mahi.png"
import { SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Contact from './Contact';


function Home() {
   
  return (
    <>
    <div>
    <div className='bg-blue-300 lg:w-[100%] lg:h-[290px] grid grid-cols-2'>
         <div className='lg:w-[30%] flex '>
         <img className='lg:w-[300px] lg:h-[200px] lg:ml-20 lg:mt-10 rounded-lg' src={image} />
         </div>
         <div className='lg:w-[900px] flex flex-col   lg:-ml-[300px] lg:mt-10'>
                <p className='text-[20px] text-white font-serif'>Hello, my name is </p>
                <h1 className='text-[30px] text-white font-bold'>Mahesh Kumar Swami</h1>
                <p  className='text-[17px] text-white font-normal flex flex-row'>I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know  how I may help your project? Check out my project case studies and resume.</p>
                <button  className='lg:w-[80px] lg:h-8  bg-blue-400 lg:mt-4 lg:pb-1 rounded-lg text-white hover:bg-sky-900'>Hire me</button>
         </div>
    </div>
    <div className='flex lg:w-[100%] flex-col'>
      <h1 className='flex lg:w-[100%] lg:mt-5 lg:text-[30px] font-bold text-slate-600 justify-center  '>Skills Overview</h1>
      <p className='flex lg:w-[100%] lg:mt-5 lg:text-[16px] font-normal text-slate-600 justify-center  '>I have more than  5 month's experience building rich web applications for  sudo tach company. Below is a<br></br> quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>
      <a href='#' className='flex lg:w-[100%] lg:mt-1 lg:text-[16px] font-normal text-blue-600 justify-center hover:underline'>Check out my online resume. </a>
    </div>
     <div className='lg:w-[100%] lg:h-[300px] lg:mt-5 bg-slate-50 flex flex-col'>
      <h1 className='lg:ml-7 text-[40px] font-serif text-purple-900 '>Frontend</h1>
      <div className='flex lg:mt-5'>
            <ul className='grid grid-cols-4 justify-between lg:w-[100%]'>
             <li className='lg:w-[80px] lg:h-[80px] bg-orange-300 rounded-full mt-10 ml-[200px] '>
             <TiHtml5  className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[10px] text-[20px] font-serif '>HTML</p>
             </li>
             <li className='lg:w-[80px] lg:h-[80px] bg-orange-800 rounded-full mt-10 ml-[200px] '>
             <SiTailwindcss className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[22px] text-[20px] font-serif '>CSS</p>
             </li>
             <li className='lg:w-[80px] lg:h-[80px] bg-orange-500 rounded-full mt-10 ml-[200px] '>
             <FaBootstrap   className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[15px] text-[20px] font-serif '>BOOT</p>
             </li>
             <li className='lg:w-[80px] lg:h-[80px] bg-orange-600 rounded-full mt-10 ml-[200px] '>
             <FaReact   className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[10px] text-[20px] font-serif '>REACT</p>
             </li>
           
            </ul>
      </div>
     </div>
     <div className='lg:w-[100%] lg:h-[300px] lg:mt-5 bg-slate-50 flex flex-col'>
      <h1 className='lg:ml-7 text-[40px] font-serif text-purple-900 '>Backend</h1>
      <div className='flex lg:mt-5'>
            <ul className='grid grid-cols-4 justify-between lg:w-[100%]'>
            <li className='lg:w-[80px] lg:h-[80px] bg-indigo-200 rounded-full mt-10 ml-[200px] '>
             <FaPhp   className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[22px] text-[20px] font-serif '>PHP</p>
             </li>

             <li className='lg:w-[80px] lg:h-[80px] bg-orange-900 rounded-full mt-10 ml-[200px] '>
             <FaNodeJs  className='w-[50px] h-[50px] lg:ml-4 lg:mt-4 text-lime-700'/>
                  <p className='lg:mt-[20px] lg:ml-[10px] text-[20px] font-serif '>REACT</p>
             </li>

              
            
            
             
            </ul>
      </div>
     </div>
     <div className='lg:w-[100%] lg:h-[300px] lg:mt-5 bg-slate-50 flex flex-col'>
      <h1 className='lg:ml-7 text-[40px] font-serif text-purple-900 '>DATABASE</h1>
      <div className='flex lg:mt-5'>
            <ul className='grid grid-cols-4 justify-between lg:w-[100%]'>
            <li className='lg:w-[80px] lg:h-[80px] bg-red-300 rounded-full mt-10 ml-[200px] '>
             <SiMysql className='w-[50px] h-[50px] lg:ml-4 lg:mt-4  text-sky-400'/>
                  <p className='lg:mt-[20px] lg:ml-[5px] text-[20px] font-serif '>MYSQL</p>
             </li>

             <li className='lg:w-[80px] lg:h-[80px] bg-red-500 rounded-full mt-10 ml-[200px] '>
             <GrMysql className='w-[50px] h-[50px] lg:ml-4 lg:mt-4  text-neutral-800'/>
                  <p className='lg:mt-[20px] lg:ml-[22px] text-[20px] font-serif '>SQL</p>
             </li>
              
             <li className='lg:w-[80px] lg:h-[80px] bg-red-800 rounded-full mt-10 ml-[200px] '>
             <SiMongodb className='w-[50px] h-[50px] lg:ml-4 lg:mt-4  text-cyan-600'/>
                  <p className='lg:mt-[20px] lg:-ml-[10px] text-[20px] font-serif '>MONGODB</p>
             </li>

             
            </ul>
      </div>
     
     </div>
     
     
      <Contact/>
     
<div className='lg:w-[1263px] lg:h-[290px] border-2  bg-blue-300 flex flex-col lg:mt-[50px]'>
  <img className='lg:w-[80px] lg:h-[80px] rounded-full lg:mt-8 flex lg:ml-[600px]' src={image}/>
  <p className='flex justify-center lg:mt-3 lg:text-[30px] text-white font-medium'>Interested in hiring me for your company?</p>
  <p  className='flex justify-center lg:mt-2 lg:text-[16px] text-white font-medium'>Looking for an experienced full-stack developer to build your web app or ship your software product? To start <br></br> an initial chat, just drop me an email at mahesh@email.com or use the form on the contact page.</p>
  <button  className='lg:w-[80px] lg:h-8  flex  lg:ml-[600px] text-center justify-center lg:pt-[1px] bg-blue-400 lg:mt-4  rounded-lg text-white hover:bg-sky-900'>Let's Talk</button>
</div>
    
  </div>
    </>
  );
}

export default Home;
