import React from 'react';
import {random} from './Result';

let name;
let distance = "준비중";
let price = "준비중";
let main = "미정";

const ResChar = (random) => {
  let restaurant = random[0];

  name = restaurant.Name;
  price = restaurant.Price;
  console.log(name, distance, price);

  if(restaurant.distance === "가까워"){
      distance = "가깝습니다 (약 도보 10분 이내)";
  }
  else if(restaurant.distance === "거리중간"){
    distance = "적당합니다 (약 도보 15분 이상)";
  }
  else{
    distance = "멀어요 (약 도보 20분 이상)";
  }

  if(restaurant.Price === "싸"){
    price = "가성비! (약 만원이내)";
  }
  else if(restaurant.Price === "중간"){
    price = "적당힙니다 (약 만원대)";
  }
  else{
    price = "가격대가 있습니다 (만원대 or 그 이상)";
  }
}

const ResultDetail = () => {
    return(
    <>
        <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-80 sm:w-full sm:max-h-80 sm:h-full" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="justify-center flex bg-indigo-500 text-white p-1 rounded-lg shadow-lg container mx-auto">
                            <h1 className="text-3xl text-center font-medium font-bold leading-normal">뽑힌 메뉴들의 상세 페이지</h1>
                        </div>
                    </div>
                    <p className="py-5"></p>
                    <div className = "justify-center flex">
                        <h2 className = " text-center font-bold text-2xl font-medium">{name}</h2>
                    </div>
                    <div className = "justify-center flex">
                        <h2 className = " text-center font-bold text-2xl font-medium">거리: {distance}</h2>
                    </div>
                    <div className = "justify-center flex">
                        <h2 className = "text-center font-bold text-2xl font-medium">가격: {price}</h2>
                    </div>
                    <div className = "justify-center flex">
                        <h2 className = "text-center font-bold text-2xl font-medium">대표메뉴: {main}</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ResultDetail;