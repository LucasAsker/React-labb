import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "../button";

function TextControlsExample({ addMovie }) {
  const titleInput = useRef();
  const gradeInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const titleValue = titleInput.current.value;
    const gradeValue = gradeInput.current.value;

    if (!titleValue && gradeValue === "0") {
      alert("Du måste ha titel och betyg för att lägga till film");
      return;
    }
    if (!titleValue) {
      alert("Du måste ange en titel");
      return;
    }

    if (!gradeValue || gradeValue === "0") {
      alert("Du måste ange betyg");
      return;
    }

    const newMovie = {
      title: titleValue,
      grade: parseInt(gradeValue)
    };
    addMovie(newMovie);
    titleInput.current.value = "";
    gradeInput.current.value = "0";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Film namn</Form.Label>
        <Form.Control type="text" placeholder="Star Wars" ref={titleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Välj betyg</Form.Label>
        <Form.Select aria-label="Default select example" ref={gradeInput}>
          <option value="0">Välj betyg</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>                                  
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="success" onClick={handleSubmit} type="submit">Spara!</Button>

    </Form>
  );
}

export default TextControlsExample;
