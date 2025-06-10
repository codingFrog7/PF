"use client"

import { useState, useRef, useEffect } from "react"
import { House,FolderGit2,Github ,Linkedin,Annoyed } from 'lucide-react';
const Tabs = () => {
  const tabs = [
    { icon: <House />, href: "/" },
    { icon: <FolderGit2 />, href: "/projects" },
    { icon: <Github />, href: "https://github.com/codingFrog7" },
    { icon: <Linkedin />, href: "https://linkedin.com/" },
    { icon: <Annoyed />, href: "/about" },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverStyle, setHoverStyle] = useState({})
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
  const tabRefs = useRef([])

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex]
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }
  }, [hoveredIndex])

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      })
    }
  }, [activeIndex])

  useEffect(() => {
    requestAnimationFrame(() => {
      const overviewElement = tabRefs.current[0]
      if (overviewElement) {
        const { offsetLeft, offsetWidth } = overviewElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    })
  }, [])

  return (
    <div className="fixed  z-10 flex justify-center items-center w-screen h-12   mt-5">
      <div className="w-full max-w-[1200px] h-[100px] relative flex items-center justify-center">
        <div className="p-0">
          <div className="relative">
            {/* Hover Highlight */}
            <div
              className="absolute h-[30px] transition-all duration-300 ease-out bg-gray-100/50 rounded-md flex items-center"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
              }}
            />

            {/* Active Indicator */}
            <div
              className="absolute bottom-[-6px] h-[2px] bg-white transition-all duration-300 ease-out"
              style={activeStyle}
            />

            {/* Tabs */}
            <div className="relative flex space-x-10 max-md:space-x-3 items-center">
              {tabs.map((tab, index) => (
                <a
                  key={index}
                  href={tab.href}
                  target={tab.href.startsWith('http') ? '_blank' : undefined}
                  rel={tab.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    ref={(el) => (tabRefs.current[index] = el)}
                    className={`px-3 py-2 cursor-pointer transition-colors duration-300 h-[30px] ${index === activeIndex ? "text-white" : "text-white/50"
                      }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className=" leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {tab.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs

