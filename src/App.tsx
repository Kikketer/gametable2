import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile } from "@tauri-apps/api/fs";
import { useState } from 'react'

export const App = () => {
  const [status, setStatus] = useState('ready')
  const clicked = async () => {
    try {
      const selected = await open();
      setStatus(String(selected))
    } catch (error: any) {
      setStatus(error.message)
    }
  };

  const otherClicked = () => {
    readBinaryFile("src/App.tsx");
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={clicked}>Open Dialog</button>
      <button onClick={otherClicked}>Read File</button>
      <pre>
        {status}
      </pre>
    </div>
  );
};
