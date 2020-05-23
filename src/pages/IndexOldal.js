import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import styles from "./indexOldal.module.css";

const IndexOldal = () => {
  return (
    <>
      <Header title="Repülési statisztikák" />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Link to="/legitarsasagok">
              <div className={styles.kep}>
                <img src="images/airplane-icon-sotet-zold.png" alt="" />
                <h2>Társaságok</h2>
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/repterek">
              <div className={styles.kep}>
                <img src="images/airplane-icon-kek.png" alt="" />
                <h2>Repterek</h2>
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <Link to="/kesesek">
              <div className={styles.kep}>
                <img src="images/airplane-icon-sarga.png" alt="" />
                <h2>Késések</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Vers</h3>
            <div className={styles.vers}>
              <h5 className={styles.verscim}>High Fligh</h5>
              <h4 className={styles.verscim}>by John Gillespie Mage</h4>
              <p>
                Oh! I have slipped the surly bonds of Earth
                <br />
                And danced the skies on laughter-silvered wings;
                <br />
                Sunward I’ve climbed, and joined the tumbling mirth
                <br />
                of sun-split clouds, — and done a hundred things
                <br />
                You have not dreamed of — wheeled and soared and swung
                <br />
                High in the sunlit silence. Hov’ring there,
                <br />
                I’ve chased the shouting wind along, and flung
                <br />
                My eager craft through footless halls of air....
                <br />
              </p>
              <p>
                Up, up the long, delirious, burning blue
                <br />
                I’ve topped the wind-swept heights with easy grace.
                <br />
                Where never lark, or even eagle flew —<br />
                And, while with silent, lifting mind I've trod
                <br />
                The high untrespassed sanctity of space,
                <br />
                - Put out my hand, and touched the face of God.
                <br />
              </p>

              {/* Óh, kitörtem hát a Föld komor bilincseiből,
                És ezüstös kacagó szárnyakkal táncoltam az égen,
                A Nap felé kapaszkodtam és csatlakoztam a felhők
                Bolondos játékához százféle dolgot megtettem,
                Melyről nem is álmodnál, keringve forogva
                A magasságok hallgatag magányában. Ott lebegve
                Üldözőbe vettem a süvöltő szelet, mialatt
                Hajóm csapongva szállt át az égi báltermeken.
                
                Fel, fel a végtelen szikrázó kékség felé
                Könnyedén túljutottam a szélfútta szférákon
                Ahol a pacsirta,  a sas sohasem repült még.
                És még a csöndben, emelkedett lélekkel jártam
                Az űrt, e felemelő, érintetlen tisztaságot
                Kinyújtottam kezem, s megérintettem az arcod, Uram.
                 
                (Fordította: Aranyi Erzsébet)
                 */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>A weblapot készítették</h3>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-2" style={{ textAlign: "center" }}>
                <Link to="/katalin">Katalin</Link>
              </div>
              <div className="col-sm-2" style={{ textAlign: "center" }}>
                <Link to="/hajnalka">Hajnalka</Link>
              </div>
              <div className="col-sm-2" style={{ textAlign: "center" }}>
                <Link to="/krisztian">Krisztián</Link>
              </div>
              <div className="col-sm-2" style={{ textAlign: "center" }}>
                <Link to="/richard">Richárd</Link>
              </div>
              <div
                className="col-sm-2"
                style={{ textAlign: "center", borderRight: "none" }}
              >
                <Link to="/andras">András</Link>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexOldal;
