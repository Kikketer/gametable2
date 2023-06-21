import { BoardWrap } from '../components/BoardWrap'
import { appWindow } from '@tauri-apps/api/window'

export function Component() {
  const maxi = async () => {
    await appWindow.maximize()
  }

  return (
    <BoardWrap>
      <button className="btn" onClick={maxi}>
        Maximize
      </button>
    </BoardWrap>
  )
}

Component.displayName = 'LeftWindow'
