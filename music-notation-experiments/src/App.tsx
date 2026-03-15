import { useEffect, useState } from "react";
import "./App.css";
import opensheetmusicdisplay from "opensheetmusicdisplay";
import type { Clef } from "./lib/music";
import { createMusicXML } from "./lib/musicXML";

function App() {
  const containerId = "osmdContainer";
  const [clef, setClef] = useState<Clef>("treble");

  useEffect(() => {
    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(containerId, {
      autoResize: true,
      backend: "svg",
      drawingParameters: "compacttight",
      autoBeam: true,
    });

    const notation = createMusicXML(clef);

    osmd.load(notation).then(() => {
      osmd.render();
    });
  }, [clef]);

  return (
    <>
      <div id={containerId}></div>
      <button onClick={() => setClef("treble")}>treble</button>
      <button onClick={() => setClef("bass")}>bass</button>
    </>
  );
}

export default App;
