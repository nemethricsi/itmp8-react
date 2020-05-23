import React from "react";
import Header from "../components/Header/Header";
import { useParams, Link } from "react-router-dom";
import data from "../data";

const { legitarsasagok } = data;

const LegitarsasagOldal = () => {
  const { legitarsasagUrl } = useParams();

  const tarsasagObj = legitarsasagok.find(
    (tarsasag) => tarsasag.url === legitarsasagUrl
  );

  if (!tarsasagObj) {
    return <h1>{`Nincs "${legitarsasagUrl}" nevű légitársaság!`}</h1>;
  }

  return (
    <>
      <Header title={tarsasagObj.nev} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <p style={{ margin: "20px 0" }}>
              <Link to="/">Főoldal</Link> >{" "}
              <Link to="/legitarsasagok">Légitársaságok listája</Link>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>{tarsasagObj.nev}</h2>
          </div>
          <div className="col-sm-6">
            társaságlogója
            <img
              className="img-thumbnail"
              src={tarsasagObj.logo}
              alt={`${tarsasagObj.nev} logo`}
            />
          </div>
          <div className="col-sm-6" id="adatok">
            <p>
              <strong> Az összes járat:</strong>
              <br />
              <span id="osszes">{tarsasagObj.osszes}</span>
            </p>
            <p>
              <strong> A látogatott repterek száma:</strong> <br />
              <span id="latogatott">{tarsasagObj.latogatott}</span>
            </p>
            <p>
              <strong> A törölt járatok aránya:</strong> <br />
              <span id="torolt">{tarsasagObj.torolt}</span>{" "}
            </p>
            <p>
              <strong> Az átlagos járat késés:</strong> <br />
              <span id="atlagos">{tarsasagObj.atlagos}</span>
            </p>
            <p>
              <strong> A legforgalmasabb reptér:</strong> <br />
              <span id="legforgalmasabb">{tarsasagObj.legforgalmassabb}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegitarsasagOldal;
