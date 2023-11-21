import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';
import CustomInput from '../../shared/inputs/CustomInput';


const Question11 = ({dataFromChild11}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep12 = 12

        dataFromChild11(goToStep12)
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Communication skills', checked: false },
        { id: 2, label: 'Interpersonal and relationship building skills', checked: false },
        { id: 3, label: 'Service coordination and guidance through health systems skills', checked: false },
        { id: 4, label: 'Capacity-building skills', checked: false },
        { id: 5, label: 'Advocacy skills', checked: false },
        { id: 6, label: 'Education & facilitation skills', checked: false },
        { id: 7, label: 'Individual and community assessment skills', checked: false },
        { id: 8, label: 'Outreach skills', checked: false },
        { id: 9, label: 'Professional skills and conduct', checked: false },
        { id: 10, label: 'Evaluation and research skills', checked: false },
        { id: 11, label: 'Knowledge base', checked: false }
      ]);

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
        <div className="col-1"/>
        <div className="col-5"  style={{ color: '#143f6a'}}>
            <h4>What skills do you seek to improve?</h4>
            <a href="/">Click here for more information</a>
        </div>
        <div className="col-5">
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
            
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'buttonStep3 continue3' : 'button continue3' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question11;
