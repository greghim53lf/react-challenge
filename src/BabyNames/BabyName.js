export default function BabyName({data, handleFavoriteClick}) {
    const {id, name, sex} = data
    const backgroundClr = sex === "m" ? "blue" : "pink"
    
  return (
    <div onClick={() => handleFavoriteClick(id)} style={{backgroundColor: backgroundClr}} className="baby-name">{name}</div>
  )
}
