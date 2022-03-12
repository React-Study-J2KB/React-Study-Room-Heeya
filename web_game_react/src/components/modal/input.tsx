import React, { FunctionComponent } from 'react';

import { InventoryRegistProps } from '../../types/props'

import "./input.css";

export const InputModalComponent: FunctionComponent<InventoryRegistProps> = (props: InventoryRegistProps) =>
<div id="writer" className="modal">
    <div className="modal-content">
        <div className="modal-header">
            <h3 className="header-title">새로운 냉장고</h3>
            <div 
                className="close fa fa-close" 
                onClick={(event) => {
                    const writer: HTMLElement | null = document.getElementById('writer');
                
                    if (writer) {
                        writer.style.display = 'none';
                    }
                }}
            />    
        </div>
        <div className="modal-body">
            <h3>글쓰는 창</h3>
            <p className="name">
                <input 
                    type="text" 
                    className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
                    placeholder="제목" 
                    id="inventory_title"
                />
            </p>
            <p className="text">
                <textarea  
                    className="validate[required,length[6,300]] feedback-input" 
                    id="inventory_description" 
                    placeholder="내용"
                />
            </p>
            <div className="submit">
                <input 
                    type="submit" 
                    value="등록" 
                    id="button-blue"
                    onClick={props.InventoryRegistOnClickEvent}
                />
                <div className="ease" />
            </div>
        </div>
        <div className="modal-footer" />
    </div>
</div>