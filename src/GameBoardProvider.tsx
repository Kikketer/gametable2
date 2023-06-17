import { createContext, FC, PropsWithChildren, useRef, useState } from 'react'
import { GameBoardContextProps, Scenario } from './types'

const GameBoardContext = createContext<GameBoardContextProps | null>(null)

const GameBoardProvider: FC<PropsWithChildren> = ({ children }) => {
  const scenarioFilePath = useRef<string>()
  const [currentScenario, setScenario] = useState<Scenario>()
  // const [rooms] = useState<Room[]>([])
  // const [currentRoom, setCurrentRoom] = useState<Room>()

  const setCurrentScenario: GameBoardContextProps['setCurrentScenario'] = (
    props
  ) => {
    if (props) {
      const { scenario, path } = props
      // Remove the last filename.json5 from the path string:
      const pathWithoutFile = path.replace(/[^/]+\.json5$/, '')

      scenarioFilePath.current = pathWithoutFile
      // Translate the picked scenario to have the full path to the images and other files
      scenario.rooms.map((room) => {
        room.ground = `file:/${pathWithoutFile}${room.ground}`
      })
    } else {
      scenarioFilePath.current = undefined
    }
  }

  return (
    <GameBoardContext.Provider
      value={{
        // currentRoom,
        // setCurrentRoom,
        // rooms,
        // scenarios,
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
