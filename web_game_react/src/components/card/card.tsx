import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'


export const ItemCardComponent: FunctionComponent<EmptyProps> = ({}) =>
<div className="card card-box"> 
    <div className="textSection">
        <div className="_title">
            냉장고재료 제목
        </div>
        <p>
            냉장고재료 내용
        </p>
        <div className="tooltipSection">
            <div className="_tooltip">퍼센트%</div>
        <div className="progress">
            <div className="determinate" /*style={innerWidth: "70%"}*/>
        </div>
    </div>
    <div className="progressBottomTxt">
        <div className="_left">
            시작 : <span>2021-01-08</span>
        </div>
        <div className="_right">
            마감 : <span>2021-01-10</span>
        </div>
        </div>
            <button className="btnDonate">자세히 보기</button>
        </div>
    </div>
</div>