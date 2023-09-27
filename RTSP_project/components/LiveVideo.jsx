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
          <div key={text.name} className='absolute z-10 text-white' style={{bottom:`${text.position_y}rem`,left:`${text.position_x}rem`,width:`${text.width}`,height:`${text.height}rem`}}>
              {text.value}
          </div>
        ))}
        {imageOverlays.map((image)=>(
          <div key={image.name} className='absolute z-10 text-white' style={{bottom:`${image.position_y}rem`,left:`${image.position_x}rem`,width:`${image.width}rem`,height:`${image.height}rem`}}>
              <img src={image.value} alt={image.name}/>
          </div>
        ))}
        <iframe className='z-0 lg:w-[640px] lg:h-[480px]'  src={videoUrl}  allowFullScreen >
        </iframe>
      </div>
  )
}

export default LiveVideo