import React from "react";
import Gender from "./Gender";
import Speices from "./Speices";
import Status from "./Status";

const Filter = ({ updateStatus, updateGender, updateSpeices, updatePageNumber }) => {
    const clearFilters = () => {
        updateStatus("");
        updateGender("");
        updateSpeices("");
        updatePageNumber(1);
    };

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
                style={{ cursor: "pointer" }} 
                onClick={clearFilters}
                className="text-primary text-decoration-underline text-center mb-3"
            >
                Clear Filters
            </div>
            <div className="accordion" id="accordionExample">
                <Status updateStatus={updateStatus} updatePageNumber={updatePageNumber} />
                <Speices updateSpecies={updateSpeices} updatePageNumber={updatePageNumber} />
                <Gender updateGender={updateGender} updatePageNumber={updatePageNumber} />
            </div>
        </div>
    );
};

export default Filter;
