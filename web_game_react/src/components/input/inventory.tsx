import React, { FunctionComponent } from 'react';

import { EmptyProps } from '../../types/props'

export const InputInventoryComponent: FunctionComponent<EmptyProps> = ({}) =>
<div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="../images/app_logo.png" alt="" width="72" height="57"/>
    <h1 className="display-5 fw-bold">본인만의</h1>
    <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">냉장고 생성</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3"onClick={(event) => {
                    const writer: HTMLElement | null = document.getElementById('writer');
                    if (writer) {
                        writer.style.display = 'block';
                    }
                }}>여기클릭</button>
        </div>
    </div>
</div>
