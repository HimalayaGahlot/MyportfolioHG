import Head from 'next/head'
import Image from 'next/image'
import { Inter, Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from "./logo"
import Script from 'next/script';
import { useEffect, useRef } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: "100" })

export default function Home() {
  const appearNav = () => {
    const appearNavId = document.getElementById("appearNav")
    const ribbonId = document.getElementById("ribbon")
    appearNavId.classList.toggle("sliderytleft")
    ribbonId.classList.toggle("sliderytleftribbon")

  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenelement = document.querySelectorAll('.hinder')
    hiddenelement.forEach((el) => observer.observe(el))



    let up = document.querySelectorAll(".up")
    let upd = document.querySelectorAll(".upd")
    let upd1 = document.querySelectorAll(".upd1")
    let upd2 = document.querySelectorAll(".upd2")
    let upd3 = document.querySelectorAll(".upd3")

    up.forEach((ele) => {
      observer.observe(ele)
    })
    const observerd = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showd');
        } else {
          entry.target.classList.remove('showd');
        }
      })
    })
    upd.forEach((ele) => {
      observerd.observe(ele)
    })
    const observerd1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showd1');
        } else {
          entry.target.classList.remove('showd1');
        }
      })
    })
    upd1.forEach((ele) => {
      observerd1.observe(ele)
    })
    const observerd2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showd2');
        } else {
          entry.target.classList.remove('showd2');
        }
      })
    })
    upd2.forEach((ele) => {
      observerd2.observe(ele)
    })
    const observerd3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showd3');
        } else {
          entry.target.classList.remove('showd3');
        }
      })
    })
    upd3.forEach((ele) => {
      observerd3.observe(ele)
    })


  }, [])

  // let iniscrolly=0;
  useEffect(() => {
    const handleScroll = () => {
      let scrolly = window.scrollY;
      const cards = document.getElementById('glassmorph');
      if (scrolly > 350) {
        cards.classList.add('-translate-y-[110%]')
        cards.style.transitionDuration = '2s';
      }
      else {
        cards.classList.remove('-translate-y-[110%]')

      }

    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Himalaya Gahlot</title>
        <meta name="description" content="Software Developer Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <main className='grid'>

        <nav className="fixed bg-white z-40 flex justify-between h-[70px] w-[100vw] pt-2">
          <div className="hidden sm:flex justify-between text-black font-light text-sm w-[50%] pl-12 p-4">
            <div className="under relative cursor-pointer flex items-center">Projects</div>
            <div className="under relative cursor-pointer flex items-center">Achievements</div>
            <div className="under relative cursor-pointer flex items-center">Contact</div>
          </div>
          <div className="flex justify-between items-center  text-black font-light text-sm pr-2 p-2 w-[100%] sm:w-[45%] md:w-[40%] lg:w-[30%]">
            <div className="lefttoryt"><div className='relative z-2'>Download Resume</div></div>
            <Logo />
          </div>
        </nav>

        <div id='ribbon' className='fixed top-20 grid sm:hidden bg-[rgb(192,194,201)] h-7 w-7 z-40' style={{ "clipPath": "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)" }} onClick={appearNav}>
        </div>
        <div id='appearNav' className='fixed h-[100vh] w-[300px] bg-[rgb(233,234,236)] translate-x-[-300px] transition-all ease-in-out z-40'>
          <div className='grid h-[100%] justify-items-center font-light '>
            <div className="relative cursor-pointer flex items-center">Projects</div>
            <div className="relative cursor-pointer flex items-center">Achievements</div>
            <div className="relative cursor-pointer flex items-center">Contact</div>
          </div>
        </div>




        <div className="mt-10 w-full h-[118vh]  overflow-x-hidden">

          <div className='upd1 opacity-0 card h-40 w-40 rounded-full relative rotate-6' style={{ "top": "75%", "left": "85%" }}></div>
          <div className='upd3 opacity-0 card h-16 w-16 rounded-full relative rotate-12' style={{ "top": "1%", "left": "10%" }}></div>
          <div className='upd opacity-0 card h-8 w-8 rounded-full relative rotate-45' style={{ "top": "10%", "left": "60%" }}></div>
          <div className='upd1 opacity-0 card h-24 w-24 rounded-full relative rotate-180' style={{ "top": "55%", "left": "0%" }}></div>
          <div className='upd2 opacity-0 card h-20 w-20 rounded-full relative rotate-12' style={{ "top": "-33%", "left": "80%" }}></div>
          <div className='upd opacity-0 card h-20 w-20 rounded-full relative ' style={{ "top": "5%", "left": "90%" }}></div>
          <div className='upd opacity-0 card h-20 w-20 rounded-full relative rotate-90' style={{ "top": "-55%", "left": "1%" }}></div>
          <div className='upd3 opacity-0 card h-12 w-12 rounded-full relative ' style={{ "top": "5%", "left": "40%" }}></div>
          <div className='upd1 opacity-0 card h-10 w-10 rounded-full relative  rotate-6' style={{ "top": "5%", "left": "10%" }}></div>
          <div className='upd opacity-0 card h-20 w-20 rounded-full relative  rotate-90' style={{ "top": "-45%", "left": "30%" }}></div>
          <div className='upd2 opacity-0 card h-4 w-4 rounded-full relative ' style={{ "top": "5%", "left": "50%" }}></div>
          <div className='upd opacity-0 card h-10 w-10 rounded-full relative  rotate-2' style={{ "top": "5%", "left": "100%" }}></div>


          <div className='h-full w-full flex justify-center items-center absolute top-10'>
            <div id='glassmorph' className="fixed w-[90%] h-[80%] grid md:flex glassmorph transition-all ease-in-out ">
              <div className="md:w-[50%] order-2 md:order-1 ">
                <div className='flew-row h-[40vh] mt-[-10px] md:mt-[100px] lg:mt-[150px] m-12 lg:ml-[100px] cursor-default'>
                  <div className="intro !font-bold hinder text-center md:text-left" id="t1">
                    Welcome to My Portfolio Website!
                  </div>
                  <div className=" intro hinder text-center md:text-left mt-4" id="t2">
                    Hey there!
                  </div>
                  <div className={`intro hinder text-center md:text-left`} id="t3">
                    I'm  <span className="hg" id="element" >Himalaya Gahlot</span>, a passionate software developer eager to craft innovative solutions and bring ideas to life through code.
                  </div>
                  <div className="intro hinder text-center md:text-left" id="t4">
                    This space is dedicated to showcasing my journey, projects, and expertise in the world of software development. Whether you're here to explore my work, learn more about my skills, or just enjoy scrolling through, I'm thrilled to have you!
                  </div>
                  <div className="intro hinder text-center md:text-left" id="t5">
                    So, sit back, relax, and dive into the world of technology with me. Let's make this scrolling experience unforgettable!
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] order-1 md:order-2 flex justify-center items-center">
                <div className='h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] m-4'>
                  <div className='absolute clip-path-custom4 bg-pink-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-105' src='/Fantasycharacter.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom2 bg-pink-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-105' src='/Fantasycharacter.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom1 bg-pink-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-105' src='/Fantasycharacter.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom3 bg-pink-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-105' src='/Fantasycharacter.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom5 bg-pink-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-105' src='/Fantasycharacter.jpg' height={504} width={504} alt='watch' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='upd3 opacity-0 card h-16 w-16 rounded-full relative rotate-12' style={{ "top": "1%", "left": "10%" }}></div>
          <div className='upd opacity-0 card h-8 w-8 rounded-full relative rotate-45' style={{ "top": "10%", "left": "60%" }}></div>
          <div className='upd1 opacity-0 card h-24 w-24 rounded-full relative rotate-180' style={{ "top": "55%", "left": "0%" }}></div>
       
          <div className="upd opacity-0 relative bigclipPath1 z-0"></div>

        <div className='w-full h-[600px] absolute top-[1100px]'>
          <h1 className='intro z-20'>Experience
          </h1>
          <div></div>
        </div>

          <div className='upd2 opacity-0 card h-20 w-20 rounded-full relative rotate-12' style={{ "top": "-33%", "left": "80%" }}></div>
          <div className='upd opacity-0 card h-20 w-20 rounded-full relative ' style={{ "top": "5%", "left": "90%" }}></div>
          <div className='upd opacity-0 card h-20 w-20 rounded-full relative rotate-90' style={{ "top": "-55%", "left": "1%" }}></div>
          <div className='upd3 opacity-0 card h-12 w-12 rounded-full relative ' style={{ "top": "5%", "left": "40%" }}></div>

        <div className="upd opacity-0 relative bigclipPath z-0">
        </div>
        <div className='flex justify-center'>
          <div id='glassmorph' className="upd1 opacity-0 glassmorph relative top-[-800px] w-[90%] h-[110%] grid md:flex transition-all ease-in-out z-20 ">
            <div className="md:w-[50%] order-2 md:order-2 z-20 h-[100%]">
              <div className='flew-row h-[100%] mt-[-10px] md:mt-[50px] lg:mt-[50px] m-12 lg:ml-[100px] cursor-default z-20'>
                <div className="intro !font-bold hinder text-center md:text-left" id="t1">
                  About Me
                </div>
                <div className=" intro hinder text-center md:text-left mt-4" id="t2">
                  Hey there!
                </div>
                <div className={`intro hinder text-center md:text-left`} id="t3">
                  I'm  <span className="hg" id="element" >Himalaya Gahlot</span>, a passionate software developer eager to craft innovative solutions and bring ideas to life through code.
                </div>
                <div className="intro hinder text-center md:text-left" id="t4">
                  This space is dedicated to showcasing my journey, projects, and expertise in the world of software development. Whether you're here to explore my work, learn more about my skills, or just enjoy scrolling through, I'm thrilled to have you!
                </div>
                <div className="intro hinder text-center md:text-left" id="t5">
                  So, sit back, relax, and dive into the world of technology with me. Let's make this scrolling experience unforgettable!
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] order-1 md:order-1 flex justify-center">
              <div className='h-[300px] md:h-[250px] w-[250px] sm:h-[400px] sm:w-[350px] m-8'>
                <Image className='transition duration-300 ease-in-out hover:scale-105' src='/pp.jpg' height={504} width={504} alt='watch' />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative w-[100vw] h-[1000px]"></div> */}

        {/* <div className='grid h-[90vh] w-[100vw] bg-black p-5'>
            <div id='blob' className='blob'></div>
            <div className='skills absolute text-white font-light text-[30px] ml-5 '>SKILLS</div>

            <div className='flex absolute h-[80vh] w-[100vw] mt-10'>

            </div>
          </div>
          <div className="github p-8 flex justify-between items-center bg-black">



            <div className='transition duration-300 glass w-[30vw] h-[30vh]  hover:scale-105 flex justify-center items-center p-11  '>
              <div className='logo flex justify-center absolute items-center left-[20px]'><Image className='rounded-md' src='/githhub.png' height={120} width={120} alt='watch'></Image></div>
              <div className="flex justify-center items-center absolute cursor-pointer border-[0.5px] rounded-lg border-white border-spacing-10 h-10 w-[170px]  text-white font-light right-[20px]  hover:bg-white hover:text-black"><div>Visit Github</div></div>
            </div>
            <div className='transition duration-300 glass w-[30vw] h-[30vh]  hover:scale-105 flex justify-center items-center p-11  '>
              <div className='logo flex justify-center absolute items-center left-[20px]'><Image className='rounded-md' src='/codechefw.png' height={120} width={120} alt='watch'></Image></div>
              <div className="flex justify-center items-center absolute cursor-pointer border-[0.5px] rounded-lg border-white border-spacing-10 h-10 w-[170px]  text-white font-light right-[20px]  hover:bg-white hover:text-black"><div>Visit Codechef</div></div>
            </div>
            <div className='transition duration-300 glass w-[30vw] h-[30vh]  hover:scale-105 flex justify-center items-center p-11  '>
              <div className='logo flex justify-center absolute items-center left-[20px]'><Image className='rounded-md' src='/leetcode.png' height={120} width={120} alt='watch'></Image></div>
              <div className="flex justify-center items-center absolute cursor-pointer border-[0.5px] rounded-lg border-white border-spacing-10 h-10 w-[170px]  text-white font-light right-[20px] hover:bg-white hover:text-black"><div>Visit Leetcode</div></div>
            </div>

          </div> */}

        {/* <div className='Projects h-[160vh] w-[100vw]'>
              <div id='blob2' className='blob2 '></div>
              <div id='blob3' className='blob3 '></div>

              <div className='grid justify-center h-[90vh] w-[100vw] p-5'>

                <div className='skills absolute text-black font-light text-[30px] ml-5'>Projects</div>
                <div className="slider flex h-[80vh] justify-between mt-11">

                  <div className='w-[80vw] h-[70vh] bg-gray-200 m-2'></div>
                  <div className='w-[80vw] h-[70vh] bg-gray-200 m-2'></div>
                  <div className='w-[80vw] h-[70vh] bg-gray-200 m-2'></div>
                  <div className='w-[80vw] h-[70vh] bg-gray-200 m-2'></div>
                  <div className='w-[80vw] h-[70vh] bg-gray-200 m-2'></div>
                </div>
                {/* <div className="slideinfo absolute h-10 w-[1000px] bg-black z-12"></div> }
              </div> */}
        {/* <div id='blob5' className='blob5 '></div>
              <div id='blob4' className='blob4 '></div>
              <div className='grid justify-center h-[60vh] w-[100vw] p-5'>

                <div className="flex h-[40vh] justify-between mt-5">


                  <div className='glass2 w-[300px] h-[400px] m-2'><h1 className='m-8 text-lg'>E-Commerce</h1>

                    <div className='grid justify-end w-[250px] m-3'><div className="transition duration-100 iconb flex justify-center items-center  border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]  hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>React</h1>
                    <div className='grid justify-end w-[250px] m-3'><div className="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]   hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>Games</h1>
                    <div className='grid justify-end w-[250px] m-3'><div className="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px] hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>Next</h1>
                    <div className='grid justify-end w-[250px] m-3'><div className="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px] hover:border-black hover:scale-105">C</div></div></div>
                </div>

              </div>
            </div>
            <div>
              <div className='flex justify-between h-[90vh] w-[100vw] p-5 bg-blue-100'>

                <div className='skills absolute  text-black font-light text-[30px] ml-5'>Achivements</div>
                <div className="slider flex h-[80vh] w-[69vw] justify-between mt-11">

                </div>
                <div className="slider flex h-[80vh] w-[29vw] justify-between mt-11">
                  MOOC
                </div>

              </div>
              <div className="flex h-[40vh] justify-between mt-5">


                <div className='glass2 w-[80vh] h-[400px] m-2'><h1 className='m-8 text-lg'>Achievements related</h1>

                  <div className='grid justify-end w-[250px] m-3'><div className="transition duration-100 iconb flex justify-center items-center  border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]  hover:border-black hover:scale-105">C</div></div></div>

              </div>




            </div>*/}

        {/* </div> */}

      </main>
      <Script src="/scripts/index.js" />
    </>
  )
}
