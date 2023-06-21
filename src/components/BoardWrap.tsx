type BoardWrapProps = {
  children?: ReactElement
}

export const BoardWrap = ({ children }: BoardWrapProps) => {
  return (
    <div>
      <div
        style={{ width: 200, height: 200, background: 'orange' }}
        data-tauri-drag-region
      ></div>
      {children}
    </div>
  )
}

BoardWrap.displayName = 'BoardWrap'
