import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { GameBoardProvider } from './GameBoardProvider.tsx'

export const CommonWindow = (): ReactElement => {
  return (
    <GameBoardProvider>
      <p>Common</p>
      <Outlet />
    </GameBoardProvider>
  )
}

CommonWindow.displayName = 'CommonWindow'
