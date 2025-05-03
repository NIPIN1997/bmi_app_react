import styles from "../styles/home.module.css";
import { Calculator } from "./Calculator";
import { Chart } from "./Chart";

export function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>BMI APP</h1>
        <div className={styles.subContainer}>
          <div className={styles.content}>
            <Calculator />
          </div>
          <div
            style={{ borderLeft: "5px solid #c5c9c6", minHeight: "400px" }}
            className={styles.borderVertical}
          ></div>
          <div
            style={{ borderBottom: "5px solid #c5c9c6" }}
            className={styles.borderHorizontal}
          ></div>
          <div className={styles.content}>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}
