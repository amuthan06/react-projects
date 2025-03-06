import React, { useState } from "react";
import data from "./data";

export default function Accordiant() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiSelectedItems, setMultiSelectedItems] = useState([]);

  const handleSingleClick = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  const handleMultiSelect = (value) => {
    setSelected(null);
    setMultiSelectedItems([]);
    setMultiSelect(value);
  };

  const handleMultipleClick = (id) => {
    if (!multiSelectedItems.includes(id)) {
      setMultiSelectedItems([...multiSelectedItems, id]);
    } else {
      const newSelected = multiSelectedItems.filter((e) => e !== id);
      setMultiSelectedItems(newSelected);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => {
            handleMultiSelect(!multiSelect);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
        >
          {multiSelect ? "Switch to Single Select" : "Enable Multi-Select"}
        </button>
      </div>

      {/* Accordion Container */}
      <div className="border border-gray-300 rounded-lg shadow-lg bg-white">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="border-b last:border-b-0">
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all"
                onClick={
                  multiSelect
                    ? () => handleMultipleClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {dataItem.title}
                </h3>
              </div>

              {/* Accordion Content */}
              <div className="ml-4 p-4 text-gray-700">
                {multiSelect ? (
                  multiSelectedItems.includes(dataItem.id) ? (
                    <p>{dataItem.description}</p>
                  ) : null
                ) : selected === dataItem.id ? (
                  <p>{dataItem.description}</p>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-600">No data found</div>
        )}
      </div>
    </div>
  );
}
