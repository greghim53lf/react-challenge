export default function Filter({name, removeFilter}) {
  return (
      <div className="filter">
          <span className="filter-skill">{name}</span>
          <button onClick={() => removeFilter(name)}>x</button>
    </div>
  )
}
