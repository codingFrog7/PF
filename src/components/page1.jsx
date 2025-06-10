import React from 'react'
import Frog from './frog'
import Hero from './hero'
import Header from './header'

import ClickSpark from './ClickSpark';
import ShinyText from './ShinyText';
const page1 = () => {
  return (

    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      ><Header />
        <Frog />
        <Hero />
        <div className='h-screen w-full absolute bottom-0 left-0 '>
        <div className='text-9xl'>
          
          <ShinyText text="Hi!" disabled={false} speed={3} className='custom-class' /><br/>
          <ShinyText text="👋 Hey, I'm Dipanshu(aka Deepu /CodingFrog7 🐸) " disabled={false} speed={3} className='custom-class' /><br/>
          <ShinyText text="🧠 Full-stack dev crafting 3D web experiences with!" disabled={false} speed={3} className='custom-class' /><br/>
          <ShinyText text="⚛️ React • ⚡ Next.js • 🔧 NestJS • 🌐 Three.js " disabled={false} speed={3} className='custom-class' />
          <br/>
      </div>
         </div>
      </ClickSpark>
    </>
  )
} 
export default page1



  
