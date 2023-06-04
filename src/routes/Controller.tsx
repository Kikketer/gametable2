import { ReactElement } from 'react'
import './controller.css'
import { useGameBoard } from '../useGameboard'
import { ScenarioSelector } from '../components/ScenarioSelector.tsx'

export function Component(): ReactElement {
  const { currentRoom, setCurrentRoom, rooms } = useGameBoard()

  return (
    <div className="flex flex-col gap-2">
      <ScenarioSelector />
      <div className="controller-grid gap-4">
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm btn-neutral">Show Grid</button>
          <button className="btn btn-sm btn-neutral">Hide Grid</button>
          <button className="btn btn-sm btn-neutral">Reload</button>
          <button className="btn btn-sm btn-neutral">Maximize</button>
        </div>
        <div>
          {rooms?.length ? (
            <ul>
              {rooms?.map((room) => (
                <li
                  key={room.filename}
                  className={room === currentRoom ? 'bg-blue-200' : ''}
                >
                  <button
                    className="w-full text-left pl-2"
                    onClick={() => setCurrentRoom(room)}
                  >
                    {room.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div>No rooms</div>
          )}
        </div>
      </div>
    </div>
  )
}

Component.displayName = 'Controller'
