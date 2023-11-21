import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import CustomCheckbox from '../../shared/checkbox/CustomCheckbox';


const Question8 = ({dataFromChild8}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000); 

        let goToStep9 = 9
        let checkStep1 = true

        dataFromChild8({goToStep9,checkStep1})
    };

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Cultural mediation', checked: false },
        { id: 2, label: 'Care coordination, case management and guidance through health systems', checked: false },
        { id: 3, label: 'Provide coaching and social support', checked: false },
        { id: 4, label: 'Advocacy', checked: false },
        { id: 5, label: 'Building capacity', checked: false },
        { id: 6, label: 'Provide direct services', checked: false },
        { id: 7, label: 'Implement assessments', checked: false },
        { id: 8, label: 'Conduct outreach', checked: false },
        { id: 9, label: 'Participate in evaluation and research', checked: false },
        { id: 10, label: 'I have no experience in any of these', checked: false },
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
        <div className="col-5"  style={{ color: '#47BBC6'}}>
            <h4>What roles do you have experience in? </h4>
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
            
            <div className="mb-6">
                <StepButton onClick={() => nextStep(5)} className={activeButton && nextStepButton === 5? 'next continue' : 'button continue' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question8;
