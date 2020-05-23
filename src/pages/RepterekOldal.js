import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const RepterekOldal = () => {
  return (
    <>
      <Header title="Repterek" />
      <h1>RepterekOldal</h1>
      <Link to="/">Vissza a főoldalra</Link>
    </>
  );
};

export default RepterekOldal;
