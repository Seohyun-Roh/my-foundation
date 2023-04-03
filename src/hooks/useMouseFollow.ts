import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'

let x = 0
let y = 0
let targetX = 0
let targetY = 0
const speed = 0.08

export const useMouseFollow = () => {
  const mouseRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef(0)

  const handleMouseMove: MouseEventHandler = (e) => {
    x = e.pageX
    y = e.pageY
  }

  const loop = useCallback(() => {
    targetX += (x - targetX) * speed
    targetY += (y - targetY) * speed

    if (mouseRef.current) {
      mouseRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`
    }

    requestRef.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(requestRef.current)
  }, [loop])

  const handleMouseDown = () => {
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = '#ea3a4b'
    }
  }

  const handleMouseUp = () => {
    if (circleRef.current) {
      circleRef.current.style.backgroundColor = '#000000'
    }
  }

  const handleMouseEnter = () => {
    if (circleRef.current) {
      circleRef.current.style.display = 'block'
    }
  }

  const handleMouseLeave = () => {
    if (circleRef.current) {
      circleRef.current.style.display = 'none'
    }
  }

  return { handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, mouseRef, circleRef }
}
