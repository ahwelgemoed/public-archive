import React from "react";
import { hot } from "react-hot-loader/root";
import { spawn } from "child_process";

import "./style.css";

function App() {
  const x = () => {
    const ls = spawn("ls", ["-lh", "/usr"]);

    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });
  };
  return (
    <div>
      <div className="bg-gray-200 p-5 text-center">Tailwind</div>

      <h3>Hello From Electron App</h3>
      <h4>Electron: {process.versions.electron}</h4>
      <h4>Chrome: {process.versions.chrome}</h4>
      <h4 onClick={x}>Node: {process.versions.node}</h4>
    </div>
  );
}

export default hot(App);
