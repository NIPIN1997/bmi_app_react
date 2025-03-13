import styles from "../styles/home.module.css";
import { Calculator } from "./Calculator";
import { Chart } from "./Chart";

export function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>BMI APP</h1>
        <div className={styles.subContainer}>
          <div>
            <Calculator />
          </div>
          <div
            style={{ borderLeft: "5px solid #c5c9c6", height: "400px" }}
          ></div>
          <div>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}
