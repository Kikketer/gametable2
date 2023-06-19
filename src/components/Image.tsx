import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs'
import { useEffect, useState } from 'react'

type ImageProps = {
  path: string
}

const loadImage = async (path: string): Promise<string> => {
  console.log('Loading file from path ', path)
  const imgBinary = await readBinaryFile('the-image.png', {
    dir: BaseDirectory.Document,
  })
  // const blob = new Blob([imgBinary], { type: 'application/octet-stream' })
  // const reader = new FileReader()
  //
  // reader.onload = () => {
  //   const base64 = reader.result.split(',')[1]
  //   // Use the base64 string here
  //
  //   return ''
  // }

  // reader.readAsDataURL(blob)

  return ''
}

export const Image = ({ path }: ImageProps) => {
  const [img64, setImg64] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (path) {
      loadImage(path)
        .then((base64Image) => {
          setImg64(base64Image)
        })
        .catch((err) => {
          console.error(err)
          setError(err)
        })
    }
  }, [path])

  return (
    <div>
      <pre>{path}</pre>
      {error ? <pre>{error}</pre> : null}
      {img64 && (
        <img src={`data:image/jpeg;base64,${img64}`} alt="Room Image" />
      )}
    </div>
  )
}

Image.displayName = 'Image'
