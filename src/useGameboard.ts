import { useContext } from 'react'
import { GameBoardContextProps } from './types.ts'
import { GameBoardContext } from './GameBoard.context.tsx'

export const useGameBoard = (): GameBoardContextProps => {
  const context = useContext(GameBoardContext)
  if (!context)
    throw new Error('useGameBoard must be used within a GameBoardProvider')
  return context
}
