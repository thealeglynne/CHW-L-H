import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';


const Question7 = ({dataFromChild7}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000); 

        let goToStep8 = 8

        dataFromChild7(goToStep8)
    };

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-4"  style={{ color: '#47BBC6'}}>
            <h4>My experience as a CHW is </h4>
        </div>
        <div className="col-4">
            <div>
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'next' : 'button' } text={'I have no experience, but I’m interested'}/>
            </div>
            <div className="mt-2">
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'next' : 'button' } text={'Just getting started: 0-1 years'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3? 'next' : 'button' } text={'Moderate but still fairly new: 2-5 years'}/>
            </div>
            <div className="mt-2" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4? 'next' : 'button' } text={'Seasoned and practiced: 6-10 years'}/>
            </div>
            <div className="mt-2 mb-6" >
                <StepButton onClick={() => nextStep(5)} className={activeButton && nextStepButton === 5? 'next' : 'button' } text={'Expert level: 10+ years'}/>
            </div>
        </div>
    </div>
  );
};

export default Question7;
