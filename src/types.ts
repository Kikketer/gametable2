export type Room = {
  filename: string
  name: string
  ground: string
  music?: string
  gridOffset?: {
    x: number
    y: number
  }
}

export type Scenario = {
  name?: string
  rooms: Room[]
}

export type GameBoardContextProps = {
  // currentRoom?: Room
  // setCurrentRoom: (room: Room) => void
  // rooms: Room[]
  // scenarios: Scenario[]
  currentScenario?: Scenario
  setCurrentScenario: ({
    path,
    scenario,
  }?: {
    path: string
    scenario: Scenario
  }) => void
}
