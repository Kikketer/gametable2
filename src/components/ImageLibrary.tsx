import { FC, useEffect, useRef } from 'react'
import { useGameBoard } from '../useGameboard'
import { Image } from './Image'
import classNames from 'classnames'

type ImageLibraryProps = {
  onLoadComplete?: () => void
}

/**
 * Since Safari is stupid slow with base64 images, we need to load them all at once
 */
export const ImageLibrary: FC<ImageLibraryProps> = ({ onLoadComplete }) => {
  const { currentScenario, currentRoom } = useGameBoard()
  const completedImages = useRef<boolean[]>()

  useEffect(() => {
    if (currentScenario) {
      // On fresh load of the scenario, reset the completed images
      completedImages.current = new Array(currentScenario.rooms.length).fill(
        false
      )
    }
  }, [currentScenario])

  const onImageLoaded = (index: number) => {
    console.log('iMage complete ', index)
    if (completedImages.current) {
      completedImages.current[index] = true
    }
    // Check to see if we are all loaded
    if (
      completedImages.current &&
      completedImages.current.every((complete) => complete)
    ) {
      console.log('All images loaded!')
      onLoadComplete && onLoadComplete()
    }
  }

  return (
    <>
      <div>Library</div>
      {currentScenario &&
        currentScenario.rooms.map((room, roomIndex) => (
          <Image
            key={roomIndex}
            path={room.floor}
            onLoadComplete={() => onImageLoaded(roomIndex)}
            className={classNames({
              hidden: currentRoom !== roomIndex,
            })}
          />
        ))}
    </>
  )
}

ImageLibrary.displayName = 'ImageLibrary'
