import { useGameBoard } from '../useGameboard'
import classNames from 'classnames'

export const RoomSelector = () => {
  // const [currentRoomIndex, setCurrentRoomIndex] = useState<number>()
  const { currentScenario, setCurrentRoom, currentRoom } = useGameBoard()

  if (!currentScenario) return null

  return (
    <div className="flex flex-col">
      {currentScenario.rooms.map((room, roomIndex) => (
        <button
          key={roomIndex}
          value={roomIndex}
          className={classNames('text-left border-b-2 p-2', {
            'btn-accent': currentRoom === roomIndex,
          })}
          onClick={() => setCurrentRoom(roomIndex)}
        >
          {room.name}
        </button>
      ))}
    </div>
  )
}

RoomSelector.displayName = 'RoomSelector'
