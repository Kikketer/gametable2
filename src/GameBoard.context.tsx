import { createContext, FC, PropsWithChildren, useState } from 'react'
import { GameBoardContextProps, Room, Scenario } from './types.ts'

const GameBoardContext = createContext<GameBoardContextProps | null>(null)

const GameBoardProvider: FC<PropsWithChildren> = ({ children }) => {
  const [scenarios] = useState<Scenario[]>([])
  const [currentScenario, setCurrentScenario] = useState<Scenario>(
    scenarios[0] || ({} as Scenario)
  )
  const [rooms] = useState<Room[]>([])
  const [currentRoom, setCurrentRoom] = useState<Room>()

  return (
    <GameBoardContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
        rooms,
        scenarios,
        currentScenario,
        setCurrentScenario,
      }}
    >
      {children}
    </GameBoardContext.Provider>
  )
}

GameBoardProvider.displayName = 'GameBoardProvider'

export { GameBoardProvider, GameBoardContext }
