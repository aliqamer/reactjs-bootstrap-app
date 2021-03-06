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
import Axios from "axios";

class TestFlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: false, showDanger: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(eventData) {
    const target = eventData.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  onSubmit(eventData) {
    eventData.preventDefault();
    Axios.post("http://localhost:3001/mailingList", {
      customerName: this.state.customerName,
      email: this.state.email,
      phone: this.state.phone,
      budget: this.state.budget
    })
      .then(res => {
        this.setState({ showSuccess: true, showDanger: false });
      })
      .catch(err => {
        this.setState({ showSuccess: false, showDanger: true });
      });
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
                  onChange={this.handleInputChange}
                  name="customerName"
                  id="customerName"
                  placeholder="what is your name?"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                  name="budget"
                  id="budget"
                  placeholder="what is your budget?"
                />
              </InputGroup>
            </Form>
            <br />
            <Button onClick={this.onSubmit}>Submit</Button>
            <Alert isOpen={this.state.showSuccess} color="success">
              Your data is submitted successfully. Your test flight awaits{" "}
            </Alert>
            <Alert isOpen={this.state.showDanger} color="danger">
              Something went wrong!
            </Alert>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TestFlightForm;
