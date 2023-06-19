import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { GameBoardProvider } from './GameBoardProvider'

export const CommonWindow = (): ReactElement => {
  return (
    <GameBoardProvider>
      <Outlet />
    </GameBoardProvider>
  )
}

CommonWindow.displayName = 'CommonWindow'
