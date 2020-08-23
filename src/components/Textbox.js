import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Textbox extends Component{
    static propTypes = {
        getApi: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const number = this.getNumber.value;
        this.props.getApi(number);
        this.getNumber.value = '';
    }

    render(){
        return (
            <div>
                <h1>
                    Add Number
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="number" placeholder="Enter Number" ref={ (input) => this.getNumber = input } />
                    <br />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Textbox;