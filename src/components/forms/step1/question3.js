import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';


const Question3 = ({dataFromChild3}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep4 = 4

        dataFromChild3(goToStep4)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>Select your age </h4>
        </div>
        <div className="col-4">
            <div>
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'next' : 'button' } text={'18 - 29'}/>
            </div>
            <div className="mt-2">
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'next' : 'button' } text={'30 - 39'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3? 'next' : 'button' } text={'40 - 49'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4? 'next' : 'button' } text={'50 - 59'}/>
            </div>
            <div className="mt-2 mb-6" >
                <StepButton onClick={() => nextStep(5)} className={activeButton && nextStepButton === 5? 'next' : 'button' } text={'+60'}/>
            </div>
        </div>
    </div>
  );
};

export default Question3;
