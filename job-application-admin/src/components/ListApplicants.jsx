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
                                <th>id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>e-mail</th>
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
                                        <td>{applicant.id}</td>
                                        <td>{applicant.f_Name}</td>
                                        <td>{applicant.l_Name}</td>
                                        <td>{applicant.e_mail}</td>
                                        <td>{applicant.phone}</td>
                                        <td>{applicant.country}</td>
                                        <td>{applicant.city}</td>
                                        <td>{applicant.address}</td>
                                        <td>{applicant.position}</td>
                                        <td>{applicant.additional_Info}</td>
                                        <td>{applicant.comment}</td>

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