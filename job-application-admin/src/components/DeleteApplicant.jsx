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
            state:'',
            city:'',
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
                state:applicant.state,
                city:applicant.city,
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
            state:this.state.state,
            city:this.state.city,
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
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
                              <form>  
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-group" value={this.state.f_Name} onChange={this.changeFirstNameHandler} />
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-group" value={this.state.l_Name} onChange={this.changeLastNameHandler} />
                                    <label>e-mail:</label>
                                    <input placeholder="e-mail" name="e_mail" className="form-group" value={this.state.e_mail} onChange={this.changeEmailHandler} />
                                    <label>Phone:</label>
                                    <input placeholder="Phone" name="phone" className="form-group" value={this.state.phone} onChange={this.changePhoneHandler} />
                                    <label>State:</label>
                                    <input placeholder="State" name="state" className="form-group" value={this.state.state} onChange={this.changeStateHandler} />
                                    <label>City:</label>
                                    <input placeholder="City" name="city" className="form-group" value={this.state.city} onChange={this.changeCityHandler} />
                                    <label>Address:</label>
                                    <input placeholder="Address" name="address" className="form-group" value={this.state.address} onChange={this.changeAddressHandler} />
                                    <label>Position:</label>
                                    <input placeholder="Position" name="position" className="form-group" value={this.state.position} onChange={this.changePositionHandler} />
                                    <label>Resume Link:</label>
                                    <input placeholder="Resume Link" name="resume_Link" className="form-group" value={this.state.resume_Link} onChange={this.changeAdditionalInfoHandler} />
                                    <label>Comment:</label>
                                    <input placeholder="Comment" name="comment" className="form-group" value={this.state.comment} onChange={this.changeCommentHandler} />
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