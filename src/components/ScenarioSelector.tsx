import { ReactElement } from 'react'
import { useGameBoard } from '../useGameboard.ts'
import { Scenario } from '../types.ts'
import { open } from '@tauri-apps/api/dialog'

export const ScenarioSelector = (): ReactElement => {
  const { currentScenario, setCurrentScenario, scenarios } = useGameBoard()

  // Temporary for now until I figure out how to have Tauri's Rust code open a file to get the full page
  // useEffect(() => {
  //   setCurrentScenario()
  // }, [])

  const selectScenario = (folderName: Scenario['folderName']) => {
    console.log('Event ', folderName)
    // const scenario = scenarios?.find(
    //   (scenario) => scenario.folderName === folderName
    // )
    // if (scenario) {
    //   setCurrentScenario(scenario)
    // }
  }

  const openFile = async () => {
    console.log('Sending command!')
    try {
      const result = await open({
        multiple: false,
        filters: [
          {
            name: 'Project Files',
            extensions: ['json5'],
          },
        ],
      })
      if (result) {
        console.log('Result', result)
      }
    } catch (err) {
      console.error(err)
    }

    // const result = await invoke('greet', { name: 'World' })
    // console.log('Respon', result)
  }

  return (
    <div className="flex gap-3">
      <label htmlFor="scenario-selector">Pick a scenario:</label>
      <button className="btn" onClick={() => openFile()}>
        Open File
      </button>
      {/*<input*/}
      {/*  type="file"*/}
      {/*  id="scenario-selector"*/}
      {/*  accept=".json5"*/}
      {/*  onChange={(e) => selectScenario(e.target.value)}*/}
      {/*/>*/}
      {/*<select*/}
      {/*  id="scenario-selector"*/}
      {/*  value={currentScenario?.folderName}*/}
      {/*  onSelect={(e) => selectScenario(e.currentTarget.value)}*/}
      {/*>*/}
      {/*  {scenarios?.map((scenario) => (*/}
      {/*    <option key={scenario.folderName} value={scenario.folderName}>*/}
      {/*      {scenario.name}*/}
      {/*    </option>*/}
      {/*  ))}*/}
      {/*</select>*/}
    </div>
  )
}

ScenarioSelector.displayName = 'ScenarioSelector'
