import { ReactElement } from 'react'
import './controller.css'
import { ScenarioSelector } from '../components/ScenarioSelector'
import { RoomSelector } from '../components/RoomSelector'
import { useGameBoard } from '../useGameboard'

export function Component(): ReactElement {
  const { currentScenario } = useGameBoard()

  return (
    <div className="flex flex-col">
      <ScenarioSelector />
      <div className="controller-grid">
        <div className="flex flex-col">
          <button className="btn btn-sm btn-neutral mb-1">Show Grid</button>
          <button className="btn btn-sm btn-neutral mb-1">Hide Grid</button>
          <button className="btn btn-sm btn-neutral mb-1">Reload</button>
          <button className="btn btn-sm btn-neutral">Maximize</button>
        </div>
        <div>
          <RoomSelector />
        </div>
      </div>
      <p>Temp:</p>
      {currentScenario && <img src={currentScenario.rooms[0].ground} />}
    </div>
  )
}

Component.displayName = 'Controller'
