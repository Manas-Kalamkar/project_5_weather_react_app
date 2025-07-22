import React from 'react'
import Lottie from 'lottie-react'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

const Card = ({ title,value,unit,animation,learnmore }) => {
  return (
    <div>
        <div
  id="card1"
  className=" bg-[#D9D9D9] flex rounded-xl  p-[0.6rem] sm:p-[1rem] justify-around  sm:rounded-[37.19px] lg:rounded-[57.19px] max-h-[411px] border-2 border-black sm:py-16 sm:pl-10 "
>
  <div className="cardLeftSide flex flex-col justify-around">
    <div className="cardLeftSidedUp text-[1.4rem] sm:text-[2rem] lg:text-[2.4rem]  lg:p-0 rounded-xl font-semibold w-fit">
      <h1>
        <span id="tempSpan" className="font-bold text-white">{title} {value ? <span className='text-3xl font-extrabold bg-linear-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text lg:text-4xl'>{value}{unit}</span>:''} </span>
      </h1>
    </div>
    <div className="cardLeftSideDown flex items-center justify-start ">
      <Link to={learnmore}>
        <div className="circle bg-black rounded-3xl p-2 text-[#B]">
          <img src={arrow} alt="" id="arrow" />
        </div>
      </Link>
      <div
        id="learnmore1"
        className="learnMore font-bold w-[12ch] lg:text-[1.5rem]  ml-[0.5rem] text-[#7D7D7D]">
        Learn more
      </div>
    </div>
  </div>
  <div className="cardRightSide max-w-[340px]">
    <Lottie
      renderer="svg"
      animationData={animation}
      background="transparent"
      speed="0.5"
      autoPlay=""
      loop=""
      className="w-[200px] h-[200px] md:w-fit items-center  "
    />
  </div>
</div>

    </div>
  )
}

export default Card