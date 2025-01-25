

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
import Projects from "./Projects";



function Home() {
   
  return (
 <>
  <div>
  <div className="bg-blue-300 w-full  h-auto grid lg:grid-cols-2 grid-cols-1">
    <div className="w-full lg:h-[350px] flex justify-center">
      <img className="w-[210px] h-[250px] lg:w-[250px] lg:h-[290px] rounded-lg mt-5 lg:mt-7" src={image} />
    </div>
    <div className="w-full flex flex-col items-center lg:items-start p-5 lg:p-0  lg:mt-10">
      <p className="text-[16px] lg:text-[20px] text-white font-serif">Hello, my name is</p>
      <h1 className="text-[24px] lg:text-[30px] text-white font-bold text-center lg:text-left">Mahesh Kumar Swami</h1>
      <p className="text-[14px] lg:text-[17px] text-white font-normal text-center lg:mr-[70px] lg:text-left">
        I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.
        I write about web development on my blog and regularly speak at various web conferences and meetups. Want to
        know how I may help your project? Check out my project case studies and resume.
      </p>
      <button className="w-[100px] lg:w-[80px] h-8 bg-blue-400 mt-4 rounded-lg text-white hover:bg-sky-900">
        Hire me
      </button>
    </div>
  </div>

  <div className="flex flex-col items-center mt-5">
    <h1 className="text-[24px] lg:text-[30px] font-bold text-slate-600 text-center">Skills Overview</h1>
    <p className="text-[14px] lg:text-[16px] font-normal text-slate-600  lg:pl-[250px] lg:pr-[250px]  text-center mt-2">
      I have more than 5 month's experience building rich web applications for sudo tech company. Below is a quick overview
      of my main technical skill sets and tools I use. Want to find out more about my experience?
    </p>
    <a href="#" className="text-blue-600 text-[14px] lg:text-[16px] hover:underline mt-1">
      Check out my online resume.
    </a>
  </div> 

  <div className="w-full bg-slate-50 flex flex-col mt-5 p-5">
    <h1 className="text-[28px] lg:text-[40px] font-serif text-purple-900 text-center lg:text-left">Frontend</h1>
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 font-serif justify-center">
      <li className="w-[80px] h-[80px] bg-orange-300 rounded-full mx-auto flex flex-col items-center justify-center">
        <TiHtml5 className="w-[50px] h-[30px] text-sky-400 " />
        <p className="text-white">HTML</p>
      </li>
     
      <li className="w-[80px] h-[80px] bg-orange-800 rounded-full mx-auto flex flex-col items-center justify-center">
        <SiTailwindcss className="w-[50px] h-[30px] text-sky-400" />  <p className="text-white">CSS</p>
        {/* <p className="text-[14px] lg:text-[20px] font-serif mt-2">CSS</p> */}
      </li>
      <li className="w-[80px] h-[80px] bg-orange-500 rounded-full mx-auto flex flex-col items-center justify-center">
        <FaBootstrap className="w-[50px] h-[30px] text-sky-400" /> <p className="text-white">BOOT</p>
        {/* <p className="text-[14px] lg:text-[20px] font-serif mt-2">BOOT</p> */}
      </li>
      <li className="w-[80px] h-[80px] bg-orange-600 rounded-full mx-auto flex flex-col items-center justify-center">
        <FaReact className="w-[50px] h-[30px] text-sky-400" /> <p className="text-white">REACT</p>
   
      </li>
    </ul>
  </div>


 
 

  <div className="w-full bg-slate-50 flex flex-col mt-5 p-5">
    <h1 className="text-[28px] lg:text-[40px] font-serif text-purple-900 text-center lg:text-left">Backend</h1>
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 font-serif justify-center">
      <li className="w-[80px] h-[80px] bg-orange-300 rounded-full mx-auto flex flex-col items-center  justify-center">
        <FaPhp className="w-[50px] h-[30px] text-sky-400 " />
       <p className="text-white">PHP</p>
      </li>
     
      <li className="w-[80px] h-[80px] bg-orange-800 rounded-full mx-auto flex flex-col items-center justify-center">
        <FaNodeJs className="w-[50px] h-[30px] text-green-900" /> <p className="text-white">NODEJS</p>

      </li>
     
    </ul>
  </div>
    

  <div className="w-full bg-slate-50 flex flex-col mt-5 p-5">
    <h1 className="text-[28px] lg:text-[40px] font-serif text-purple-900 text-center lg:text-left">DATABASE</h1>
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 font-serif justify-center">
      <li className="w-[80px] h-[80px] bg-orange-300 rounded-full mx-auto flex flex-col items-center justify-center">
        <SiMysql className="w-[50px] h-[30px] text-sky-400 " />
        <p className="text-white">MYSQL</p>
      </li>
     
      <li className="w-[80px] h-[80px] bg-orange-800 rounded-full mx-auto flex flex-col items-center justify-center">
        <GrMysql className="w-[50px] h-[30px]  text-neutral-800" /> <p className="text-white">SQL</p>
      
      </li>
      <li className="w-[80px] h-[80px] bg-orange-500 rounded-full mx-auto flex flex-col items-center justify-center">
        <SiMongodb  className="w-[50px] h-[30px] text-cyan-600" /> <p className="text-white">MONGO</p>
      
      </li>
    
    </ul>
  </div>
  
  <Projects/>

 

  <Contact/>
 

  <div className="w-full bg-blue-300 flex flex-col items-center mt-5 p-5">
    <img className="w-[80px] h-[80px] rounded-full" src={image} />
    <p className="text-[16px] lg:text-[30px] text-white font-medium mt-3 text-center">
      Interested in hiring me for your company?
    </p>
    <p className="text-[12px] lg:text-[16px] text-white font-medium text-center mt-2">
      Looking for an experienced full-stack developer to build your web app or ship your software product? To start an
      initial chat, just drop me an email at mahesh@email.com or use the form on the contact page.
    </p>
    <button className="w-[100px] h-8 bg-blue-400 mt-4 rounded-lg text-white hover:bg-sky-900">Let's Talk</button>
  </div>
</div>

    </>
  );
}

export default Home;
