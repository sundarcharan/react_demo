import "./styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <div className="Login">
      <h1>Login</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Email address</b>
          </Form.Label>
          <br />
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>Password</b>
          </Form.Label>
          <br />
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <hr />
    </div>
  );
}
