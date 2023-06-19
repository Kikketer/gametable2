import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export const CommonWindow = (): ReactElement => {
  return <Outlet />
}

CommonWindow.displayName = 'CommonWindow'
