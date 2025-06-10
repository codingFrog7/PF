"use client"

import { useState, useRef } from "react"

export default function EasyCard3D({
  title = "Card Title",
  description = "Card description goes here",
  image = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
  primaryButtonText = "Sign up",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn more",
  secondaryButtonLink = "#",
  className = "",
}) {
  const cardRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  // Track elements that need 3D transform
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)
  const button1Ref = useRef(null)
  const button2Ref = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    // Get card dimensions
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()

    // Calculate rotation based on mouse position
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25

    // Apply rotation to card
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`

    // Apply 3D translations to elements
    if (titleRef.current) titleRef.current.style.transform = `translateZ(50px)`
    if (descRef.current) descRef.current.style.transform = `translateZ(60px)`
    if (imageRef.current) imageRef.current.style.transform = `translateZ(100px)`
    if (button1Ref.current) button1Ref.current.style.transform = `translateZ(20px)`
    if (button2Ref.current) button2Ref.current.style.transform = `translateZ(20px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return

    // Reset card rotation
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`

    // Reset element translations
    if (titleRef.current) titleRef.current.style.transform = `translateZ(0px)`
    if (descRef.current) descRef.current.style.transform = `translateZ(0px)`
    if (imageRef.current) imageRef.current.style.transform = `translateZ(0px)`
    if (button1Ref.current) button1Ref.current.style.transform = `translateZ(0px)`
    if (button2Ref.current) button2Ref.current.style.transform = `translateZ(0px)`

    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div className="py-4 mt-6 border-2 rounded-xl flex items-center justify-evenly" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={` dark:bg-black relative dark:hover:shadow-2xl 
                   dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] 
                   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border
                   transition-all duration-200 ease-linear  ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2
          ref={titleRef}
          className="text-xl font-bold text-neutral-600 dark:text-white transition duration-200 ease-linear"
        >
          {title}
        </h2>

        <p
          ref={descRef}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 transition duration-200 ease-linear"
        >
          {description}
        </p>

        <div ref={imageRef} className="w-full mt-4 transition duration-200 ease-linear border bg-neutral-600 rounded-xl">
          <img
            src={image || "/placeholder.svg"}
            className="h-60 w-full object-cover rounded-xl shadow-md"
            alt="Card image"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
         <div></div>

          <a
            ref={button2Ref}
            href={primaryButtonLink}
            className="px-4 py-2 rounded-xl bg-white/10 dark:bg-white dark:text-black text-white text-xs font-bold transition duration-200 ease-linear"
          >
            {primaryButtonText}
          </a>
        </div>
      </div>
    </div>
  )
}
