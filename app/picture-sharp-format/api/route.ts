import sharp from "sharp";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const src = searchParams.get('src')
  const format = searchParams.get('format') || 'jpg'

  if (!src){
    return new Response(null, {
      status: 404,
    })
  }

  try {
    const res = await fetch(src)
    const buffer = await res.arrayBuffer()
    const resizedImageBuf = await sharp(buffer)
      // @ts-ignore
      .toFormat(format)
      .toBuffer();

    return new Response(resizedImageBuf, {
      status: 200,
      // @ts-ignore
      headers: { 'Content-Type': res.headers.get('content-type') },
    })
  } catch (error){
    return new Response(null, {
      status: 404,
    })
  }
}