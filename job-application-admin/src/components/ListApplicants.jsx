import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class ListApplicants extends Component {
    constructor(props){
        super(props)

        this.state ={
            applicants:[]
        }
        this.addApplicant=this.addApplicant.bind(this)
    }
    componentDidMount(){
        ApplicantService.getApplicants().then((res)=>{
            this.setState({applicants:res.data})
        })
    }

    addApplicant(){
        this.props.history.push("/listapplicants")
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Applicants List</h2>
                <div className="row">
                <button className="btn btn-primary" onClick={this.addApplicant}> Add Applicant </button>
                    <table className="table table-striped table-boarded">

                        <thead>
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>e-mail</th>
                                <th>Phone</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Position</th>
                                <th>Additional Info</th>
                                <th>Comment</th>
                                <th>Actions</th>
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
                                        <td>{applicant.state}</td>
                                        <td>{applicant.city}</td>
                                        <td>{applicant.address}</td>
                                        <td>{applicant.position}</td>
                                        <td>{applicant.additional_Info}</td>
                                        <td>{applicant.comment}</td>
                                        <td>

                                        </td>

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