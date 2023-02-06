import React, { useState } from 'react';
import Data from '../data/data.json';
import Result from './Result';

let keyWords = [];
let chosenType = [];
let chosenPrice = [];
let chosenDistance = [];
export let result = [];

let states = {};
//필터링 할 단어 담는 코드

const test = (e) => {
  getState(e);
  if (states[e.target.id]) {
    pushKeyword(e.target.id);
    pushEach(e.target.id);
    states[e.target.id] = false;
  } else {
    popKeyword(e.target.id);
    popEach(e.target.id);
    states[e.target.id] = true;
  }
  console.log(keyWords);
};

const getState = (e) => {
  const { id, checked } = e.target;
  states[id] = checked;
  console.log('getStateWorks');
  console.log(states);
};

const pushKeyword = (word) => {
  keyWords.push(word);
};

const popKeyword = (word) => {
  keyWords = keyWords.filter((dummy) => dummy !== word);
};

const pushEach = (word) => {
  if (['한식', '중식', '일식', '양식', '분식'].includes(word)) {
    chosenType.push(word);
  } else if (['싸', '중간', '비싸'].includes(word)) {
    chosenPrice.push(word);
  } else {
    chosenDistance.push(word);
  }
};

const popEach = (word) => {
  if (['한식', '중식', '일식', '양식', '분식'].includes(word)) {
    chosenType = chosenType.filter((dummy) => dummy !== word);
  } else if (['싸', '중간', '비싸'].includes(word)) {
    chosenPrice = chosenPrice.filter((dummy) => dummy !== word);
  } else {
    chosenDistance = chosenDistance.filter((dummy) => dummy !== word);
  }
};

export const deleteAll = () => {
  result = [];
  keyWords = [];
  chosenType = [];
  chosenPrice = [];
  chosenDistance = [];
  Object.keys(states).forEach((key) => {
    states[key] = false;
  });
  console.log(states);
  // 상태 다 false 로 바꾸기
};

//여기서 부터 필터링
const testAll = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (
      keyWords.includes(restaurant.Type) &&
      keyWords.includes(restaurant.Distance) &&
      keyWords.includes(restaurant.Price)
    ) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testTypeAndPrice = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Type) && keyWords.includes(restaurant.Price)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testPriceAndDistance = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Price) && keyWords.includes(restaurant.Distance)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testTypeAndDistance = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Type) && keyWords.includes(restaurant.Distance)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testType = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Type)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testPrice = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Price)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

const testDistance = () => {
  let arr = [];
  for (const restaurant of Data.Restaurants) {
    if (keyWords.includes(restaurant.Distance)) {
      console.log(restaurant);
      arr.push(restaurant);
    }
  }
  return arr;
};

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
  return pickRandomItems(result);
};

function FilterButton() {
  const typeChecklist = [
    {
      name: '한식',
      checked: false,
    },
    {
      name: '중식',
      checked: false,
    },
    {
      name: '양식',
      checked: false,
    },
    {
      name: '일식',
      checked: false,
    },
    {
      name: '분식',
      checked: false,
    },
  ];
  const priceChecklist = [
    {
      name: '싸',
      checked: false,
    },
    {
      name: '중간',
      checked: false,
    },
    {
      name: '비싸',
      checked: false,
    },
  ];
  const distanceChecklist = [
    {
      name: '가까워',
      checked: false,
    },
    {
      name: '거리중간',
      checked: false,
    },
    {
      name: '멀어',
      checked: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [checkList, setCheckList] = useState({
    type: typeChecklist,
    price: priceChecklist,
    distance: distanceChecklist,
  });

  function handleClose() {
    setCheckList((prev) => {
      return {
        type: typeChecklist,
        price: priceChecklist,
        distance: distanceChecklist,
      };
    });
  }

  const handleChange = (e, target) => {
    console.log(target);
    const statusCopy = Object.assign({}, checkList);
    statusCopy[target].forEach((item) => {
      if (item.name === e.target.id) item.checked = e.target.checked;
    });
    setCheckList(statusCopy);
  };

  const showData = () => {
    const isType = chosenType.length !== 0;
    const isPrice = chosenPrice.length !== 0;
    const isDistance = chosenDistance.length !== 0;

    if (isType && isPrice && isDistance) {
      result = testAll();
    } else if (isType && isPrice && !isDistance) {
      result = testTypeAndPrice();
    } else if (!isType && isPrice && isDistance) {
      result = testPriceAndDistance();
    } else if (isType && !isPrice && isDistance) {
      result = testTypeAndDistance();
    } else if (isType && !isPrice && !isDistance) {
      result = testType();
    } else if (!isType && isPrice && !isDistance) {
      result = testPrice();
    } else if (!isType && !isPrice && isDistance) {
      result = testDistance();
    }

    if (result.length === 0) {
      alert('맞는 음식점이 없음!');
      deleteAll();
      handleClose();
      setIsOpen(false);
    }
    return result;
  };

  return (
    <main className="mt-16">
      <div className="text-center text-2xl">
        <button
          onClick={() => {
            showData().length > 0 ? setIsOpen(true) : undefined;
          }}
          className="bg-blue-500 hover:bg-blue-700 p-7 text-white rounded-lg font-bold"
        >
          추천 받기
        </button>
      </div>
      <h2 className="font-bold text-2xl text-center p-5">필터 (복수선택 가능)</h2>

      <div
        className="p-2 flex flex-wrap justify-center border-b border-gray-400"
        id="type"
        onChange={(e) => {
          const target = e.currentTarget.id;
          handleChange(e, target);
        }}
      >
        {checkList.type.map((item, index) => {
          return (
            <div key={index} className="p-5">
              <input type="checkbox" id={item.name} className="peer hidden" checked={item.checked} onClick={test} />
              <label
                htmlFor={item.name}
                className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 "
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      <div
        className="p-2 flex flex-wrap justify-center border-b border-gray-400"
        id="price"
        onChange={(e) => {
          const target = e.currentTarget.id;
          handleChange(e, target);
        }}
      >
        {checkList.price.map((item, index) => {
          return (
            <div key={index} className="p-5">
              <input
                type="checkbox"
                id={item.name}
                className="peer hidden"
                checked={item.checked}
                onClick={(e) => test(e)}
              />
              <label
                htmlFor={item.name}
                className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 "
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      <div
        className="p-2 flex flex-wrap justify-center border-b border-gray-400"
        id="distance"
        onChange={(e) => {
          const target = e.currentTarget.id;
          handleChange(e, target);
        }}
      >
        {checkList.distance.map((item, index) => {
          return (
            <div key={index} className="p-5">
              <input type="checkbox" id={item.name} className="peer hidden" checked={item.checked} onClick={test} />
              <label
                htmlFor={item.name}
                className="button peer-checked:bg-blue-500 peer-checked:text-blue-900 peer-checked:border-blue-500 "
              >
                {item.name}
              </label>
            </div>
          );
        })}
      </div>
      {isOpen && <Result setIsOpen={setIsOpen} handleClose={handleClose} result={makeRandom()} />}
    </main>
  );
}

export default FilterButton;
