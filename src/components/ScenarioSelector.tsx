import { ReactElement, useState } from 'react'
import { useGameBoard } from '../useGameboard'
import { open } from '@tauri-apps/api/dialog'
import { readTextFile } from '@tauri-apps/api/fs'
import JSON5 from 'json5'

export const ScenarioSelector = (): ReactElement => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const { setCurrentScenario, currentScenario } = useGameBoard()

  const openFile = async () => {
    console.log('Sending command!')
    try {
      const result = await open({
        multiple: false,
        title: 'Pick Scenario File',
        filters: [
          {
            name: 'Project Files',
            extensions: ['json5'],
          },
        ],
      })

      if (result) {
        setLoading(true)
        console.log('got result')
        const rawResult = await readTextFile(result as string)
        const parsedResult = JSON5.parse(rawResult)
        console.log('Setting result ', parsedResult)
        setCurrentScenario({
          path: Array.isArray(result) ? result[0] : result,
          scenario: parsedResult,
        })
      }
    } catch (err) {
      console.error(err)
      setError('Bad news loading scenario')
    }

    setLoading(false)

    // const result = await invoke('greet', { name: 'World' })
    // console.log('Respon', result)
  }

  return (
    <div className="flex flex-col mb-3">
      <div className="flex flex-row items-center">
        {currentScenario ? (
          <>
            <p>{currentScenario.name}</p>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setCurrentScenario()}
            >
              X
            </button>
          </>
        ) : (
          <>
            <label htmlFor="scenario-selector" className="mr-3">
              Pick a scenario:
            </label>
            <button className="btn" onClick={() => openFile()}>
              Open File
            </button>
          </>
        )}
      </div>
      {loading && <p className="text-info">Loading...</p>}
      {error && <p className="text-warning">{error}</p>}
    </div>
  )
}

ScenarioSelector.displayName = 'ScenarioSelector'
