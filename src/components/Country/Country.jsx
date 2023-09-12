import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  //   console.log(handleVisitedCountries);

  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" className="flag" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "visited" : "Wanna Visit?"}</button>
      <button onClick={() => handleVisitedCountries(country)}>Mark visited</button>
      <p>{visited && "I have visited"}</p>
    </div>
  );
};

export default Country;
