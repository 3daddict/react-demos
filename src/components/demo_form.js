import React, {Component} from 'react';

class DemoForm extends Component {
constructor(props){
    super(props);

    console.log('Props', props);

    this.state = {
        email: props.email || '',
        password: '',
        name: ''
        }

        this.handleChange = this.handleChange.bind(this);
}

handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted', this.state);

    this.setState({
        email: '',
        password: '',
        name: ''
    });
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
        // [] interprete whats inside as a varibale
    }) 
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Demo Form</h1>
                <div>
                    <label>Email </label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} autoComplete="off" />
                </div>
                <div>
                    <label>Name </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} autoComplete="off" />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={this.state.password} name="password"  onChange={this.handleChange} autoComplete="off" />
                </div>
                <button>Submit Form</button>
            </form>
        );
    }
}

export default DemoForm;