import { ReactElement } from 'react'
import './controller.css'
import { useGameBoard } from '../useGameboard'

export function Component(): ReactElement {
  const { currentRoom, setCurrentRoom, rooms } = useGameBoard()

  return (
    <>
      <h1 className="text-xl">Controller</h1>
      <div className="controller-grid gap-4">
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm btn-neutral">Show Grid</button>
          <button className="btn btn-sm btn-neutral">Hide Grid</button>
          <button className="btn btn-sm btn-neutral">Reload</button>
          <button className="btn btn-sm btn-neutral">Maximize</button>
        </div>
        <div>
          <ul>
            {rooms.map((room) => (
              <li
                key={room}
                className={room === currentRoom ? 'bg-blue-200' : ''}
              >
                <button
                  className="w-full text-left pl-2"
                  onClick={() => setCurrentRoom(room)}
                >
                  {room}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

Component.displayName = 'Controller'
