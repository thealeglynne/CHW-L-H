import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import './styles/step4.css'; 


const Question16 = ({dataFromChild16}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep17 = 17

        dataFromChild16(goToStep17)
    };

    const imageSource = 'react_components/dashboard/src/icons/steps/eye_icon_purple.svg';
    const imageSource2 = 'react_components/dashboard/src/icons/steps/message_icon_purple.svg';
    const imageSource3 = 'react_components/dashboard/src/icons/steps/phone_icon_purple.svg';
    const imageSource4 = 'react_components/dashboard/src/icons/steps/mute_icon_purple.svg';

return (
    <div className="row"> 
        <div className="col-2"/>
        <div className="col-5"  style={{ color: '#372bc4', textAlign: 'right'}}>
            <h4>What are you most likely to do while waiting in line at the supermarket?</h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'buttonStep4' : 'button4' } text={'Look around at the other items'} icon={imageSource}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'buttonStep4' : 'button4' } text={'Talk to the person next to you in line'} icon={imageSource2}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3 ? 'buttonStep4' : 'button4' } text={'Fidget or use the phone'} icon={imageSource3}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4 ? 'buttonStep4' : 'button4' } text={'Wait silently'} icon={imageSource4}/>
            </div>
        </div>
    </div>
  );
};

export default Question16;
