import React, { Component } from 'react'
import ApplicantService from '../services/ApplicantService';

class DeleteApplicant extends Component {
    constructor(props)
    {
        super(props)
        
        this.state={
            id:this.props.match.params.id,
            f_Name:'',
            l_Name:'',
            e_mail:'',
            phone:'',
            address:'',
            position:'',
            resume_Link:'',
            comment:'',
        }
     
        
            this.deleteApplicant=this.deleteApplicant.bind(this)
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

    deleteApplicant = (e) => {
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

        console.log(applicant);
        ApplicantService.deleteApplicant(this.state.id).then(res => {
            
            this.props.history.push('/listapplicants');
        })
    }
    cancel(){
        this.props.history.push("/listapplicants")
    }

    render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                      <div className="card col-md-3 offset-md-5">
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
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
                                    <button className="btn btn-success" onClick={this.deleteApplicant}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        )
    }
}
export default DeleteApplicant