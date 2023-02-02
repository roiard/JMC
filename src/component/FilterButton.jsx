import React from 'react';
import { useState } from 'react';
import Data from '../data/data.json';

let keyWords = [];
let chosenType = [];
let chosenPrice = [];
let chosenDistance = [];
export let result = [];

let states = {};

//필터링 할 단어 담는 코드

const test = (e) => {
    getState(e);
    if(states[e.target.id]){
        pushKeyword(e.target.id);
        pushEach(e.target.id);
        states[e.target.id] = false;
    }
    else{
        popKeyword(e.target.id);
        popEach(e.target.id);
        states[e.target.id] = true;
    }
    console.log(keyWords);
}

const getState = (e) => {
    const {id, checked} = e.target;
    states[id] = checked;
    console.log("getStateWorks");
    console.log(states);
}

const pushKeyword = (word) => {
    keyWords.push(word);
}

const popKeyword = (word) => {
    keyWords = keyWords.filter(dummy => dummy !== word);
}

const pushEach = (word) => {
    if(["한식", "중식", "일식", "양식", "분식"].includes(word)){
        chosenType.push(word);
    }
    else if(["싸", "중간", "비싸"].includes(word)){
        chosenPrice.push(word);
    }
    else{
        chosenDistance.push(word);
    }
}

const popEach = (word) => {
    if(["한식", "중식", "일식", "양식", "분식"].includes(word)){
        chosenType = chosenType.filter(dummy => dummy !== word);
    }
    else if(["싸", "중간", "비싸"].includes(word)){
        chosenPrice = chosenPrice.filter(dummy => dummy !== word);
    }
    else{
        chosenDistance = chosenDistance.filter(dummy => dummy !== word);
    }
}

export const deleteAll = () => {
    result = [];
    keyWords = [];
    chosenType = [];
    chosenPrice = [];
    chosenDistance = [];
    Object.keys(states).forEach(key => {
        states[key] = false;
    });
    console.log(states);
    // 상태 다 false 로 바꾸기
}

//여기서 부터 필터링 
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

export const ShowData = () => {
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
        location.reload();
    }
    return result;
}

const FilterButton = () => {
    
    return(
        <>
            <h2 className = "font-bold text-2xl text-center p-5">필터 (복수선택 가능)</h2>
            {/* 음식 종류 */}
            <div className="p-2 flex flex-wrap justify-center border-b border-gray-400">
                <div className = "p-5">
                <input onClick = {(e) => {console.log(e);test(e)}} type="checkbox" id="한식" className="peer hidden"/>
                <label htmlFor="한식" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    한식
                </label>
                </div>

                <div className = "p-5">        
                <input onClick = {(e) => {console.log("중식입력");test(e)}} type="checkbox" id="중식" className="peer hidden"/>  
                <label htmlFor="중식" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                중식
                </label>
                </div>

                <div className = "p-5">
                <input  onClick = {(e) => {console.log("양식입력");test(e)}} type="checkbox" id="양식" className="peer hidden" />
                <label  htmlFor="양식" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    양식 
                </label>
                </div>

                <div className = "p-5">
                <input  onClick = {(e) => {console.log("일식입력");test(e)}} type="checkbox" id="일식" className="peer hidden" />
                <label htmlFor="일식" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    일식 
                </label>
                </div>

                <div className = "p-5"> 
                <input onClick = {(e) => {console.log("분식입력");test(e)}} type="checkbox" id="분식" className="peer hidden" />
                <label htmlFor="분식" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    분식 
                </label>
                </div>
            </div>

            {/* 음식 가격 */}
            <div className ="p-2 flex flex-wrap justify-center border-b border-gray-400">
                <div className = "p-5">
                <input onClick = {(e) => {console.log("싸ㅏ");test(e)}} type="checkbox" id="싸" className="peer hidden" />
                <label htmlFor="싸" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    싸 
                </label>
                </div>
                <div className = "p-5">
                <input onClick = {(e) => {console.log("중간ㄴ");test(e)}} type="checkbox" id="중간" className="peer hidden" />
                <label htmlFor="중간" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    적당해
                </label>
                </div>
                <div className = "p-5">
                <input onClick = {(e) => {console.log("비싸ㅏ");test(e)}} type="checkbox" id="비싸" className="peer hidden" />
                <label htmlFor="비싸" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    비싸 
                </label>
                </div>
            </div>

            {/* 거리 */}
            <div className ="p-2 flex flex-wrap justify-center">
                <div className = "p-5">
                <input onClick = {(e) => {console.log("가까워ㅓ"); test(e)}} type="checkbox" id="가까워" className="peer hidden" />
                <label htmlFor="가까워" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    가까워
                </label>
                </div>
                <div className = "p-5">
                <input onClick = {(e) => {console.log("거리중간ㄴ");test(e)}} type="checkbox" id="거리중간" className="peer hidden" />
                <label htmlFor="거리중간" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    적당해
                </label>
                </div>
                <div className = "p-5">
                <input onClick = {(e) => {console.log("멀어ㅓ"); test(e)}} type="checkbox" id="멀어" className="peer hidden" />
                <label htmlFor="멀어" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    멀어
                </label>
                </div>
            </div>
        </>
    );
}

export default FilterButton;