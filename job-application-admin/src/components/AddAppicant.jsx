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
            state:'',
            city:'',
            address:'',
            position:'',
            additional_Info:'',
            comment:'',
        }
        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler= this.changeLastNameHandler.bind(this)
        this.changeEmailHandler= this.changeEmailHandler.bind(this)
        this.changePhoneHandler= this.changePhoneHandler.bind(this)
        this.changeStateHandler= this.changeStateHandler.bind(this)
        this.changeCityHandler= this.changeCityHandler.bind(this)
        this.changeAddressHandler= this.changeAddressHandler.bind(this)
        this.changePositionHandler= this.changePositionHandler.bind(this)
        this.changeAdditionalInfoHandler= this.changeAdditionalInfoHandler.bind(this)
        this.changeCommentHandler= this.changeCommentHandler.bind(this)
        this.saveApplicant=this.saveApplicant.bind(this)
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler(event){
        this.setState({lastName: event.target.value})
    }
    changeEmailHandler(event){
        this.setState({e_mail: event.target.value})
    }
    changePhoneHandler(event){
        this.setState({phone: event.target.value})
    }
    changeStateHandler(event){
        this.setState({state: event.target.value})
    }
    changeCityHandler(event){
        this.setState({city: event.target.value})
    }
    changeAddressHandler(event){
        this.setState({address: event.target.value})
    }
    changePositionHandler(event){
        this.setState({position: event.target.value})
    }
    changeAdditionalInfoHandler(event){
        this.setState({additional_Info: event.target.value})
    }
    changeCommentHandler(event){
        this.setState({comment: event.target.value})
    }

    saveApplicant=(e)=>{
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
            additional_Info:this.state.additional_Info,
            comment:this.state.comment,
        }
        console.log(applicant)
        ApplicantService.addApplicant().then((res)=>{
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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-3 offset-md-3">
                        <h3>Job Application form</h3>
                        <div className="card-body"></div>
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
                                    <label>Additional Info:</label>
                                    <input placeholder="Additional Info" name="additional_Info" className="form-group" value={this.state.additional_Info} onChange={this.changeAdditionalInfoHandler} />
                                    <label>Comment:</label>
                                    <input placeholder="Comment" name="comment" className="form-group" value={this.state.comment} onChange={this.changeCommentHandler} />
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