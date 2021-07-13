import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewID extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                     <div className = "row">
                            <label> 員工ID: </label>
                            <div> { this.state.id}</div>
                        </div>
                  

                </div>
            </div>
            </div>
        )
    }
}

export default ViewID
