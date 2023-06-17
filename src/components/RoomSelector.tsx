import { useGameBoard } from '../useGameboard'
// import { useState } from 'react'

export const RoomSelector = () => {
  // const [currentRoomIndex, setCurrentRoomIndex] = useState<number>()
  const { currentScenario } = useGameBoard()

  if (!currentScenario) return null

  return (
    <div className="flex flex-col">
      {currentScenario.rooms.map((room, roomIndex) => (
        <button
          key={roomIndex}
          value={roomIndex}
          className="text-left border-b-2 mb-2"
        >
          {room.name}
        </button>
      ))}
    </div>
  )
}

RoomSelector.displayName = 'RoomSelector'
