import React from 'react';

import { UserRegistComponent } from '../components/register';
import { CreateUserRequest, LoginUserRequest } from '../types/user';
import { createUserToServer, loginUserToServer } from '../toServer/login';
import { setLoginTokenAndRedirect } from '../lib/userUtil';

export class UserRegistContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);

        this.UserRegistOnClickEvent = this.UserRegistOnClickEvent.bind(this);
    }

    private UserRegistOnClickEvent(event: Event): void {
        event.preventDefault()

        const inputEmail : string = (document.getElementById("inputEmail") as HTMLInputElement).value;
        const inputUserId : string = (document.getElementById("inputuserId") as HTMLInputElement).value;
        const inputPassword: string = (document.getElementById("inputPassword") as HTMLInputElement).value;
        const inputPasswordConfirm: string = (document.getElementById("inputPasswordConfirm") as HTMLInputElement).value;


        if (inputPassword !== inputPasswordConfirm)
        {
            window.alert("패스워드가 일치하지 않네요");
            return;
        }

        const createUserRequest: CreateUserRequest = {email: inputEmail, nickname: inputUserId, password: inputPassword};
        createUserToServer(createUserRequest)
        .then(response => {
            
            const request: LoginUserRequest = {email: response.data.email, password: inputPassword};
            
            loginUserToServer(request)
            .then(response => {
            const loginToken = response.data;

            setLoginTokenAndRedirect(loginToken);
            })
            .catch(error => window.console.error(error));
        })
        .catch(error => window.console.error(error));
    }

    public render(): React.ReactNode {
        return(
            <div>
                <UserRegistComponent
                UserRegistOnClickEvent={this.UserRegistOnClickEvent}/>
            </div>
        );
    }
}