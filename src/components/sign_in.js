import React, {Component} from 'react';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
                email: '',
                password: ''
        }

        //END OF CONSTRUCTOR
    }

        handleSubmit = (event) => {
            event.preventDefault();
            console.log('Form Submitted', this.state);
        
            this.setState({
                email: '',
                password: ''
            });
        }

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
                // [] interprete whats inside as a varibale
            })
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email </label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} autoComplete="off" />
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={this.state.password} name="password"  onChange={this.handleChange} autoComplete="off" />
                </div>
                <button>Sign In</button>
            </form>
        )
    }
}

export default SignIn;