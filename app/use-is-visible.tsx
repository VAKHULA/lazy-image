import React, { useEffect, useState } from 'react'

export function useIsVisible(ref: React.MutableRefObject<HTMLImageElement | undefined>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIntersecting(entry.isIntersecting)
            observer.disconnect()
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.3,
        }
      )

      observer.observe(ref.current)
    }
  }, [ref])

  return isIntersecting
}
