import styles from "../styles/chart.module.css";

export function Chart() {
  return (
    <>
      <div className={styles.container}>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          BMI Classification
        </h3>
        <div
          className={styles.subContainer}
          style={{ backgroundColor: "#d4d9d5" }}
        >
          <div className={styles.smallContainer} style={{ color: "black" }}>
            BMI
          </div>
          <div className={styles.smallContainer} style={{ color: "black" }}>
            Category
          </div>
        </div>
        <div
          className={styles.subContainer}
          style={{ backgroundColor: "#77797d" }}
        >
          <div className={styles.smallContainer}>&lt; 18.5</div>
          <div className={styles.smallContainer}>Underweight</div>
        </div>
        <div
          className={styles.subContainer}
          style={{ backgroundColor: "#06bf0c" }}
        >
          <div className={styles.smallContainer}>18.5 - 24.9</div>
          <div className={styles.smallContainer}>Normal</div>
        </div>
        <div
          className={styles.subContainer}
          style={{ backgroundColor: "#f0a607" }}
        >
          <div className={styles.smallContainer}>25 - 29.9</div>
          <div className={styles.smallContainer}>Overweight</div>
        </div>
        <div
          className={styles.subContainer}
          style={{ backgroundColor: "#f20c0c" }}
        >
          <div className={styles.smallContainer}>&gt; 30</div>
          <div className={styles.smallContainer}>Obese</div>
        </div>
      </div>
    </>
  );
}
