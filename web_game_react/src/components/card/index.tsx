import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import { InventoryCardComponent } from './temp';

import { ListInventoryResponse } from '../../types/inventory'


import "./temp.css";

export const SingleMainComponent: FunctionComponent<ListInventoryResponse> = (props: ListInventoryResponse) =>
<div className="container cardmainbody">
    <div className="row">
        {
            props.list.map((item, index)=>{
                return(
                    <InventoryCardComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    createdAt={item.createdAt}
                    />
                );
            })    
        };
        
    </div>
</div>