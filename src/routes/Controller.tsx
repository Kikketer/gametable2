import { ReactElement } from 'react'
import './controller.css'

export function Component(): ReactElement {
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
            <li>Room A</li>
          </ul>
        </div>
      </div>
    </>
  )
}

Component.displayName = 'Controller'
