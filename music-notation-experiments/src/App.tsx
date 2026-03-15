import { useEffect, useState } from "react";
import "./App.css";
import opensheetmusicdisplay from "opensheetmusicdisplay";

type Clef = "treble" | "bass";

const createMusicXML = (clef: Clef) => {
  const clefXML = ((clef: Clef) => {
    switch (clef) {
      case "treble":
        return { sign: "G", line: "2" };
      case "bass":
        return { sign: "F", line: "4" };
      default: {
        const _unreachable: never = clef;
        return _unreachable as never;
      }
    }
  })(clef);

  return `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>${clefXML.sign}</sign>
          <line>${clefXML.line}</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
</score-partwise>
`;
};

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
