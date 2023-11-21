import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';


const Question2 = ({dataFromChild2}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep3 = 3
        dataFromChild2(goToStep3)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>Select your race </h4>
        </div>
        <div className="col-4">
            <div>
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'next' : 'button' } text={'Hispanic or Latino'}/>
            </div>
            <div className="mt-2">
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'next' : 'button' } text={'Asian'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3? 'next' : 'button' } text={'Black or African American'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4? 'next' : 'button' } text={'Native Hawaiian or Other'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(5)} className={activeButton && nextStepButton === 5? 'next' : 'button' } text={'Pacific Islander'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(6)} className={activeButton && nextStepButton === 6? 'next' : 'button' } text={'American Indian or Alaska Native'}/>
            </div>
            <div className="mt-2 mb-6" >
                <StepButton onClick={() => nextStep(7)} className={activeButton && nextStepButton === 7? 'next' : 'button' } text={'White'}/>
            </div>
        </div>
    </div>
  );
};

export default Question2;
