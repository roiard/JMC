//이 컴포넌트에서 사용자가 고른 단어를 이용해 맞는 음식점들을 어레이 형태로 만들고 화면에 보여준다. 
//디자인 부분은 고쳐야 할 점 존재. (ex. 보여줄 음식점이 많아지면 닫기 버튼이 안보임)

/*
    로직 설명:
        사용자가 고른 단어를 하나의 어레이에 집어넣음(FilterButton.jsx). 그걸 Reulst.jsx로 가져와서 어떤 걸 골랐는지 하나하나 비교한 후, 새로운 어레이에 골라진 음식점들을 담음. 
        하드코딩 함. 이유는 ? 멀티 카테고리를 내가 아는 선에선 이 알고리즘이 최선이다. 한식 & 양식 & 중식 이렇게만 고른다거나, 싸 & 중간 이렇게만 고르면 편한데, 한식 & 양식 & 중식
        & 싸 & 중간 이런식으로 할려면 이 방법이 지금으로선 최선.. 데이터양이 많아서 버퍼링도 없음 (임우철 기준). 

        함수가 복잡하진 않음, 다 비슷한 코드, 변수때문에 여러개 만듦.
        음식점의 타입이 여러개일때 경우는 배제했음. 

*/

import React, {useState} from 'react';
import Data from '../data/data.json';
import { chosenType, chosenPrice, chosenDistance, keyWords, deleteAll} from './FilterButton';

const testAll = () => {
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Type) && keyWords.includes(restaurant.Distance) && keyWords.includes(restaurant.Price)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testTypeAndPrice = () => {
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Type) && keyWords.includes(restaurant.Price)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testPriceAndDistance = () =>{
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Price) && keyWords.includes(restaurant.Distance)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testTypeAndDistance = () =>{
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Type) && keyWords.includes(restaurant.Distance)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testType = () => {
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Type)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testPrice = () => {
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Price)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const testDistance = () => {
    let arr = [];
    for(const restaurant of Data.Restaurants){
        if(keyWords.includes(restaurant.Distance)){
            console.log(restaurant);
            arr.push(restaurant);
        }
    }
    return arr;
}

const ShowData = () => {
    let result = [];
    const isType = chosenType.length !== 0;
    const isPrice = chosenPrice.length !== 0;
    const isDistance = chosenDistance.length !== 0;

    if(isType && isPrice && isDistance){
        result = testAll();
    }
    else if(isType && isPrice && !isDistance){
        result = testTypeAndPrice();
    }
    else if(!isType && isPrice && isDistance){
        result = testPriceAndDistance();
    }
    else if(isType && !isPrice && isDistance){
        result = testTypeAndDistance();
    }
    else if(isType && !isPrice && !isDistance){
        result = testType();
    }
    else if(!isType && isPrice && !isDistance){
        result = testPrice();
    }
    else if(!isType && !isPrice && isDistance){
        result = testDistance();
    }

    if(result.length === 0){
        alert("맞는 음식점이 없음!");
        deleteAll();
    }

    return result;
}

const Result = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [resultArr, createArr] = useState([]);
    const makeResult = () => {
        createArr(ShowData());
    }

    return(
        <>
            <ul>
                {resultArr.map(dummy => (
                    <li key = {dummy.Name}>{dummy.Name}</li>
                ))}
            </ul>
            <p className="py-7"></p>
            <div className = "text-center text-2xl">
                <button onClick = {() => {makeResult(); setIsOpen(true)}} className="bg-blue-500 hover:bg-blue-700 p-7 text-white rounded-lg font-bold">눌런</button>
                <p className="py-7"></p>
            </div>
            {isOpen && (
                <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-80 sm:w-full sm:max-h-80 sm:h-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div className="mt-2"></div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            {resultArr.map(dummy => (
                                <li key = {dummy.Name}>{dummy.Name}</li>
                            ))}
                        </ul>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <button onClick={() => {setIsOpen(false); deleteAll()}} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                                    닫기
                                </button>
                            </span>
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                <button onClick={() => setIsOpen2(true)} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                                    상세 페이지 열기
                                </button>
                            </span>

                            {isOpen2 && (
                                <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                                    <div className="fixed inset-0 transition-opacity">
                                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                    </div>
                                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h1 className="text-3xl leading-6 font-medium text-gray-900">
                                                        000의 상세 페이지
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                                <button onClick={() => setIsOpen2(false)} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                                                    닫기
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Result;