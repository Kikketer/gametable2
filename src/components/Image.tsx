import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs'
import { useEffect, useState } from 'react'

type ImageProps = {
  path: string
  onLoadComplete?: () => void
  className?: string
}

const loadImage = async (path: string): Promise<string> => {
  const imgBinary = await readBinaryFile(path, {
    dir: BaseDirectory.Document,
  })
  const blob = new Blob([imgBinary], { type: 'application/octet-stream' })
  const reader = new FileReader()

  return await new Promise((resolve, reject) => {
    reader.onload = () => {
      try {
        if (typeof reader.result === 'string') {
          const base64 = reader.result && reader.result.split(',')[1]
          return resolve(base64)
        }
        reject(new Error('Invalid image'))
      } catch (err) {
        reject(err)
      }
    }

    reader.readAsDataURL(blob)
  })
}

export const Image = ({ path, onLoadComplete, className }: ImageProps) => {
  const [img64, setImg64] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (path) {
      setImg64('')
      loadImage(path)
        .then((base64Image) => {
          setImg64(base64Image)
          onLoadComplete && onLoadComplete()
        })
        .catch((err) => {
          console.error(err)
          setError(err)
        })
    }
  }, [path])

  return (
    <div className={className}>
      {error ? <pre>{error}</pre> : null}
      {img64 && (
        <img src={`data:image/jpeg;base64,${img64}`} alt="Room Image" />
      )}
    </div>
  )
}

Image.displayName = 'Image'
