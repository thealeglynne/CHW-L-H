import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';


const Question1 = ({dataFromChild}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep2 = 2
        dataFromChild(goToStep2)
    };
    

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>Select your gender </h4>
        </div>
        <div className="col-4">
            <div>
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'next' : 'button' } text={'Male'}/>
            </div>
            <div className="mt-2">
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'next' : 'button' } text={'Female'}/>
            </div>
            <div className="mt-2 mb-6" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3? 'next' : 'button' } text={'Other'}/>
            </div>
        </div>
    </div>
  );
};

export default Question1;
