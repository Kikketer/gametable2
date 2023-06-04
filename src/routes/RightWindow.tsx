import { ReactElement } from 'react'

type RightWindowProps = {
  children?: ReactElement
}

export const RightWindow = ({ children }: RightWindowProps): ReactElement => {
  return <div>{children}</div>
}

RightWindow.displayName = 'RightWindow'
