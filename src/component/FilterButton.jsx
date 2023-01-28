import React from 'react';

export let keyWords = [];
export let chosenType = [];
export let chosenPrice = [];
export let chosenDistance = [];

//false 면 안 담겨 있는거, true 면 담겨있는거
let isKorean = false;
let isChinese = false; 
let isWestern = false;
let isJapanese = false;
let isBbun = false;

let isCheap = false;
let isMiddle = false;
let isExpensive = false;

let isClose = false;
let isDistanceMiddle = false;
let isFar= false;

const addKeyWord = (word) => {
  keyWords.push(word);
  console.log(keyWords);
} 

export const deleteAll = () => {
    keyWords = [];
    chosenType = [];
    chosenPrice = [];
    chosenDistance = [];
    isKorean = false;
    isChinese = false; 
    isJapanese = false;
    isBbun = false;
    
    isCheap = false;
    isMiddle = false;
    isExpensive = false;
    
    isClose = false;
    isDistanceMiddle = false;
    isFar= false;
}

const addType = (e) => {
  chosenType.push(e);
}

const deleteType = (word) => {
    chosenType = chosenType.filter(dummy => dummy !== word);
} 

const addPrice = (e) => {
  chosenPrice.push(e);
}

const deletePrice = (word) => {
    chosenPrice = chosenPrice.filter(dummy => dummy !== word);
}

const addDistance = (e) => {
  chosenDistance.push(e);
}

const deleteDistance = (word) => {
    chosenDistance = chosenDistance.filter(dummy => dummy !== word);
}

const deleteKeyWord = (word) => {
    keyWords = keyWords.filter(dummy => dummy !== word);
    console.log(keyWords);
}

const check = (e) =>{
    switch (e) {
        case "Korean":
            console.log(isKorean);
            if(isKorean){
                deleteKeyWord("한식");
                deleteType("한식");
            }
            else{
                addKeyWord("한식");
                addType("한식")
            }
            isKorean = !isKorean;
            break;
        case "Chinese":
            console.log(isChinese);
            if(isChinese){
                deleteKeyWord("중식");
                deleteType("중식")
            }
            else{
                addKeyWord("중식");
                addType("중식")
            }
            isChinese = !isChinese;
            break;
        case "Western":
            if(isWestern){
                deleteKeyWord("양식");
                deleteType("양식")
            }
            else{
                addKeyWord("양식");
                addType("양식");
            }
            isWestern = !isWestern;
            break;
        case "Bbun":
            if(isBbun){
                deleteKeyWord("분식");
                deleteType("분식");
            }
            else{
                addKeyWord("분식");
                addType("분식");
            }
            isBbun = !isBbun;
            break;
        case "Japanese":
            if(isJapanese){
                deleteKeyWord("일식");
                deleteType("일식");
            }
            else{
                addType("일식");
                addKeyWord("일식");
            }
            isJapanese = !isJapanese;
            break;
        case "Cheap":
            if(isCheap){
                deleteKeyWord("싸");
                deletePrice("싸");
            }
            else{
                addKeyWord("싸");
                addPrice("싸");
            }
            isCheap = !isCheap;
            break;
        case "Middle":
            if(isMiddle){
                deleteKeyWord("중간");
                deletePrice("중간");
            }
            else{
                addKeyWord("중간");
                addPrice("중간");
            }
            isMiddle = !isMiddle;
            break;
        case "Expensive":
            if(isExpensive){
                deleteKeyWord("비싸");
                deletePrice("비싸");
            }
            else{
                addKeyWord("비싸");
                addPrice("비싸");
            }
            isExpensive = !isExpensive;
            break;
        case "Close":
            if(isClose){
                deleteKeyWord("가까워");
                deleteDistance("가까워");
            }
            else{
                addKeyWord("가까워");
                addDistance("가까워");
            }
            isClose = !isClose;
            break;
        case "DistanceMiddle":
            if(isDistanceMiddle){
                deleteKeyWord("거리중간");
                deleteDistance("거리중간");
            }
            else{
                addKeyWord("거리중간");
                addDistance("거리중간");
            }
            isDistanceMiddle = !isDistanceMiddle;
            break;
        case "Far":
            if(isChinese){
                deleteKeyWord("멀어");
                deleteDistance("멀어");
            }
            else{
                addKeyWord("멀어");
                addDistance("멀어");
            }
            isFar = !isFar;
            break;
        default:
            break;
    }
}

const FilterButton = () => {
    return(
        <>
            <h2 className = "font-bold text-2xl text-center p-5">필터 (복수선택 가능)</h2>
            {/* 음식 종류 */}
            <div className="flex justify-center">
                <div className = "p-5">
                <input type="checkbox" id="korean" className="peer hidden"/>
                <label onClick = {() => {console.log("한식입력");check("Korean")}} htmlFor="korean" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    한식
                </label>
                </div>

                <div className = "p-5">        
                <input type="checkbox" id="chinese" className="peer hidden"/>  
                <label onClick = {() => {console.log("중식입력");check("Chinese")}} htmlFor="chinese" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                중식 
                </label>
                </div>

                <div className = "p-5">
                <input type="checkbox" id="western" className="peer hidden" />
                <label onClick = {() => {console.log("양식입력");check("Western")}} htmlFor="western" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    양식 
                </label>
                </div>

                <div className = "p-5">
                <input type="checkbox" id="japanese" className="peer hidden" />
                <label onClick = {() => {console.log("일식입력");check("Japanese")}} htmlFor="japanese" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    일식 
                </label>
                </div>

                <div className = "p-5">
                <input type="checkbox" id="bbun" className="peer hidden" />
                <label onClick = {() => {console.log("분식입력");check("Bbun")}} htmlFor="bbun" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    분식 
                </label>
                </div>
            </div>

            {/* 음식 가격 */}
            <div className ="flex justify-center">
                <div className = "p-5">
                <input type="checkbox" id="cheap" className="peer hidden" />
                <label onClick = {() => {console.log("싸ㅏ");check("Cheap")}} htmlFor="cheap" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    싸 
                </label>
                </div>
                <div className = "p-5">
                <input type="checkbox" id="middle" className="peer hidden" />
                <label onClick = {() => {console.log("중간ㄴ"); check("Middle")}} htmlFor="middle" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    적당해
                </label>
                </div>
                <div className = "p-5">
                <input type="checkbox" id="expensive" className="peer hidden" />
                <label onClick = {() => {console.log("비싸ㅏ");check("Expensive")}} htmlFor="expensive" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    비싸 
                </label>
                </div>
            </div>

            {/* 거리 */}
            <div className ="flex justify-center">
                <div className = "p-5">
                <input type="checkbox" id="close" className="peer hidden" />
                <label onClick = {() => {console.log("가까워ㅓ"); check("Close")}} htmlFor="close" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    가까워
                </label>
                </div>
                <div className = "p-5">
                <input type="checkbox" id="d-middle" className="peer hidden" />
                <label onClick = {() => {console.log("거리중간ㄴ");check("DistanceMiddle")}} htmlFor="d-middle" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    적당쓰
                </label>
                </div>
                <div className = "p-5">
                <input type="checkbox" id="far" className="peer hidden" />
                <label onClick = {() => {console.log("멀어ㅓ");check("Far")}} htmlFor="far" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
                    멀어
                </label>
                </div>
            </div>
        </>
    );
}

export default FilterButton;