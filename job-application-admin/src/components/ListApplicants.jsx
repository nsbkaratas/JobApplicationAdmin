import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class ListApplicants extends Component {
    constructor(props){
        super(props)

        this.state ={
            applicants:[]
        }
    }
    componentDidMount(){
        ApplicantService.getApplicants().then((res)=>{
            this.setState({applicants:res.data})
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Applicants List</h2>
                <div className="row">
                    <table className="table table-striped table-boarded">

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>e-mail</th>
                                <th>Phone</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Position</th>
                                <th>Additional Info</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.applicants.map(
                                    applicant=>
                                    <tr key={applicant.id}>
                                        <td>{applicant.firstname}</td>
                                        <td>{applicant.lastname}</td>
                                        <td>{applicant.email}</td>
                                    </tr>                                
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default ListApplicants