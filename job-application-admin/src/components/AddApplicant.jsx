import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class AddApplicant extends Component {
    constructor(props){
        super(props)
        this.state={
            f_Name:'',
            l_Name:'',
            e_mail:'',
            phone:'',
            address:'',
            position:'',
            resume_Link:'',
            comment:'',
        }

        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler= this.changeLastNameHandler.bind(this)
        this.changeEmailHandler= this.changeEmailHandler.bind(this)
        this.changePhoneHandler= this.changePhoneHandler.bind(this)
        this.changeAddressHandler= this.changeAddressHandler.bind(this)
        this.changePositionHandler= this.changePositionHandler.bind(this)
        this.changeAdditionalInfoHandler= this.changeAdditionalInfoHandler.bind(this)
        this.changeCommentHandler= this.changeCommentHandler.bind(this)
        this.saveApplicant=this.saveApplicant.bind(this)
    }

    changeFirstNameHandler=(event)=>{
        this.setState({f_Name: event.target.value})
    }
    changeLastNameHandler=(event)=>{
        this.setState({l_Name: event.target.value})
    }
    changeEmailHandler=(event)=>{
        this.setState({e_mail: event.target.value})
    }
    changePhoneHandler=(event)=>{
        this.setState({phone: event.target.value})
    }
    changeAddressHandler=(event)=>{
        this.setState({address: event.target.value})
    }
    changePositionHandler=(event)=>{
        this.setState({position: event.target.value})
    }
    changeAdditionalInfoHandler=(event)=>{
        this.setState({resume_Link: event.target.value})
    }
    changeCommentHandler=(event)=>{
        this.setState({comment: event.target.value})
    }

    saveApplicant=(e)=>{
        e.preventDefault();
        let applicant={
            f_Name:this.state.f_Name,
            l_Name:this.state.l_Name,
            e_mail:this.state.e_mail,
            phone:this.state.phone,
            address:this.state.address,
            position:this.state.position,
            resume_Link:this.state.resume_Link,
            comment:this.state.comment,
        }
        console.log(applicant)
        ApplicantService.addApplicant(applicant).then((res)=>{
            this.props.history.push('/listapplicants')
        }).catch(err=>{
            console.log("record not saved.");
        });
    }
    cancel(){
        this.props.history.push("/listapplicants")
    }

    render() {
        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-3 offset-md-5">
                        <h3>Job Application form</h3>
                        <div className="card-body"></div>
                            <form>
                                <div className="form-group">
                                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.f_Name} onChange={this.changeFirstNameHandler} /><br/>
                                    <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.l_Name} onChange={this.changeLastNameHandler} /><br/>
                                    <input placeholder="e-mail" name="e_mail" className="form-control" value={this.state.e_mail} onChange={this.changeEmailHandler} /><br/>
                                    <input placeholder="Phone" name="phone" className="form-control" value={this.state.phone} onChange={this.changePhoneHandler} /><br/>
                                    <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} /><br/>
                                    <input placeholder="Position" name="position" className="form-control" value={this.state.position} onChange={this.changePositionHandler} /><br/>
                                    <input placeholder="Resume Link" name="resume_Link" className="form-control" value={this.state.resume_Link} onChange={this.changeAdditionalInfoHandler} /><br/>
                                    <input placeholder="Comment" name="comment" className="form-control" value={this.state.comment} onChange={this.changeCommentHandler} /><br/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveApplicant}> Save </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddApplicant