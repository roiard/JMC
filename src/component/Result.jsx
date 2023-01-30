import React, { useState } from 'react';
import { deleteAll, result, ShowData } from './FilterButton';

// result 가 필터링된 음식점들이 있는 어레이.

const pickRandomItems = (array, count) => {
  count = count || 3;

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

const Result = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  //example use case
  const random = pickRandomItems(result);
  console.log('random: ', random);

  return (
    <>
      <ul>
        {result.map((dummy) => (
          <li key={dummy.Name}>{dummy.Name}</li>
        ))}
      </ul>
      <p className="py-7"></p>
      <div className="text-center text-2xl">
        <button
          onClick={() => {
            ShowData();
            setIsOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 p-7 text-white rounded-lg font-bold"
        >
          눌런
        </button>
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

            {/* 이 파트가 음식점들 보여주는거 */}
            <ul>
              {result.map((dummy) => (
                <li key={dummy.Name}>{dummy.Name}</li>
              ))}
            </ul>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    deleteAll();
                  }}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                >
                  닫기
                </button>
              </span>
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  onClick={() => setIsOpen2(true)}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                >
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
                          <h1 className="text-3xl leading-6 font-medium text-gray-900">000의 상세 페이지</h1>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                          onClick={() => setIsOpen2(false)}
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                        >
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
};

export default Result;
