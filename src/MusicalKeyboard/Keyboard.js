import Key from "./Key"

const pentatonic = ["A", "B", "C", "D", "E", "F", "G"]

export default function Keyboard() {
  return (
      <div className="keyboard">
          {pentatonic.map((note, index) => (
              <Key key={index} note={note}/>
          ))}
    </div>
  )
}
