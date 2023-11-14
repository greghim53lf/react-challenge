export default function Meal({name, count, handleClick}) {
    return <div className="meal">
        <h2 className="meal-name" onClick={() => handleClick(name)}>{name}</h2>
        <p className="meal-count">{count }</p>
    </div>
}