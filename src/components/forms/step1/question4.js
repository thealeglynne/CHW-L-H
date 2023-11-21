import React, { useState } from 'react';
import StepButton from '../../shared/steps/StepButton';
import Select from '../../shared/selects/select';


const Question4 = ({dataFromChild4}) => {
    const [activeButton, setActiveButton] = useState(false);
    const [nextStepButton, setNextStepButton] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState('');

    const nextStep = (buttonId) => {
        setActiveButton(true);
        setNextStepButton(buttonId)

        setTimeout(() => {
            setActiveButton(false);
            setNextStepButton(null);
        }, 1000); // 2000 milisegundos = 5 segundos

        let goToStep5 = 5

        dataFromChild4(goToStep5)
    };

    const options1 = [
        { value: 'Colombia', label: 'Colombia' },
        { value: 'USA', label: 'USA' },
      ];


return (
    <div className="row"> 
        <div className="col-3"/>
        <div className="col-3"  style={{ color: '#47BBC6'}}>
            <h4>Country of residence </h4>
        </div>
        <div className="col-4">
            <div className="mb-4" >
                <Select options={options1} value={selectedOption1} onChange={setSelectedOption1}/>
            </div>
            <div className="mb-6" >
                <StepButton onClick={() => nextStep(5)} className={activeButton && nextStepButton === 5 ? 'next continue' : 'button continue' } text={'Continue'}/>
            </div>
        </div>
    </div>
  );
};

export default Question4;
