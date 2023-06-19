export type Room = {
  filename: string
  name: string
  floor: string
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
  currentRoom?: number
  setCurrentRoom: (roomIndex: number) => void
  rooms?: Room[]
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
