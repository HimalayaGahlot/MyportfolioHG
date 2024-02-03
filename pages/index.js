import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from "./logo"
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Script src="/scripts/index.js" />
      <main className=" bg-white h-[1000px] w-[100vw]">
        <nav className="hidden fixed bg-white z-10 sm:flex  justify-between h-[70px] w-[100vw] pt-2">
          <div className="flex justify-between text-black font-light text-sm w-[50%] pl-12 p-4">
            <style jsx>{`
          .under:after{
            position: absolute;
            content:'';
            height:0.8px;
            width:0%;
            background-color:black;
            bottom:7px;
            left:0px;
            transition:0.3s;
          }
          .under:hover:after{
            width:100%;
          }
          `}</style>
            <div className="under relative cursor-pointer">Projects</div>
            <div className="under relative cursor-pointer">Achievements</div>
            <div className="under relative cursor-pointer">Contact</div>
          </div>
          <div className="w-[40%] flex justify-between  text-black font-light text-sm pr-2 p-2 lg:w-[30%]">
            <style jsx>
              {`
              .lefttoryt{
                position:relative;
                display: flex; 
                padding-top: 0.25rem; 
                justify-content: center; 
                border: 0.5px solid black;
                border-radius: 0.5rem; 
                height: 2rem; 
                width: 170px;
                transition-property: all;
                transition-timing-function: ease-in-out;
                transition-duration: 300ms; 
                cursor: pointer; 
                overflow:hidden;
              }
              .lefttoryt:before{
                position:absolute;
                content:'';
                background:linear-gradient(141deg, #adf1e0, #8075ff 28%, #ff7171 98%);
                left:0;
                top:0;
                width:0%;
                height: 100%; 
                transition: all 0.3s ease-in-out;
              }
              .lefttoryt:hover:before{
                width:100%;
              }
              .lefttoryt:hover{
                  transform: scale(1.10);
                  color:white;
               }
              }`
          }
            </style>
            <div className="lefttoryt"><div className='relative z-2'>Download Resume</div></div>
            <Logo />
          </div>
        </nav>
        <div className="body">
          <div className="grid">
            <div className="main flex">
              <div className="flex justify-center h-[100vh] w-[50vw] bg-violet-100 items-center">
                <div className='grid justify-center h-[40vh] mt-[150px] ml-[100px] cursor-default'>
                  <style jsx>
                    {`
                  .intro{
                      color: black;
                      position: relative;
                      left: -400px;
                      opacity: 0.3;
                      filter: blur(5px);
                      padding: 0vh;
                      font-size: x-large;
                      font-weight: lighter;
                  }
                  .show{
                    opacity: 1;
                    filter: blur(0);
                    transform: translateX(400px);
                    transition:all 0.5s;
                  }
                  `}
                  </style>
                  <div className="intro hinder" id="t1">
                    HI!!!!
                  </div>
                  <div className="intro hinder" id="t2">
                    MY NAME IS HIMALAYA GAHLOT
                  </div>
                  <div className="intro hinder" id="t3">
                    I AM A PASSI0NATE <span className="sd" id="element" >SOFTWARE DEVELOPER</span>
                  </div>
                  <div className="intro hinder" id="t4">
                    AND THIS IS MY PORTFOLIO WEBSITE
                  </div>
                  <div className="intro hinder" id="t5">
                    ENJOY SCROLLING !!!!!
                  </div>
                </div>
              </div>
              <div className="flex h-[100vh] w-[50vw] bg-violet-100 pt-[75px]">
                <style jsx>
                  {`
                .clip-path-custom1{
                  clip-path: polygon(56% 0, 38% 64%, 100% 97%);
                }
                .clip-path-custom2{
                  clip-path: polygon(0 97%, 36% 65%, 54% 0);
                }
                .clip-path-custom3{
                  clip-path: polygon(0 100%, 37% 67%, 100% 100%);
                }
                .clip-path-custom4{
                  clip-path: polygon(0 0, 0 93%, 51% 0);
                }
                .clip-path-custom5{
                  clip-path: polygon(59% 0, 100% 91%, 100% 0);
                }
                `}
                </style>
                <div className='mt-[100px] ml-[90px]'>
                  <div className='absolute clip-path-custom4 bg-pink-400 w-[450px] h-[450px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-125' src='/IMG_3390.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom2 bg-pink-400 w-[450px] h-[450px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-125' src='/IMG_3390.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom1 bg-pink-400 w-[450px] h-[450px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-125' src='/IMG_3390.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom3 bg-pink-400 w-[450px] h-[450px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-125' src='/IMG_3390.jpg' height={504} width={504} alt='watch' />
                  </div>
                  <div className='absolute clip-path-custom5 bg-pink-400 w-[450px] h-[450px] overflow-hidden'>
                    <Image className='transition duration-300 ease-in-out hover:scale-125' src='/IMG_3390.jpg' height={504} width={504} alt='watch' />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid h-[90vh] w-[100vw] bg-black p-5'>
              <style jsx>
                {`
                #blob{
                  height: 300px;
                  width: 300px;
                  position:relative;
                  animation: rotate 20s infinite;
                  translate: -50% -50%;
                  border-radius: 70%;
                  background: linear-gradient(to right,aqua,rgb(181, 54, 198));
                  filter: blur(180px);
                  // z-index: -1;
              }
              @keyframes rotate {
                  from{
                          rotate: 0deg;
                  }
                  50%{
                      scale:1 1.5;
                  }
                  to{
                      rotate:360deg;
                  }
              }
             
                `}
              </style>
              <div id='blob' className='blob'></div>
              <div className='skills absolute text-white font-light text-[30px] ml-5 '>SKILLS</div>
              <style jsx>{`
              .glass {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: 0px 8px 32px 0 rgba(0, 0, 0, 0.37);
              }
              `}</style>
              <div className='flex absolute h-[80vh] w-[100vw] mt-10'>
                <div className='w-[50%] flex justify-center items-center'>
                  <div className="card h-[300px] w-[420px] rounded-lg glass text-white text-[18px] p-14 font-light text-center"><h1 className='font-medium mb-2'>Java</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore reiciendis maiores?.</div>
                </div>
                <div className='flex flex-wrap justify-between w-[50%] p-11 mt-10'>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-default border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">C</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">C++</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">JAVA</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">PYTHON</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">HTML</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">CSS</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">JAVASCRIPT</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">GIT</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">LINUX</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">PUG</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">MYSQL</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">MONGODB</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">EXPRESS.JS</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">FLASK</div>
                  <div class="transition duration-100 iconb flex justify-center items-center cursor-defualt border-[0.5px] rounded-lg border-white border-spacing-10 h-12 w-[120px]  text-white font-light right-[20px]  hover:bg-white hover:text-black hover:scale-125">P5.JS</div>
                </div>
              </div>
            </div>
            <div className="github p-8 flex justify-between items-center bg-black">
              <style jsx>{`
            .github{
              background-image:url('/IHSC2r.webp');
              background-size: cover;
              background-position: center top -100px;

            }
              
            }
            `}</style>
              <style jsx>{`
              .glass {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: 0px 8px 32px 0 rgba(0, 0, 0, 0.37);
              }
              `}</style>

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

            </div>

            <div className='Projects h-[160vh] w-[100vw]'>
              <style jsx>{`
                  #blob2{
                    height: 400px;
                    width: 400px;
                    position:absolute;
                    animation: rotate1 20s infinite;
                    // translate: -50% -50%;
                    border-radius: 70%;
                    background: linear-gradient(45deg, rgba(236,211,255,1) 0%, rgba(159,199,255,1) 100%);
                    filter: blur(30px);
                    z-index: -10;
                    }
                      #blob3{
                        height: 200px;
                        width: 200px;
                        position:absolute;
                        animation: rotate2 10s infinite;
                        // translate: 50vh 50vw
                        right:0;
                        border-radius: 70%;
                        background: linear-gradient(45deg, rgba(236,211,255,1) 0%, rgba(159,199,255,1) 100%);
                        filter: blur(30px);
                        z-index: -10;
                    }
                    #blob5{
                      height: 200px;
                      width: 200px;
                      position:absolute;
                      animation: rotate2 20s infinite;
                      // translate: 50vh 50vw
                      left:0;
                      border-radius: 70%;
                      background: linear-gradient(45deg, rgba(236,211,255,1) 0%, rgba(159,199,255,1) 100%);
                      filter: blur(30px);
                      z-index: -10;
                    }
                    #blob4{
                      height: 350px;
                      width: 350px;
                      position:absolute;
                      animation: rotate3 20s infinite;
                      // translate: -50vh -50vw
                      right:200px;
                      // top:100px;
                      border-radius: 70%;
                      background: linear-gradient(45deg, rgba(236,211,255,1) 0%, rgba(159,199,255,1) 100%);
                      filter: blur(30px);
                      z-index: -10;
                  }
                  @keyframes rotate1{
                      from{
                              rotate: 0deg;
                              translate:-50% -50%;
                      }
                      50%{
                          scale:1 1.5;
                          translate:50% 30%;
                      }
                      to{
                          rotate:360deg;
                          translate:-50% -50%;
                      }
                  }
                    @keyframes rotate2 {
                      from{
                              rotate: 0deg;
                              translate:50% -50%;
                      }
                      50%{
                          scale:1 1.5;
                          translate:-70% 70%;
                      }
                      to{
                          rotate:360deg;
                          translate:50% -50%;
                      }
                  }
                  @keyframes rotate3 {
                    from{
                            rotate: 0deg;
                            translate:40% 20%;

                    }
                    50%{
                        scale:1 1.5;
                        translate:0% -50%;
                    }
                    to{
                        rotate:360deg;
                        translate:40% 20%;
                    }
                }
              `}</style>
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
                {/* <div className="slideinfo absolute h-10 w-[1000px] bg-black z-12"></div> */}
              </div>
              <div id='blob5' className='blob5 '></div>
              <div id='blob4' className='blob4 '></div>
              <style jsx>{`
              .glass2{
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.18);
                
                
              }
              .glass2:hover{
                box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.37);
              }
              `}</style>
              <div className='grid justify-center h-[60vh] w-[100vw] p-5'>

                <div className="flex h-[40vh] justify-between mt-5">


                  <div className='glass2 w-[300px] h-[400px] m-2'><h1 className='m-8 text-lg'>E-Commerce</h1>

                    <div className='grid justify-end w-[250px] m-3'><div class="transition duration-100 iconb flex justify-center items-center  border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]  hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>React</h1>
                    <div className='grid justify-end w-[250px] m-3'><div class="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]   hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>Games</h1>
                    <div className='grid justify-end w-[250px] m-3'><div class="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px] hover:border-black hover:scale-105">C</div></div></div>
                  <div className='glass2 border-[0.5px] border-black rounded-md w-[300px] h-[400px] m-2  bg-white'><h1 className='m-8 text-lg'>Next</h1>
                    <div className='grid justify-end w-[250px] m-3'><div class="transition duration-100 iconb flex justify-center items-center border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px] hover:border-black hover:scale-105">C</div></div></div>
                </div>

              </div>
            </div>
            <div>
              <style jsx>{` 
           
              
            }
            `}</style>
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

                  <div className='grid justify-end w-[250px] m-3'><div class="transition duration-100 iconb flex justify-center items-center  border-[0.5px] rounded-lg cursor-pointer border-spacing-10 h-10 w-[150px]  text-black font-light right-[20px]  hover:border-black hover:scale-105">C</div></div></div>
                
              </div>




            </div>

          </div>

        </div>

      </main>
      <Script src="/scripts/index.js" />
    </>
  )
}
