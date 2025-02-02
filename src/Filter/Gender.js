import React from "react";
import FilterBtn from "./FilterBtn"; // Check the path

const Gender = ({ updateGender, updatePageNumber }) => {
    const genders = ["female", "male", "genderless", "unknown"];
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                >
                    Gender
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genders.map((item, index) => (
                        <FilterBtn
                            name="gender"
                            index={index}
                            key={index}
                            updatePageNumber={updatePageNumber}
                            task={updateGender}
                            input={item} // Fixed the variable name here
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gender; // Make sure to export the component
