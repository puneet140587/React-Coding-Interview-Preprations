import React, { useState } from 'react';

const SwapListMultipleElement = () => {
  // State for the lists
  const [list1, setList1] = useState(['Apple', 'Banana', 'Cherry']);
  const [list2, setList2] = useState(['Xbox', 'PlayStation', 'Nintendo']);

  // State for checked items
  const [checkedItems, setCheckedItems] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    if (newCheckedItems.includes(index)) {
      // Item already checked, uncheck it
      newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
    } else {
      // Item not checked, check it
      newCheckedItems.push(index);
    }
    setCheckedItems(newCheckedItems);
  };

  // Handle swap button click
  const handleSwap = () => {
    const newList1 = [...list1];
    const newList2 = [...list2];

    // Swap checked items between lists
    checkedItems.forEach((index) => {
      const temp = newList1[index];
      newList1[index] = newList2[index];
      newList2[index] = temp;
    });

    setList1(newList1);
    setList2(newList2);
    setCheckedItems([]); // Reset checked items
  };

  return (
    <div>
      <div>
        <h2>List 1</h2>
        <ul>
          {list1.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={checkedItems.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>List 2</h2>
        <ul>
          {list2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
};

export default SwapListMultipleElement;
