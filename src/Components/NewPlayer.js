import React from 'react';

const NewPlayer = () => {
  const teams = [
    'Jr. Ducks',
    'Jr. Condors',
    'Bay Harbor Red Wings',
    'California Golden Bears',
    'California Heat',
    'California Wave',
    'Desert Blaze',
    'Empire Hockey Club',
    'Goldrush Hockey Club',
    'Jr. Ice Dogs',
    'Jr. Reign',
    'Jr. Kings',
    'OC Hockey Club',
    'Moose',
    'Maple Leafs',
    'Rose City Pats',
    'Jr. Gulls',
    'Saints',
    'Ice Hawks',
    'Jr. Flyers',
    'SDIA Hockey Club',
    'Mariners',
    'Lady Ducks',
  ].sort();

  const cities = [
    'Anaheim',
    'Great Park',
    'Lakewood',
    'Westminster',
    'Bakersfield',
    'Torrance',
    'Burbank',
    'Panorama City',
    'Palm Springs',
    'Ontario',
    'Aliso Viejo',
    'Riverside',
    'Los Angeles',
    'Yorba Linda',
    'Pasadena',
    'San Diego',
    'Santa Barbara',
    'Valencia',
    'Simi Valley',
  ].sort();

  const division = [
    'Mites',
    'Squirt',
    'PeeWee',
    'Bantam',
    'Midget',
    'Juvenile',
    'Junior',
    'Senior',
  ];

  const level = ['B', 'BB', 'A', 'AA', 'AAA'];

  return (
    <form action="/players" className="form__container" method="POST">
      <h1>FORM INPUT</h1>
      <div>
        <input
          type="text"
          placeholder="First Name"
          id="form-first-name"
          className="form__name"
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          id="form-last-name"
          className="form__name"
          name="lastName"
        />
        <input
          type="number"
          placeholder="Number"
          id="form-number"
          className="form__number"
          name="number"
        />
      </div>
      <div className="position__check mt-5 mb-5">
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Forward
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Forward"
            id="flexCheckDefault"
            name="position"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Defenseman
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Defenseman"
            id="flexCheckChecked"
            name="position"
          />
        </div>
        <div className="form-check" id="goalie">
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Goalie
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Goalie"
            id="flexCheckChecked"
            name="position"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Coach
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Coach"
            id="flexCheckChecked"
            name="position"
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Assistant Coach
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            value="Assistant Coach"
            id="flexCheckChecked"
            name="position"
          />
        </div>
        <input
          type="text"
          placeholder="Height in Inches"
          id="form-height"
          className="form__height"
        />

        <input
          type="number"
          placeholder="Weight in lbs."
          id="form-weight"
          className="form__weight"
          name="weight"
        />

        <input
          type="text"
          placeholder="xx/xx/xxxx"
          id="form-born"
          className="form__born"
          name="born"
        />

        <input
          type="text"
          placeholder="Birthplace - City, State"
          id="form-birthplace"
          className="form__birthplace"
          name="birthplace"
        />

        <div>
          <select name="team" id="team">
            <option value="select-team">Select Team</option>
            {teams.map(team => {
              return (
                <option key={team} value={team}>
                  {team}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <select name="division" id="division">
            <option value="select-division">Select Division</option>
            {division.map(div => {
              return (
                <option key={div} value={div}>
                  {div}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <select name="level" id="level">
            <option value="select-level">Select Level</option>
            {level.map(lev => {
              return (
                <option key={lev} value={lev}>
                  {lev}
                </option>
              );
            })}
          </select>
        </div>

        <select name="location" id="city">
          <option value="select-city">Select Location</option>
          {cities.map(city => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewPlayer;
