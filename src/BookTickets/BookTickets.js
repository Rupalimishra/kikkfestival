import React, { Component } from 'react';


class BookTickets extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      fields: {},
      fieldErrors: {},
    };
  }

  onInputChange(e) {
    const fields = this.state.fields;
    const newFields = {};
    newFields[e.target.name] = e.target.value;
    this.setState({
      fields: {...fields, ...newFields}
    });
  }

  validate(formData) {   
    const errors = {};
    if (!formData.name || formData.name === '' || formData.name === null) {
      errors.name = 'Please enter your name.';
    }
    return errors;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = this.state.fields
    const fieldErrors = this.validate(formData);

    this.setState({
      fieldErrors
    });

    if (Object.keys(fieldErrors).length) return;

    const name = this.state.fields.name;
    this.props.handleFormSubmit(name);
    this.setState({
      fields: {},
      fieldErrors: {},
    })

  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.fields.name || ''}
          name="name"
          onChange={(e) => this.onInputChange(e)}
        />
        <p className="error">
          {this.state.fieldErrors.name}
        </p>
        <input
          type="submit"
          className="btn"
          value="Submit"
        />
      </form>
      );
  }
}
BookTickets.propTypes = {
  handleFormSubmit: React.PropTypes.func.isRequired,
};

export default BookTickets;