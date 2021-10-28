import { Link, useHistory } from 'react-router-dom'

const ManagerLogin = () => {
    const history = useHistory();

    function submit(){
        history.push('listapplicants');
    }

    return (
        <div className="card-body card col-md-3 offset-md-5" >
            <form id="form" onSubmit={submit}>
                <div className="form-group">
                    <input placeholder="User Name" type="text" /><br/>
                    <input placeholder="Password"type="text" />
                </div>
				<button onClick={submit} className="btn btn-success"> LogIn </button>
			</form>
        </div>
    )
}

export default ManagerLogin