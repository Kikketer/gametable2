export function Component() {
  return (
    <div>
      <div
        style={{ width: 200, height: 200, background: 'orange' }}
        data-tauri-drag-region
      ></div>
    </div>
  )
}

Component.displayName = 'LeftWindow'
