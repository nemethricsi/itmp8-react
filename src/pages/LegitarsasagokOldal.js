import React from "react";
import data from "../data";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const legitarsasagLista = data.legitarsasagok;

const LegitarsasagokOldal = () => {
  return (
    <>
      <Header title="Légitársaságok listája" />
      <ul>
        {legitarsasagLista.map((legitarsasag, i) => {
          return (
            <li key={i}>
              <Link to={`/${legitarsasag.url}`}>{legitarsasag.nev}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LegitarsasagokOldal;
