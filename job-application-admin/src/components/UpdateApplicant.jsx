import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService'

class UpdateApplicant extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            f_Name:'',
            l_Name:'',
            e_mail:'',
            phone:'',
            state:'',
            city:'',
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
        this.updateApplicant=this.updateApplicant.bind(this)
    }
    componentDidMount(){
        ApplicantService.getApplicantById(this.state.id).then(res=>{
            let applicant=res.data;
            this.setState({
                f_Name:applicant.f_Name,
                l_Name:applicant.l_Name,
                e_mail:applicant.e_mail,
                phone:applicant.phone,
                address:applicant.address,
                position:applicant.position,
                resume_Link:applicant.resume_Link,
                comment:applicant.comment,
            })
        })
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

    updateApplicant=(e)=>{
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
        ApplicantService.updateApplicant(applicant,this.state.id).then((res)=>{
            this.props.history.push('/listapplicants')
        })
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
                                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.f_Name} onChange={this.changeFirstNameHandler} />
                                    <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.l_Name} onChange={this.changeLastNameHandler} />
                                    <input placeholder="e-mail" name="e_mail" className="form-control" value={this.state.e_mail} onChange={this.changeEmailHandler} />
                                    <input placeholder="Phone" name="phone" className="form-control" value={this.state.phone} onChange={this.changePhoneHandler} />
                                    <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                                    <input placeholder="Position" name="position" className="form-control" value={this.state.position} onChange={this.changePositionHandler} />
                                    <input placeholder="Resume Link" name="resume_Link" className="form-control" value={this.state.resume_Link} onChange={this.changeAdditionalInfoHandler} />
                                    <input placeholder="Comment" name="comment" className="form-control" value={this.state.comment} onChange={this.changeCommentHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.updateApplicant}> Update </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateApplicant