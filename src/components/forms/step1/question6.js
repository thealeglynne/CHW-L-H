import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomInput from '../../shared/inputs/CustomInput';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question6 = ({dataFromChild6}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'English', checked: false },
        { id: 2, label: 'Spanish', checked: false },
        { id: 3, label: 'French', checked: false },
      ]);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep7 = 7

        dataFromChild6(goToStep7)
    };

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
          prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>Languages you speak</h4>
        </div>
        <div className="col-4">
            <div className="mb-2" >
                {checkboxes.map((checkbox) => (
                        <CustomCheckbox
                        key={checkbox.id}
                        label={checkbox.label}
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                ))}
            </div>
            <div className="mb-2" >
                <CustomInput
                    placeholder="Other"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mt-2 mb-6" >
                <StepButton onClick={() => nextStep(7)} className={activeButton && nextStepButton === 7 ? 'next continue' : 'button continue' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question6;
