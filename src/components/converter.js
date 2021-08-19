import React, {useState} from "react";

import CustomCard from "../utils/customCard/customCard";
import CustomInput from "../utils/customInput/customInput";
import CustomButton from "../utils/customButton/customButton";
import CustomSelect from "../utils/customSelect/customSelect";

const Converter = () => {

  const [ state, setState ] = useState({
    amount: 1.00,
    to: {
      label: "USD - US Dollar",
      value: "USD",
    },
    from: {
      label: "EUR - Euro",
      value: "EUR",
    },
  })

  const HandleSubmit = () => {
    console.log(state)
  }

  const HandleSelect = ( name , value ) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

    return (
      <div>
        <CustomCard className="card--main">
          <form onSubmit={HandleSubmit} className="form--converter-form">
            <div className="input--wrapper">
              <CustomInput 
                name="Amount"
                value={state.amount.toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
                labelCls="input--label text--bold"
                placeholder="1.00"
                cls="input--converter-input"
                onChange={(e) => setState({ })}
              />
            </div>
            <div className="input--wrapper">
              <CustomSelect 
                name="From" 
                placeholder="From Currency"
                cls="input--converter-input" 
                labelCls="select--label text--bold"
                onChange={(value) => HandleSelect("to" , value)}
              />
            </div>
            <div className="input--wrapper flex--end flex--column">
              <CustomSelect 
                name="To" 
                placeholder="To Currency" 
                cls="input--converter-input" 
                labelCls="select--label text--bold"
                onChange={(value) => HandleSelect("from" , value)}
              />
              <CustomButton 
                name="Convert" 
                className="btn btn--primary" 
                cls="btn--container" 
              />
            </div>
          </form>
        </CustomCard>
      </div>
    );
}

export default Converter