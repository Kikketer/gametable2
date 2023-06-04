import { ReactElement } from 'react'
import { useGameBoard } from '../useGameboard.ts'
import { Scenario } from '../types.ts'

export const ScenarioSelector = (): ReactElement => {
  const { currentScenario, setCurrentScenario, scenarios } = useGameBoard()

  const selectScenario = (folderName: Scenario['folderName']) => {
    const scenario = scenarios?.find(
      (scenario) => scenario.folderName === folderName
    )
    if (scenario) {
      setCurrentScenario(scenario)
    }
  }

  return (
    <div className="flex gap-3">
      <label htmlFor="scenario-selector">Pick a scenario:</label>
      <select
        id="scenario-selector"
        value={currentScenario?.folderName}
        onSelect={(e) => selectScenario(e.currentTarget.value)}
      >
        {scenarios?.map((scenario) => (
          <option key={scenario.folderName} value={scenario.folderName}>
            {scenario.name}
          </option>
        ))}
      </select>
    </div>
  )
}

ScenarioSelector.displayName = 'ScenarioSelector'
