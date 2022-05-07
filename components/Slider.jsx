import {useState, useEffect, useRef} from "react";
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {IoArrowBack, IoArrowForward} from 'react-icons/io5'
import { sliderData } from "./../data/sliderData";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const length = sliderData.length
  const timeOut = useRef(null)

  useEffect(()=>{
    const nextSlide = () => {
      setCurrent(current => (current === length -1 ? 0 : current + 1))
      }
      
      timeOut.current = setTimeout(nextSlide, 3000)

      return function () {
        if(timeOut.current) {
          clearTimeout(timeOut.current)
        }
      }
  },[current, length])

  const nextSlide = () => {
    if(timeOut.current) {
      clearTimeout(timeOut.current)
    }

    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    if(timeOut.current) {
      clearTimeout(timeOut.current)
    }

    setCurrent(current === 0 ? length - 1 : current - 1 )
  }

  if(!Array.isArray(sliderData) || sliderData.length <= 0) return null

  return (
    <div className="h-screen absolute w-full top-0">
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center ">
        {sliderData.map((slide, index) => (
          <>
            <div key={index} className='z-1 w-full h-full'>
              { index === current && 
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  height="90%"
                  width="90%"
                  className="absolute top-0 left-0 h-screen w-screen object-cover"
                  />
                <div className="ml-10 relative z-10 flex flex-col justify-center gap-4 w-full text-white text-left">
                  <h1 className="text-2xl w-max">{slide.title}</h1>
                  <p className="w-max text-left">{slide.price} BDT</p>
                  <Link href={slide.path}>
                    <button className="w-max bg-slate-900 text-white px-3 py-1 flex items-center gap-2 rounded-md">{slide.label}
                    <HiOutlineArrowSmRight />
                    </button>
                  </Link>
                </div>
              </div>
          }
            </div>
          </>
        ))}
        <div className="absolute bottom-12 right-12 z-10 flex gap-4">
          <IoArrowBack className='text-4xl bg-slate-900 text-white cursor-pointer rounded-full p-2' onClick={nextSlide} />
          <IoArrowForward className=' text-white text-4xl bg-slate-900 cursor-pointer rounded-full p-2' onClick={prevSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
