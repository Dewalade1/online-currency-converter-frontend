import React, {useState} from "react";

import CustomCard from "../utils/customCard/customCard";
import CustomButton from "../utils/customButton/customButton";
import CustomSelect from "../utils/customSelect/customSelect";

const Converter = () => {

  const [ state, setState ] = useState({
    from: "",
    to: "",
    amount: "",
  })

  const HandleSubmit = () => {
    console.log(state)
  }

    return (
      <div>
        <CustomCard className="card--main">
          <form onSubmit={HandleSubmit}>
            <input />
            <CustomSelect name="From" placeholder="From Currency" />
            <CustomSelect name="To" placeholder="To Currency" />
            <CustomButton name="Convert" className="btn--primary" />
          </form>
        </CustomCard>
      </div>
    );
}

export default Converter