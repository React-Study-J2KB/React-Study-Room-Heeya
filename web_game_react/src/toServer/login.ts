import axios, { AxiosPromise } from 'axios';

import { kUrl } from './type';
import { CreateUserRequest, LoginUserRequest } from '../types/user'


export function loginUserToServer(request: LoginUserRequest): AxiosPromise<any> {
    return axios.post(`${kUrl}/api/login`, request);
}

export function createUserToServer(request: CreateUserRequest): AxiosPromise<any> {
    return axios.post(`${kUrl}/api/users`, request); 
}