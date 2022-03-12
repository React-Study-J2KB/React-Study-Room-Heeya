import React from 'react';

import { LoginComponent } from '../components/login';
import { LoginUserRequest } from '../types/user';
import { loginUserToServer } from '../toServer/login'
import { setLoginTokenAndRedirect } from '../lib/userUtil';

export class LoginContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);

        this.LoginOnClickEvent = this.LoginOnClickEvent.bind(this);
    }

    public componentDidMount(): void {

    }

    public LoginOnClickEvent(event: MouseEvent): void {
        event.preventDefault();

        const inputEmail : string = (document.getElementById("inputEmail") as HTMLInputElement).value;
        const inputPassword: string = (document.getElementById("inputPassword") as HTMLInputElement).value;

        const request: LoginUserRequest = {email: inputEmail, password: inputPassword};

        loginUserToServer(request)
        .then(response => {
           const loginToken = response.data;

           setLoginTokenAndRedirect(loginToken);
        })
        .catch(error => window.console.error(error));
        
    }

    public render(): React.ReactNode {
        return(
            <div>
                <LoginComponent
                LoginOnClickEvent={this.LoginOnClickEvent}/>
            </div>
        );
    }
}