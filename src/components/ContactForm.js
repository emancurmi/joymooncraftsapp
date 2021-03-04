import { Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";

const ContactForm = (props) => {
  return (
    <Form {...props}>
      <div className="controls">
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="name" className="form-label">
                Your firstname *
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your firstname"
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="surname" className="form-label">
                Your firstname *
              </Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="Enter your lasttname"
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email" className="form-label">
            Your email *
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message" className="form-label">
            Your message for us *
          </Label>
          <Input
            type="textarea"
            rows="4"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
        </FormGroup>
        <Button type="submit" color="outline-dark">
          Send message
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
