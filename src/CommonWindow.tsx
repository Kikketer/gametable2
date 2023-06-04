import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export const CommonWindow = (): ReactElement => {
  return (
    <>
      <p>Common</p>
      <Outlet />
    </>
  )
}

CommonWindow.displayName = 'CommonWindow'
