import React from "react";
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class TestFlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: false, showDanger: false };
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Schedule a Test Flight</CardTitle>
            <CardSubtitle>No pilot's license required!</CardSubtitle>
            <CardText>
              Fill out the form fields below to schedule a test flight
            </CardText>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  name="customerName"
                  id="customerName"
                  placeholder="what is your name?"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="what is your phone num?"
                />
              </FormGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="what is your email address?"
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="what is your budget?"
                />
              </InputGroup>
            </Form>
            <br />
            <Button>Submit</Button>
            <Alert color="success">
              Your data were submitted successfully. Your test flifght awaits{" "}
            </Alert>
            <Alert color="danger">Something went wrong!</Alert>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TestFlightForm;
