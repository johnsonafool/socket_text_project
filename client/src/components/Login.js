// hello from login!
import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSumit }) {
  const idRef = useRef();

  const handleSumit = (e) => {
    e.preventDefault();
    onIdSumit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSumit(uuidV4());
  };

  return (
    <Container className="align-item-center d-flex" style={{ height: "100vh" }}>
      <Form onSubmit={handleSumit} className="w-100">
        <Form.Group>
          <Form.Label>enter your id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          create a new id
        </Button>
      </Form>
    </Container>
  );
}
