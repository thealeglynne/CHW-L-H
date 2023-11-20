import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question13 = ({dataFromChild13}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep14 = 14
        let checkStep13 = true

        dataFromChild13({goToStep14,checkStep13})
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Cultural mediation', checked: false },
        { id: 2, label: 'Provide culturally appropiate health education and information', checked: false },
        { id: 3, label: 'Care coordination, case management and guidance through health systems', checked: false },
        { id: 4, label: 'Provide coaching and social support', checked: false },
        { id: 5, label: 'Advocacy', checked: false },
        { id: 6, label: 'Building capacity', checked: false },
        { id: 7, label: 'Provide direct services', checked: false },
        { id: 8, label: 'Implement assessments', checked: false },
        { id: 9, label: 'Conduct outreach', checked: false },
        { id: 10, label: 'Participate in evaluation and research', checked: false }
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
        <div className="col-1"/>
        <div className="col-5"  style={{ color: '#143f6a'}}>
            <h4>Which roles are you most interested in?</h4>
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
            
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'buttonStep3 continue3' : 'button continue3' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question13;
