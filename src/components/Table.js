import React, {Component} from 'react'

class Table extends Component{
    render(){
        return (
            <div>
                <br />
                <h1>
                    Result {console.log(this.props)}
                </h1>
            </div>
        )
    }
}

export default Table;