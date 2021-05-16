import React from 'react'
import {AvField, AvForm} from 'availity-reactstrap-validation'

import {connect} from "react-redux"
import {signIn} from "../redux/actions/loginAction"
const Login = (props) =>{
    return(
        <div>
            <div className="login">
                <div className="col-4 offset-4 py-5">
                    <div className="card ">
                        <div className="card-body">
                            <AvForm onValidSubmit={props.signIn}>
                                <AvField name="phoneNumber" type="text" label="Phone number" required errorMessage="Telefon raqam majburiy" />
                                <AvField name="password" type="password" label="Password" required errorMessage="Parolni kiriting" />
                                <button type="submit" className="btn btn-block btn-success">Login</button>
                            </AvForm>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export  default connect(null, {signIn})(Login)