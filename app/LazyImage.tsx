'use client'
import React, { useEffect, useState, useRef } from 'react'

import { useIsVisible } from './use-is-visible'
interface Props {
  src: string
  blurData: string
  alt: string
}
export const LazyImage = ({ src, blurData, alt }: Props) => {
  const ref: any = useRef<HTMLImageElement>()
  const isVisible = useIsVisible(ref)
  const [image, setImage] = useState(blurData)

  useEffect(() => {
    if (isVisible) {
      setImage(src)
    }
  }, [isVisible, src])

  return (
    <img
      ref={ref}
      src={image}
      alt={alt}
      style={{filter: `blur(${image === src ? '0px' : '5px'})` }}
    />
  )
}