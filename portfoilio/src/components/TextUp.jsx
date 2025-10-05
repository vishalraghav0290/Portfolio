import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TextUp({ text, className = '' }) {
  const [displayedText, setDisplayedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100) // Adjust speed by changing this value

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [text])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      
      <span className="text-blue-400">{displayedText}</span>
      
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: cursorVisible ? 0 : 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block w-[3px] h-[24px] bg-blue-400 ml-1"
      />
    </motion.div>
  )
}