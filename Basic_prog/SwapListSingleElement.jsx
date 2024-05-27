/* Create a component with a swap button & two list having different items wherein first list should have checkbox against its litem list.  upon checking the item from first list & clicking swap button, the item from first list should get swap with item of second list from same index ?  */

import React, { useState } from "react";

const SwapListSingleElement = () => {
  // State for the lists
  const [list1, setList1] = useState(["Apple", "Banana", "Cherry"]);
  const [list2, setList2] = useState(["Xbox", "PlayStation", "Nintendo"]);

  // State for selected items
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    setSelectedItem(index);
  };

  // Handle swap button click
  const handleSwap = () => {
    if (selectedItem !== null) {
      const temp = list1[selectedItem];
      list1[selectedItem] = list2[selectedItem];
      list2[selectedItem] = temp;
      setList1([...list1]);
      setList2([...list2]);
      setSelectedItem(null); // Reset selected item
    }
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
                checked={selectedItem === index}
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

export default SwapListSingleElement;
