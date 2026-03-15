import { useEffect, useRef } from "react";
import "./App.css";
import opensheetmusicdisplay from "opensheetmusicdisplay";
import sampleXML from "./assets/hello-world.musicxml?raw";

function App() {
  const containerId = "osmdContainer";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(containerId, {
      autoResize: true,
      backend: "svg",
      drawingParameters: "compacttight",
      autoBeam: true,
    });

    osmd.load(sampleXML).then(() => {
      osmd.render();
    });
  });

  return (
    <>
      <div ref={containerRef} id={containerId}></div>
    </>
  );
}

export default App;
