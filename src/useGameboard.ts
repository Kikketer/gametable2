import { useContext } from 'react'
import { GameBoardContextProps } from './types'
import { GameBoardContext } from './GameBoardProvider'

export const useGameBoard = (): GameBoardContextProps => {
  const context = useContext(GameBoardContext)
  if (!context)
    throw new Error('useGameBoard must be used within a GameBoardProvider')
  return context
}
