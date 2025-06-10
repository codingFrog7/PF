import React from 'react'
import Frog from './frog'
import Hero from './hero'
import Header from './header'
import ScrambledText from './ScrambledText';
import ClickSpark from './ClickSpark';
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
        <div className='h-screen w-full absolute bottom-0 left-0'>
          <ScrambledText
            className="absolute flex item-center justify-center "
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"@#$%"}>
            <samp className='text-sm'>
              <h1>Hi! <br/><h1/>
             <h4> i am Dipanshu(aka Deepu /CodingFrog7 ) <br/><h4/>
              <h4>👋 Hey, I’m Deepu Kashyap (aka codingfrog7)🐸<br/><h4/>
              <h4>  🧠 Full-stack dev crafting 3D web experiences with<br/><h4/>
              <h4><h4/>
             
              ⚛️ React • ⚡ Next.js • 🔧 NestJS • 🌐 Three.js
            </samp>
          </ScrambledText>
        </div>
      </ClickSpark>
    </>
  )
}

export default page1