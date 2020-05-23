import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.szurke}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center my-4">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
