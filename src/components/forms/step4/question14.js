import React, { useState} from 'react';
import StepButton from '../../shared/steps/StepButton';
import './styles/step4.css'; 


const Question14 = ({dataFromChild14}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000);

        let goToStep15 = 15

        dataFromChild14(goToStep15)
    };

    const imageSource = 'react_components/dashboard/src/icons/book_icon.svg';
    const imageSource2 = 'react_components/dashboard/src/icons/steps/book_icon_purple.svg';
    const imageSource3 = 'react_components/dashboard/src/icons/steps/paper_icon_purple.svg';
    const imageSource4 = 'react_components/dashboard/src/icons/steps/audio_book_icon_purple.svg';

return (
    <div className="row"> 
        <div className="col-1"/>
        <div className="col-6"  style={{ color: '#372bc4'}}>
            <h4>Which book would you be inclined to read?</h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(1)} className={activeButton && nextStepButton === 1 ? 'buttonStep4' : 'button4' } text={'A book with lots of pictures'} icon={imageSource}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(2)} className={activeButton && nextStepButton === 2 ? 'buttonStep4' : 'button4' } text={'A book with lots of words'} icon={imageSource2}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(3)} className={activeButton && nextStepButton === 3 ? 'buttonStep4' : 'button4' } text={'A book with word searches or crossword puzzles'} icon={imageSource3}/>
            </div>
            <div className="mb-4" >
                <StepButton onClick={() => nextStep(4)} className={activeButton && nextStepButton === 4 ? 'buttonStep4' : 'button4' } text={'An audio book'} icon={imageSource4}/>
            </div>
        </div>
    </div>
  );
};

export default Question14;
