import React from "react";

import CustomCard from "../utils/customCard/customCard";
import CustomButton from "../utils/customButton/customButton";
import CustomSelect from "../utils/customSelect/customSelect";

const Converter = () => {
    return (
      <div>
        <CustomCard className="main-card">
            <input />
          <CustomSelect name="From" placeholder="From Currency" />
          <CustomSelect name="To" placeholder="To Currency" />
          <CustomButton name=" Convert "/> 
        </CustomCard>
      </div>
    );
}

export default Converter