import { createContext, ReactNode, useState } from 'react'
import { GameBoardContextProps, Room } from './types.ts'

type GameBoardBase = {
  children: ReactNode
}

const GameBoardContext = createContext<GameBoardContextProps | null>(null)

const GameBoardProvider = ({ children }: GameBoardBase): JSX.Element => {
  const [rooms] = useState<Room[]>([])
  const [currentRoom, setCurrentRoom] = useState<Room>()

  return (
    <GameBoardContext.Provider value={{ currentRoom, setCurrentRoom, rooms }}>
      {children}
    </GameBoardContext.Provider>
  )
}

GameBoardProvider.displayName = 'GameBoardProvider'

export { GameBoardProvider, GameBoardContext }
