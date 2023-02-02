import React, { useState } from 'react';
import { deleteAll, result, ShowData } from './FilterButton';
import { createPortal } from 'react-dom';
import ResultDetails from './ResultDetails';

// result 가 필터링된 음식점들이 있는 어레이.

let random = [];

const pickRandomItems = (array) => {
  let count = 1;

  if (array.length === 0) return [];
  if (array.length < count) return array;

  const isDuplicate = (array, target) => {
    return array.includes(target);
  };

  const res = [];
  for (let index = 0; index < count; ) {
    const random = Math.floor(Math.random() * array.length);
    const target = array[random];

    if (!isDuplicate(res, target)) {
      res.push(target);
      index++;
    }
  }

  return res;
};

const makeRandom = () => {
  // random = pickRandomItems(result);
};

function Result() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  //example use case
  // console.log('random: ', random);
  const random = [
    {
      Name: '아비코',
      Type: '중식',
      Price: '중간',
      Distance: '가까워',
      Tates: '평타',
    },
  ];

  return (
    <>
      <p className="py-7"></p>
      <div className="text-center text-2xl">
        <button
          onClick={() => {
            // ShowData();
            setIsOpen(true);
            // makeRandom();
          }}
          className="bg-blue-500 hover:bg-blue-700 p-7 text-white rounded-lg font-bold"
        >
          추천 받기
        </button>
        <p className="py-7"></p>
      </div>
      {isOpen &&
        createPortal(
          showDetails ? (
            <ResultDetails result={random} />
          ) : (
            <div className="relative w-screen h-screen">
              <div
                className="fixed inset-0 bg-[rgba(0,0,0,0.3)] w-full h-full flex justify-center items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <div className="w-4/5 bg-white py-8 rounded-lg overflow-hidden">
                  <div className="bg-indigo-500 p-10 mx-4 rounded-lg shadow-lg flex justify-center">
                    <h1 className="text-2xl font-bold leading-loose text-white lg:text-5xl">오늘의 저녁 메뉴는!</h1>
                  </div>

                  {/* 이 파트가 음식점들 보여주는거 */}

                  <ul className="flex items-center justify-center text-lg font-bold text-cool-gray-500">
                    {random.map((random) => (
                      <li key={random.Name} className="p-4">
                        <div className="flex flex-col justify-center items-center">
                          <div>{random.Name}</div>
                          <img src={random.Image} className="w-32 h-32 lg:w-48 lg:h-48" />

                          <button className="px-4 py-2 text-sm font-medium bg-gray-500 text-white rounded-lg mt-4">
                            상세 버튼
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 px-4 py-3 flex flex-col gap-4 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        deleteAll();
                        window.location.reload();
                      }}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                    >
                      닫기
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDetails(true);
                      }}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                    >
                      상세 페이지 열기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
          document.getElementById('modal-root'),
        )}
    </>
  );
}

export default Result;
