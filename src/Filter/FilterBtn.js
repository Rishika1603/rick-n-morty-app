import React from "react";

const FilterBtn = ({ input, task, updatePageNumber, index, name }) => {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                id={`${name}-${index}`}
                onChange={() => {
                    task(input);
                    updatePageNumber(1);
                }}
            />
            <label
                className="btn btn-outline-primary"
                htmlFor={`${name}-${index}`}
            >
                {input}
            </label>
        </div>
    );
};

export default FilterBtn;
