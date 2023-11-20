import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question9 = ({dataFromChild9}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep10 = 10
        dataFromChild9(goToStep10)
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Community Engagement / Outreach', checked: false },
        { id: 2, label: 'Community Education', checked: false },
        { id: 3, label: 'Healthcare', checked: false },
        { id: 4, label: 'Policy and Advocacy', checked: false },
        { id: 5, label: 'Professional Development', checked: false },
        { id: 6, label: 'Supervision and Recruitment', checked: false },
        { id: 7, label: 'Program Development', checked: false }
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
        <div className="col-4"  style={{ color: '#067CBC'}}>
            <h4>What are your areas of interest?</h4>
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
                <StepButton onClick={() => nextStep(10)} className={activeButton && nextStepButton === 10 ? 'buttonStep2 continue2' : 'button continue2' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question9;
