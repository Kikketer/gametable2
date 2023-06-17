import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import noDice from '../assets/No Dice 1.png'

export const NoDice = (): ReactElement => {
  return (
    <>
      <h1 className="text-xl">No Dice</h1>
      <img src={noDice} alt="dice" />
      <Link className="text-blue-700" to="/controller">
        Controller
      </Link>
    </>
  )
}

NoDice.displayName = 'NoDice'
