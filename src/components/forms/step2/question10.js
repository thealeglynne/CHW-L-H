import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question10 = ({dataFromChild10}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep11 = 11
        let checkStep2 = true

        dataFromChild10({goToStep11,checkStep2})
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Learn and advance my personal development', checked: false },
        { id: 2, label: 'Browse tools to share with my community', checked: false },
        { id: 3, label: 'Connect with other CHWs, share experiences, and participate in the forum', checked: false },
        { id: 4, label: 'A CHW space to build and save my information', checked: false },
        { id: 5, label: 'Understand the elements of a successful CHW approach', checked: false }
      ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

return (
    <div className="row"> 
        <div className="col-2"/>
        <div className="col-4"  style={{ color: '#067CBC', textAlign:'right'}}>
            <h4>What would you use the CHW Learning Hub for?</h4>
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
            
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'buttonStep2 continue2' : 'button continue2' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question10;
