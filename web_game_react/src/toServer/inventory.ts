import axios, { AxiosPromise } from 'axios';

import { kUrl } from './type';

import { CreateInventoryRequest } from '../types/inventory'
import { addQueryStringToken } from './type'

export function createInventory(request: CreateInventoryRequest): AxiosPromise<any> {
    
    const url: string = addQueryStringToken(`${kUrl}/api/inventory`);
    
    return axios.post(url, request); 
}

export function getInventoryListByUserId(): AxiosPromise<any> {
    
    const url: string = addQueryStringToken(`${kUrl}/api/inventory`);
    
    return axios.get(url); 
}