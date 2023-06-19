import './controller.css'
import { ScenarioSelector } from '../components/ScenarioSelector'
import { RoomSelector } from '../components/RoomSelector'
import { ImageLibrary } from '../components/ImageLibrary'

export function Component() {
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
      <ImageLibrary />
    </div>
  )
}

Component.displayName = 'Controller'
