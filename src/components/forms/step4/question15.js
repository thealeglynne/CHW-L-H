import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import './styles/step4.css'; 


const Question15 = ({dataFromChild15}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep16 = 16

        dataFromChild15(goToStep16)
    };

    const imageSource = 'react_components/dashboard/src/icons/steps/look_map_icon_purple.svg';
    const imageSource2 = 'react_components/dashboard/src/icons/steps/ask_girl_icon_purple.svg';
    const imageSource3 = 'react_components/dashboard/src/icons/steps/walk_icon_purple.svg';
    const imageSource4 = 'react_components/dashboard/src/icons/steps/click_icon_purple.svg';

return (
    <div className="row"> 
        <div className="col-2"/>
        <div className="col-5"  style={{ color: '#372bc4', textAlign:'right'}}>
            <h4>When in a new place, how do you find your way around?</h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'buttonStep4' : 'button4' } text={'Look for a map or directory that shows you where everything is'} icon={imageSource}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'buttonStep4' : 'button4' } text={'Ask someone for directions'} icon={imageSource2}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3 ? 'buttonStep4' : 'button4' } text={'Just start walking around until you find what you’re looking for'} icon={imageSource3}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4 ? 'buttonStep4' : 'button4' } text={'Walk around while stopping to touch objects you may find interesting.'} icon={imageSource4}/>
            </div>
        </div>
    </div>
  );
};

export default Question15;
