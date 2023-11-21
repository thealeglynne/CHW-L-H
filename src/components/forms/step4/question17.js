import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import './styles/step4.css'; 


const Question17 = ({dataFromChild17}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep18 = 18

        dataFromChild17(goToStep18)
    };


    const imageSource = 'react_components/dashboard/src/icons/steps/happy_icon_purple.svg';
    const imageSource2 = 'react_components/dashboard/src/icons/steps/sunrise_icon_purple.svg';
    const imageSource3 = 'react_components/dashboard/src/icons/steps/really_excited_icon_purple.svg';
    const imageSource4 = 'react_components/dashboard/src/icons/steps/calm_icon_purple.svg';

return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-4"  style={{ color: '#372bc4', textAlign:'right'}}>
            <h4>When you are happy, what are you most likely to do?</h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'buttonStep4' : 'button4' } text={'Smile from ear to ear'} icon={imageSource}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'buttonStep4' : 'button4' } text={'Talk up a storm'} icon={imageSource2}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3 ? 'buttonStep4' : 'button4' } text={'Act really excited'} icon={imageSource3}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4 ? 'buttonStep4' : 'button4' } text={'Be calm and worry free'} icon={imageSource4}/>
            </div>
        </div>
    </div>
  );
};

export default Question17;
