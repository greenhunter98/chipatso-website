"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function ImageWithFallback({ src, alt, className }: { src: string; alt?: string; className?: string }){
  const [imgSrc, setImgSrc] = useState(src)
  const fallback = '/file.svg'
  return (
    // use native <img> with onError instead of next/image to avoid layout shift issues in backgrounds
    <img src={imgSrc} alt={alt || ''} className={className} onError={() => setImgSrc(fallback)} />
  )
}
