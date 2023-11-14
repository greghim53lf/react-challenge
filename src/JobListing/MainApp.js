import Header from "./components/Header";
import "./style.css";
import { data } from "./data";
import Job from "./components/Job";
import { useState } from "react";
import Filter from "./components/Filter";

export default function MainApp() {
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    if (filters.includes(filter)) return;
    setFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (filter) => {
    setFilters((prev) => prev.filter((name) => name !== filter));
  };

  return (
    <div>
      <Header />
      {filters.length > 0 && (
        <div className="filters">
          {filters.map((filter, index) => (
            <Filter key={index} name={filter} removeFilter={removeFilter} />
          ))}
          <span className="clear" onClick={() => setFilters([])}>Clear</span>
        </div>
      )}
      <div className="jobs-container">
        {data.map((data) => {
          if (filters.length > 0) {
            const arr = [
              data.role,
              data.level,
              ...data.languages,
              ...data.tools,
            ];
            const contains = filters.every((element) => {
              return arr.includes(element);
            });
            return (
              contains && (
                <Job key={data.id} data={data} addFilter={addFilter} />
              )
            );
          } else return <Job key={data.id} data={data} addFilter={addFilter} />;
        })}
      </div>
    </div>
  );
}
