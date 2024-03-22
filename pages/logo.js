export default function logo() {
  const onClick=()=>{

  }
    return (
      <div className="logo flex justify-center m-2 h-[50px] w-[40px]" >
        <style jsx>{`
                    .triangle1{
                      position:absolute;
                      top:27px;
                      right:16px;
                      width: 0;
                      height: 0;
                      border-left: 36px solid transparent; 
                      border-right: 19.33px solid transparent; 
                      border-bottom: 24.333px solid  rgb(233,234,236); 
                    }
                    .triangle2{
                      position:absolute;
                      top:30px;
                      right:30px;
                      width: 0;
                      height: 0;
                      border-left: 36.83px solid transparent; 
                      border-right: 34.66px solid transparent; 
                      border-bottom: 10.17px solid  rgb(233,234,236);
                    }
                    .triangle3{
                      position:absolute;
                      top:43px;
                      right:20px;
                      width: 0;
                      height: 0;
                      border-left: 17.66px solid transparent; 
                      border-right: 41.16px solid transparent; 
                      border-bottom: 17px solid rgb(233,234,236); 
                    }
                    `}
        </style>
        <div className="triangle1 rotate-[-125deg] transition duration-300 ease-in-out hover:translate-x-[6px]"></div>
        <div className="triangle2 rotate-[121deg] transition duration-300 ease-in-out hover:translate-x-[-6px]"></div>
        <div className="triangle3 transition duration-300 ease-in-out hover:translate-y-[4px]"></div>
        <div className="z-40 absolute top-7 right-10 text-lg font-semibold cursor-default text-blue-950">HG</div>
      </div>
    )
  }
  
  