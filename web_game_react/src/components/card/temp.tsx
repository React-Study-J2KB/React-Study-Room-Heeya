import React, { FunctionComponent } from 'react';

import { InventoryResponse } from '../../types/inventory'

export const InventoryCardComponent: FunctionComponent<InventoryResponse> = (props: InventoryResponse) =>
<div className="col-sm-4">
    <div className="card">
        <img src="../images/Component.png" className="card-img-top fridgement" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href="/" className="btn btn-primary">자세히 보기</a>
        </div>
    </div>
</div>