import { ReactElement } from 'react'

type LeftWindowProps = {
  children?: ReactElement
}

export const LeftWindow = ({ children }: LeftWindowProps): ReactElement => {
  return <div>{children}</div>
}

LeftWindow.displayName = 'LeftWindow'
