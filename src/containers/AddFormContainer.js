import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApi } from '../actions';
import Textbox from '../components/Textbox';

class AddFormContainer extends Component {
    render(){
        return(
            <Textbox getApi={this.props.getApi} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getApi: (number) => {
            dispatch(getApi(number))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddFormContainer)