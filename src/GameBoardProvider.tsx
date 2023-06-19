import { createContext, FC, PropsWithChildren, useRef, useState } from 'react'
import { GameBoardContextProps, Scenario } from './types'
import { SCENARIO_FOLDER } from './constants'

const GameBoardContext = createContext<GameBoardContextProps | null>(null)

const GameBoardProvider: FC<PropsWithChildren> = ({ children }) => {
  // const scenarioFilePath = useRef<string>()
  const scenarioFolderName = useRef<string>()
  const [currentScenario, setScenario] = useState<Scenario>()
  // The room index:
  const [currentRoom, setCurrentRoom] = useState<number>()

  const setCurrentScenario: GameBoardContextProps['setCurrentScenario'] = (
    props
  ) => {
    if (props) {
      const { scenario, path } = props
      // Remove the last filename.json5 from the path string:
      // const pathWithoutFile = path.replace(/[^/]+\.json5$/, '')
      const folderName = `${SCENARIO_FOLDER}/${path.split('/').slice(-2)[0]}`

      scenarioFolderName.current = folderName
      // scenarioFilePath.current = pathWithoutFile
      // Translate the picked scenario to have the full path to the images and other files
      scenario.rooms.map((room) => {
        room.floor = `${folderName}/${room.floor}`
      })

      setScenario(scenario)
      // Also set the first room
      setCurrentRoom(0)
    } else {
      scenarioFolderName.current = undefined
      setScenario(undefined)
    }
  }

  return (
    <GameBoardContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
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
