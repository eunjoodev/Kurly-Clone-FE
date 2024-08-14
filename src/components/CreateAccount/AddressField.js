import React from "react";

const AddressField = ({ label, name, type, value, handleAddressSearch }) => {
  return (
    <div className="flex w-w2 py-2.5 px-5 text-sm">
      <div className="inline-block w-w6 mt-4">
        <label className="text-darkGray font-medium">{label}</label>
        <span className="text-red">*</span>
      </div>
      <div className="inline-block">
        {value ? (
          <div>
            <input
              className="border border-lightGray focus:outline w-w3 h-h1 pl-3.5 rounded text-base placeholder-middleGray"
              name={name}
              type={type}
              value={value}
              readOnly
              required
            />
            <div className="inline-block ml-2">
              <button
                type="button"
                onClick={handleAddressSearch}
                className="w-w4 h-h2 border font-medium border-purple text-purple rounded"
              >
                재검색
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleAddressSearch}
            className="w-w3 h-h1 border font-medium border-purple text-purple rounded"
          >
            주소검색
          </button>
        )}
        <div className="w-w7 h-h3 py-2.5 text-middleGray text-xs">
          배송지에 따라 상품 정보가 달라질 수 있습니다
        </div>
      </div>
    </div>
  );
};

export default AddressField;
