import React, { useRef } from 'react'

const Hero = () => {
    const videoRef=useRef();

    useRef(()=>{
        if(videoRef.current) videoRef.current.playbackRate=2;
    },[]);


  return (
    <section id='hero'>
        <div>
            <h1 className='mt-5 flex justify-center text-2xl'>MacBook Pro</h1>
            <img src='/title.png' alt='MacBook Title' />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button className="bg-[#0071e3] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#147ce5] transition">Buy</button>
        <p className='text-gray-400'>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero