import './App.css';
import React, { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div>

      <nav className="bg-gray-800 p-6">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <a href="#" className="text-white font-bold text-xl">
                  저메추 V.0.0
                </a>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-white mr-4">
                  Home
                </a>
                <a href="#" className="text-white mr-4">
                  About
                </a>
                <a href="#" className="text-white">
                  Contact
                </a>
              </div>
            </div>
          </nav>

      <header className="bg-gray-100 text-black text-center py-12">
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium font-bold leading-loose">오늘의 저녁 메뉴는?</h1>
        </div>
      </header>
      <p className="py-7"></p>

      <div className = "text-center text-2xl">
        <button className="bg-blue-500 hover:bg-blue-700 p-7 text-white rounded-lg font-bold" onClick={() => setIsOpen(true)}>
        추천 받기!
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
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h1 className="text-3xl leading-6 font-medium text-gray-900">
                    오늘의 저녁은 000 입니다
                  </h1>
                  <div className="mt-2">
                    <img src= {"https://cdn-icons-png.flaticon.com/512/2927/2927347.png"} alt="image description" className="mx-auto w-40 h-40 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button onClick={() => setIsOpen(false)} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
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
                          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h1 className="text-3xl leading-6 font-medium text-gray-900">
                              000의 상세 페이지
                            </h1>
                            <div className="mt-2">
                              <img src= {"https://cdn-icons-png.flaticon.com/512/2927/2927347.png"} alt="image description" className="mx-auto w-40 h-40 rounded-md" />
                            </div>
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


      <h2 className = "font-bold text-2xl text-center p-5">필터 (복수선택 가능)</h2>

      {/* 음식 종류 */}
      <div className="flex justify-center">
        <div className = "p-5">
          <input type="checkbox" id="korean" className="peer hidden" />
          <label htmlFor="korean" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            한식 
          </label>
        </div>

        <div className = "p-5">          
          <input type="checkbox" id="chinese" className="peer hidden" />
          <label htmlFor="chinese" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
          중식 
          </label>
        </div>

        <div className = "p-5">
          <input type="checkbox" id="western" className="peer hidden" />
          <label htmlFor="western" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            양식 
          </label>
        </div>

        <div className = "p-5">
          <input type="checkbox" id="japanese" className="peer hidden" />
          <label htmlFor="japanese" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            일식 
          </label>
        </div>

        <div className = "p-5">
          <input type="checkbox" id="bbun" className="peer hidden" />
          <label htmlFor="bbun" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            분식 
          </label>
        </div>
      </div>

      {/* 음식 가격 */}
      <div className ="flex justify-center">
        <div className = "p-5">
          <input type="checkbox" id="cheap" className="peer hidden" />
          <label htmlFor="cheap" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            싸 
          </label>
        </div>
        <div className = "p-5">
          <input type="checkbox" id="middle" className="peer hidden" />
          <label htmlFor="middle" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            적당해
          </label>
        </div>
        <div className = "p-5">
          <input type="checkbox" id="expensive" className="peer hidden" />
          <label htmlFor="expensive" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            비싸 
          </label>
        </div>
      </div>

      {/* 거리 */}
      <div className ="flex justify-center">
        <div className = "p-5">
          <input type="checkbox" id="close" className="peer hidden" />
          <label htmlFor="close" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            가까워
          </label>
        </div>
        <div className = "p-5">
          <input type="checkbox" id="d-middle" className="peer hidden" />
          <label htmlFor="d-middle" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            적당쓰
          </label>
        </div>
        <div className = "p-5">
          <input type="checkbox" id="far" className="peer hidden" />
          <label htmlFor="far" className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 ">
            멀어
          </label>
        </div>
      </div>
  </div>
  );
}

export default App;
