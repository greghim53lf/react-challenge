import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

export default function Key({ note }) {
  return (
    <div className="note" onClick={() => {
      synth.triggerAttackRelease(`${note}5`, "8n");
    }}>
      {note}
    </div>
  );
}
