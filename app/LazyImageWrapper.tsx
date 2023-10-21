
import sharp from "sharp";
import { LazyImage } from './LazyImage'

interface Props {
  src: string
  alt: string
  compression?: number
}

export const LazyImageWrapper = async ({ src, alt, compression = 0.1 }: Props) => {
  const response = await fetch(src)

  // if (!response.ok) {
  //   throw new Error(`HTTP error, status = ${response.status}`);
  // }

  const buffer = await response.arrayBuffer()
  const  { format, width = 0, height = 0 } = await sharp(buffer).metadata();

  const resizedImageBuf = await sharp(buffer)
    .resize(Math.round(width * compression), Math.round(height * compression))
    .toBuffer();

  return (
    <LazyImage
      blurData={`data:image/${format};base64,${resizedImageBuf.toString("base64")}`}
      src={src}
      alt={alt}
    />
  )
}