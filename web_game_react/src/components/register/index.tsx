import React, { FunctionComponent } from 'react';
import { UserRegistProps } from '../../types/props'

import "../login/index.css"

export const UserRegistComponent: FunctionComponent<UserRegistProps> = (props: UserRegistProps) => 
<div className="container">
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
                <div className="card-body">
                    <h2 className="card-title text-center">Regist</h2>
                    <p className="text-center">제목</p>
                    <form className="form-signin">
                        <div className="form-label-group">
                            <input type="email"  id="inputEmail" className="form-control"/>
                            <label htmlFor="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input type="text"  id="inputuserId" className="form-control"/>
                            <label htmlFor="inputuserId">user ID</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control"/>
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPasswordConfirm" className="form-control"/>
                            <label htmlFor="inputPasswordConfirm">Password Confirm</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={props.UserRegistOnClickEvent} type="submit">Register</button>
                        <hr className="my-4"/>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>