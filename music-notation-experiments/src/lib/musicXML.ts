import type { Clef, Note } from "./music";

export const clefToXML = (clef: Clef) => {
  const clefProperties = ((clef: Clef) => {
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
<clef>
    <sign>${clefProperties.sign}</sign>
    <line>${clefProperties.line}</line>
</clef>
`;
};

export const noteToXML = (note: Note) => `
<note>
    <pitch>
        <step>${note.pitch}</step>
        <octave>${note.octave}</octave>
    </pitch>
    <duration>${note.duration}</duration>
    <type>${note.type}</type>
</note>
`;

export const createMusicXML = (clef: Clef) => {
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

  const notes: Note[] = [
    {
      pitch: "C",
      octave: "4",
      duration: "4",
      type: "whole",
    },
    {
      pitch: "D",
      octave: "4",
      duration: "4",
      type: "whole",
    },
  ];

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
        ${notes.map(
          (note) =>
            `
             <note>
               <pitch>
                   <step>${note.pitch}</step>
                   <octave>${note.octave}</octave>
               </pitch>
               <duration>${note.duration}</duration>
               <type>${note.type}</type>
             </note>
          `,
        )}
    </measure>
  </part>
</score-partwise>
`;
};
