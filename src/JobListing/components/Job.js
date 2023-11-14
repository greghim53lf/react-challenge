export default function Job({ data, addFilter, filters }) {
  const {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  return (
    <div className={`job ${isFeatured && "featured"}`}>
      <div className="image">
        <img src={logo} alt={company} />
      </div>
      <div className="details">
        <div>
          <span className="company-name">{company}</span>
          {isNew && <span className="isNew">NEW!</span>}
          {isFeatured && <span className="isFeatured">FEATURED</span>}
        </div>
        <div className="position">{position}</div>
        <div className="job-info">
          <span>{postedAt}</span>
          <span> . </span>
          <span>{contract}</span>
          <span> . </span>
          <span>{location}</span>
        </div>
      </div>
      <div className="skills">
        <span className="skill" onClick={() => addFilter(role)}>
          {role}
        </span>
        <span className="skill" onClick={() => addFilter(level)}>
          {level}
        </span>
        {languages.map((language, index) => (
          <span
            key={index}
            className="skill"
            onClick={() => addFilter(language)}
          >
            {language}
          </span>
        ))}
        {tools.map((tool, index) => (
          <span key={index} className="skill" onClick={() => addFilter(tool)}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
