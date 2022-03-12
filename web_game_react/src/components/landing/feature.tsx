import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import './index.css'

export const LandingFeatureComponent: FunctionComponent<EmptyProps> = ({}) =>
<section id="features">
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="">
                <div className="container-fluid px-5">
                    <div className="row gx-5">
                        <div className="col-md-6 mb-5">
                            <div className="text-center">
                                <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                <h3 className="font-alt">냉장고 한 눈에 보기</h3>
                                <p className="text-muted mb-0">냉장고에 추가한 식재료를 카테고리별로 볼 수 있고 아이콘 선택 시 바로 리스트로 볼 수 있습니다. 유통기한이 임박한 재료는 빨갛게 표시돼요</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className="text-center">
                                <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                <h3 className="font-alt">냉장고 추가</h3>
                                <p className="text-muted mb-0">일반 냉장고, 김치 냉장고, 혹은 캠핑갈 때 아이스박스까지. 관리할 냉장고가 많다면 손쉽게 냉장고를 추가하여 냉장고 별로 각각 관리할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <div className="text-center">
                                <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                <h3 className="font-alt">냉장고 공유하기</h3>
                                <p className="text-muted mb-0">친구의 냉장고가 궁금하다면 냉장고를 공유해보세요. 친구의 냉장고를 보기만 하거나, 혹은 직접 관리해줄 수 있답니다.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                <h3 className="font-alt">냉장고 리스트</h3>
                                <p className="text-muted mb-0">냉장고를 리스트 형식으로 볼 수 있습니다. 어떤 종류인지, 어디에 보관했는지, 유통기한이 얼마나 남았는지 볼 수 있습니다. 편하게 식재료를 추가/수정할 수도 있어요!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

//col-lg-8 order-lg-1 mb-5 mb-lg-0