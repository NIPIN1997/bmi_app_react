import { useState } from "react";
import styles from "../styles/calculator.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export function Calculator() {
  const [data, setData] = useState({});
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    setShouldDisplay(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let heightInMetre = data.height / 100;
    let bmiValue =
      Math.round((data.weight / (heightInMetre * heightInMetre)) * 100) / 100;
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setCategory("Underweight");
      setColor("#77797d");
    } else if (bmiValue < 25) {
      setCategory("Normal");
      setColor("#06bf0c");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
      setColor("#f0a607");
    } else {
      setCategory("Obese");
      setColor("#f20c0c");
    }
    setShouldDisplay(true);
  };

  return (
    <>
      <div className={styles.container}>
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            marginBottom: "40px",
          }}
        >
          BMI Calculator
        </h3>
        <div className={styles.subContainer}>
          <Form onSubmit={handleSubmit} method="post">
            <Row className="mb-3">
              <Col md="7" sm="12">
                <Form.Label>Weight (in kilograms) :</Form.Label>
              </Col>
              <Col md="5" sm="12">
                <Form.Control
                  type="number"
                  name="weight"
                  step={0.001}
                  min={0}
                  placeholder="Enter weight"
                  onChange={() => onChange(event)}
                ></Form.Control>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md="7" sm="12">
                <Form.Label>Height (in centimeters) :</Form.Label>
              </Col>
              <Col md="5" sm="12">
                <Form.Control
                  type="number"
                  name="height"
                  step={1}
                  min={0}
                  placeholder="Enter height"
                  onChange={() => onChange(event)}
                ></Form.Control>
              </Col>
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Button
                type="submit"
                style={{ width: "100px", fontSize: "18px" }}
              >
                Calculate
              </Button>
            </div>
          </Form>
        </div>
        {bmi != 0 && !isNaN(bmi) && shouldDisplay ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                BMI : {bmi}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "25px",
              }}
            >
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                Category : <span style={{ color: color }}>{category}</span>
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
