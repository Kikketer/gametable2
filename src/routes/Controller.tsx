import { ReactElement } from 'react'
import './controller.css'
import { ScenarioSelector } from '../components/ScenarioSelector'
import { RoomSelector } from '../components/RoomSelector'
import { useGameBoard } from '../useGameboard'
import { Image } from '../components/Image'

export function Component(): ReactElement {
  const { currentScenario, currentRoom } = useGameBoard()

  return (
    <div className="container p-2 mx-auto my-3 border-2 rounded-md flex flex-col">
      <ScenarioSelector />
      <div className="controller-grid">
        <div className="flex flex-col">
          <button className="btn btn-sm btn-neutral mb-1">Show Grid</button>
          <button className="btn btn-sm btn-neutral mb-1">Hide Grid</button>
          <button className="btn btn-sm btn-neutral mb-1">Reload</button>
          <button className="btn btn-sm btn-neutral">Maximize</button>
        </div>
        <div className="ml-4">
          <RoomSelector />
        </div>
      </div>
      <p>Temp:</p>
      {currentScenario && (
        <Image path={currentScenario.rooms[currentRoom || 0].floor} />
      )}
    </div>
  )
}

Component.displayName = 'Controller'
