import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';

class TableContainer extends Component {
    render(){
        return(
            <Table data={this.props.data} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps, null)(TableContainer)