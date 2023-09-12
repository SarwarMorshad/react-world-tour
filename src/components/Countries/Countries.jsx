import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  //   const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    // console.log("Add this visited");
    console.log(country);
    setVisitedCountries([...visitedCountries, country]);
  };

  /*   const handleVisitedFlags = (flag) => {
    console.log("Flag added");
  }; */

  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>
      {/* Visited Countries */}
      <div className="flag-container">
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
          {visitedCountries.map((country) => (
            <img className="flag" key={country.cca3} src={country.flags.png} alt="" />
          ))}
        </ul>
      </div>
      {/* Display Countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            /* handleVisitedFlags={handleVisitedFlags} */
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
