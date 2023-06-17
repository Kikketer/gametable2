export type Room = {
  filename: string
  name: string
}

export type Scenario = {
  folderName: string
  name?: string
  rooms: Room[]
}

export type GameBoardContextProps = {
  currentRoom?: Room
  setCurrentRoom: (room: Room) => void
  rooms: Room[]
  scenarios: Scenario[]
  currentScenario?: Scenario
  setCurrentScenario: (scenario: Scenario) => void
}
