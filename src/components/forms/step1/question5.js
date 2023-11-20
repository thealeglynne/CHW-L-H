import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import Select from '../../shared/selects/select';
import CustomInput from '../../shared/inputs/CustomInput';


const Question5 = ({dataFromChild5}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState('');
    const [inputValue, setInputValue] = useState('');

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000)

        let goToStep6 = 6

        dataFromChild5(goToStep6)
    };

    const options1 = [
        { value: 'Medellin', label: 'Medellin' },
        { value: 'California', label: 'California' },
      ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>City of residence </h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <Select options={options1} value={selectedOption1} onChange={setSelectedOption1}/>
            </div>
            <div className="mb-4" >
                <CustomInput
                    placeholder="Postal Code (Optional)"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(6)} className={activeButton && nextStepButton === 6 ? 'next continue' : 'button continue' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question5;
