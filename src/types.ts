export type Room = {
  filename: string
  name: string
}

export type GameBoardContextProps = {
  currentRoom?: Room
  setCurrentRoom: (room: Room) => void
  rooms: Room[]
}
