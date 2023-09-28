import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LiveVideo = ({videoUrl}) => {

  const [textOverlays,setTextOverlays] = useState([])
  const [imageOverlays,setImageOverlays] = useState([])

  useEffect(()=>{
    const getOverlays = async ()=>{
      const text = await axios.get('https://flask-project-0b59.onrender.com/text')
      setTextOverlays(text.data)
      const image = await axios.get('https://flask-project-0b59.onrender.com/image')
      setImageOverlays(image.data)
    }
    getOverlays()
  },[textOverlays])

  return (
    <div className='relative'>
        {textOverlays.map((text)=>(
          <>
          <div key={text.name} className='hidden md:block md:absolute md:z-10 md:text-white' style={{bottom:`${text.position_y}rem`,left:`${text.position_x}rem`,width:`${text.width}rem`,height:`${text.height}rem`}}>
              {text.value}
          </div>
          <div key={text.name} className='md:hidden absolute z-10 text-white' style={{bottom:`${text.position_y}px`,left:`${text.position_x}px`,width:`${text.width}px`,height:`${text.height}px`}}>
              {text.value}
          </div>
          </>
        ))}
        {imageOverlays.map((image)=>(
          <>
          <div key={image.name} className='hidden lg:absolute lg:z-10 lg:text-white' style={{bottom:`${image.position_y}rem`,left:`${image.position_x}rem`,width:`${image.width}rem`,height:`${image.height}rem`}}>
              <img src={image.value} alt={image.name}/>
          </div>
          <div key={image.name} className='lg:hidden absolute z-10 text-white' style={{bottom:`${image.position_y}px`,left:`${image.position_x}px`,width:`${image.width}px`,height:`${image.height}px`}}>
              <img src={image.value} alt={image.name}/>
          </div>
          </>
        ))}
        <iframe className='z-0 md:w-[640px] md:h-[480px]'  src={videoUrl}  allowFullScreen >
        </iframe>
      </div>
  )
}

export default LiveVideo