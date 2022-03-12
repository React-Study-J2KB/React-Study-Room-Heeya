import React from 'react';

import { SingleMainComponent } from '../components/card/index'
import { LandingContainer } from './landing';
import { isLoginUser } from '../lib/userUtil'

import { NavbarComponent } from '../components/navbar'
import { FooterComponent } from '../components/footer';
import { InputInventoryComponent } from '../components/input/inventory'
import { InputModalComponent } from '../components/modal/input'

import { getInventoryListByUserId, createInventory } from '../toServer/inventory'
import { CreateInventoryRequest, ListInventoryResponse, InventoryResponse } from '../types/inventory'


export class IndexContainer extends React.Component<{}, ListInventoryResponse> {
    
    constructor(props: {}) {
        super(props)

        this.state = {
            list: []
        }

        this.InventoryRegistOnClickEvent = this.InventoryRegistOnClickEvent.bind(this);
    }
    
    public componentDidMount(): void {
        
        if (false == isLoginUser()) {
            return;
        }

        getInventoryListByUserId()
        .then(response => {
            
            const size: Number = response.data.length;
            let tempList: InventoryResponse[] = [];

            for(let i = 0; i < size; ++i) {
                
                const inventoryResponse: InventoryResponse = {
                    id: response.data[i].id,
                    title: response.data[i].title,
                    description: response.data[i].description,
                    createdAt: response.data[i].created_at
                }

                tempList.push(inventoryResponse);
            }

            this.setState({
                list: tempList
            })
        })
        .catch(error => window.console.error(error));
    }

    public InventoryRegistOnClickEvent(event: MouseEvent): void {
        event.preventDefault();

        const inputTitle : string = (document.getElementById("inventory_title") as HTMLInputElement).value;
        const inputDescription: string = (document.getElementById("inventory_description") as HTMLInputElement).value;

        const request: CreateInventoryRequest = {title: inputTitle, description: inputDescription};

        createInventory(request)
        .then(response => {

            const inventoryResponse: InventoryResponse = {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                createdAt: response.data.created_at
            }

            this.setState(state => {
                const list = state.list.push(inventoryResponse);
            })

            window.location.reload()          
        })
        .catch(error => window.console.log(error))
    }
    
    public render(): React.ReactNode {
        if (false === isLoginUser()) {
            return (<LandingContainer/>);
        }
        else {
            return (
                <div>
                    <NavbarComponent/>
                    <SingleMainComponent
                    list={this.state.list}/>
                    <InputInventoryComponent/>
                    <InputModalComponent
                    InventoryRegistOnClickEvent={this.InventoryRegistOnClickEvent}/>
                    <FooterComponent/>
                </div>
            );
        }
    }
}