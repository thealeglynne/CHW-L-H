import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import './styles/step4.css'; 


const Question18 = ({dataFromChild18}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep19 = 19

        dataFromChild18(goToStep19)
    };

    const imageSource = 'react_components/dashboard/src/icons/steps/face_icon_purple.svg';
    const imageSource2 = 'react_components/dashboard/src/icons/steps/nit_icon_purple.svg';
    const imageSource3 = 'react_components/dashboard/src/icons/steps/meet_icon_purple.svg';
    const imageSource4 = 'react_components/dashboard/src/icons/steps/work_icon_purple.svg';

return (
    <div className="row"> 
        <div className="col-1"/>
        <div className="col-5"  style={{ color: '#372bc4', textAlign:'right'}}>
            <h4>What are you most likely to remember about new people you meet?</h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'buttonStep4' : 'button4' } text={'Their face'} icon={imageSource}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'buttonStep4' : 'button4' } text={'Their name'} icon={imageSource2}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3 ? 'buttonStep4' : 'button4' } text={'What you talked with the person about'} icon={imageSource3}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4 ? 'buttonStep4' : 'button4' } text={'What you were doing when you met the person'} icon={imageSource4}/>
            </div>
        </div>
    </div>
  );
};

export default Question18;
