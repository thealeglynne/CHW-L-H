import React, { useState } from 'react';
import StepProgress from '../shared/steps/StepProgress';
import Step1Question1 from './step1/question1'
import Step1Question2 from './step1/question2'
import Step1Question3 from './step1/question3'
import Step1Question4 from './step1/question4'
import Step1Question5 from './step1/question5'
import Step1Question6 from './step1/question6'
import Step1Question7 from './step1/question7'
import Step1Question8 from './step1/question8'
import Step2Question9 from './step2/question9'
import Step2Question10 from './step2/question10'
import Step3Question11 from './step3/question11'
import Step3Question12 from './step3/question12'
import Step3Question13 from './step3/question13'
import Step4Question14 from './step4/question14'
import Step4Question15 from './step4/question15'
import Step4Question16 from './step4/question16'
import Step4Question17 from './step4/question17'
import Step4Question18 from './step4/question18'
import Step4Question19 from './step4/question19'


const StepsForm = () => {
  
  const [dataFromChild, setDataFromChild] = useState(1);

  const [activeStep1, setActiveStep1] = useState(true);
  const [checkStep1, setCheckStep1] = useState(false);
  const [inactiveStep1, setInactiveStep1] = useState(true);

  const [activeStep2, setActiveStep2] = useState(false);
  const [checkStep2, setCheckStep2] = useState(false);
  const [inactiveStep2, setInactiveStep2] = useState(true);

  const [activeStep3, setActiveStep3] = useState(false);
  const [checkStep3, setCheckStep3] = useState(false);
  const [inactiveStep3, setInactiveStep3] = useState(true);

  const [activeStep4, setActiveStep4] = useState(false);
  const [checkStep4, setCheckStep4] = useState(false);
  const [inactiveStep4, setInactiveStep4] = useState(true);

  const handleDataFromChild = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
  };

  const handleDataFromChild2 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
  };

  const handleDataFromChild3 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
    // setDataFromChild(data);
  };

  const handleDataFromChild4 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
    // setDataFromChild(data);
  };

  const handleDataFromChild5 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
    // setDataFromChild(data);
  };

  const handleDataFromChild6 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
    // setDataFromChild(data);
  };

  const handleDataFromChild7 = (data) => {
    // Update the parent component's state with data from the child
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
    // setDataFromChild(data);
  };

  const handleDataFromChild8 = (data) => {
    console.log('data', data)
    
    setTimeout(() => {
        setDataFromChild(data.goToStep9);
        setCheckStep1(data.checkStep1)
        setActiveStep1(false)
        setInactiveStep1(true)
        setActiveStep2(true)
        setInactiveStep2(false)
    }, 1000); 
  };

  const handleDataFromChild9= (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
    }, 1000); 
  };

  const handleDataFromChild10= (data) => {
    
    setTimeout(() => {
        setDataFromChild(data.goToStep11);
        setCheckStep2(data.checkStep2)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(true)
        setInactiveStep3(false)
    }, 1000); 
  };

  const handleDataFromChild11 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(true)
        setInactiveStep3(false)
    }, 1000); 
  };

  const handleDataFromChild12 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(true)
        setInactiveStep3(false)
    }, 1000); 
  };

  const handleDataFromChild13 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data.goToStep14);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
        setCheckStep4(false)
    }, 1000); 
  };

  const handleDataFromChild14 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const handleDataFromChild15 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const handleDataFromChild16 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const handleDataFromChild17 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const handleDataFromChild18 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(false)
        setCheckStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const handleDataFromChild19 = (data) => {
    
    setTimeout(() => {
        setDataFromChild(data);
        setCheckStep3(true)
        setCheckStep2(true)
        setActiveStep2(false)
        setInactiveStep2(false)
        setActiveStep3(false)
        setActiveStep4(true)
        setInactiveStep4(false)
    }, 1000); 
  };

  const backButtonFunction= () => {
    
    if (dataFromChild === 2){
      return  setDataFromChild(1)
    } 
    if (dataFromChild === 3){
        return setDataFromChild(2)
    } 
    if (dataFromChild === 4){
        return setDataFromChild(3)
    } 
    if (dataFromChild === 5){
        return setDataFromChild(4)
    } 
    if (dataFromChild === 6){
        return  setDataFromChild(5)
    } 
    if (dataFromChild === 7){
        return  setDataFromChild(6)
    } 
    if (dataFromChild === 8){
        return setDataFromChild(7)
    } 
    if (dataFromChild === 9){
        setCheckStep1(false)
        setActiveStep1(true)
        setInactiveStep2(true)
        setActiveStep2(false)
        return setDataFromChild(8)
    } 
    if (dataFromChild === 10){
        return setDataFromChild(9)
    } 
    if (dataFromChild === 11){
        setCheckStep2(false)
        setActiveStep2(true)
        setInactiveStep3(true)
        setActiveStep3(false)
        return setDataFromChild(10)
    } 
    if (dataFromChild === 12){
        return setDataFromChild(11)
    } 
    if (dataFromChild === 13){
        setCheckStep3(false)
        setActiveStep3(true)
        setInactiveStep4(true)
        setActiveStep4(false)
        return setDataFromChild(12)
    } 
    if (dataFromChild === 14){
        return setDataFromChild(13)
    } 
    if (dataFromChild === 15){
        return setDataFromChild(14)
    } 
    if (dataFromChild === 16){
        return setDataFromChild(15)
    } 
    if (dataFromChild === 17){
        return setDataFromChild(16)
    } 
    if (dataFromChild === 18){
        return setDataFromChild(17)
    } 
    if (dataFromChild === 19){
        setCheckStep3(false)
        setActiveStep3(true)
        setInactiveStep4(true)
        setActiveStep4(false)
        setCheckStep4(false)
        return setDataFromChild(18)
    } 
  };

return (
    <div className="col-12">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false" data-value='3'>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="card" style={{backgroundColor: '#eee' , color: 'white', }}>
                        <div className="row mt-4 mb-6">
                            <StepProgress 
                                activeStepFromChild1={activeStep1} checkStepFromChild1={checkStep1} inactiveStepFromChild1={inactiveStep1}
                                activeStepFromChild2={activeStep2} checkStepFromChild2={checkStep2} inactiveStepFromChild2={inactiveStep2}
                                activeStepFromChild3={activeStep3} checkStepFromChild3={checkStep3} inactiveStepFromChild3={inactiveStep3}
                                activeStepFromChild4={activeStep4} checkStepFromChild4={checkStep4} inactiveStepFromChild4={inactiveStep4}
                            />
                        </div>
                        {
                            dataFromChild === 1 &&
                            <div> 
                                <Step1Question1 dataFromChild={handleDataFromChild}/>
                            </div>
                        }
                        {
                            dataFromChild === 2 &&
                                <div>
                                    <Step1Question2 dataFromChild2={handleDataFromChild2}/>
                                </div>
                        }
                        {
                            dataFromChild === 3 &&
                                <div>
                                    <Step1Question3 dataFromChild3={handleDataFromChild3}/>
                                </div>
                        }
                        {
                            dataFromChild === 4 &&
                                <div>
                                    <Step1Question4 dataFromChild4={handleDataFromChild4}/>
                                </div>
                        }
                        {
                            dataFromChild === 5 &&
                                <div>
                                    <Step1Question5 dataFromChild5={handleDataFromChild5}/>
                                </div>
                        }
                        {
                            dataFromChild === 6 &&
                                <div>
                                    <Step1Question6 dataFromChild6={handleDataFromChild6}/>
                                </div>
                        }
                        {
                            dataFromChild === 7 &&
                                <div>
                                    <Step1Question7 dataFromChild7={handleDataFromChild7}/>
                                </div>
                        }
                        {
                            dataFromChild === 8 &&
                                <div>
                                    <Step1Question8 dataFromChild8={handleDataFromChild8}/>
                                </div>
                        }
                        {
                            dataFromChild === 9 &&
                                <div>
                                    <Step2Question9 dataFromChild9={handleDataFromChild9}/>
                                </div>
                        }
                        {
                            dataFromChild === 10 &&
                                <div>
                                    <Step2Question10 dataFromChild10={handleDataFromChild10}/>
                                </div>
                        }
                        {
                            dataFromChild === 11 &&
                                <div>
                                    <Step3Question11 dataFromChild11={handleDataFromChild11}/>
                                </div>
                        }
                        {
                            dataFromChild === 12 &&
                                <div>
                                    <Step3Question12 dataFromChild12={handleDataFromChild12}/>
                                </div>
                        }
                        {
                            dataFromChild === 13 &&
                                <div>
                                    <Step3Question13 dataFromChild13={handleDataFromChild13}/>
                                </div>
                        }
                        {
                            dataFromChild === 14 &&
                                <div>
                                    <Step4Question14 dataFromChild14={handleDataFromChild14}/>
                                </div>
                        }
                        {
                            dataFromChild === 15 &&
                                <div>
                                    <Step4Question15 dataFromChild15={handleDataFromChild15}/>
                                </div>
                        }
                        {
                            dataFromChild === 16 &&
                                <div>
                                    <Step4Question16 dataFromChild16={handleDataFromChild16}/>
                                </div>
                        }
                        {
                            dataFromChild === 17 &&
                                <div>
                                    <Step4Question17 dataFromChild17={handleDataFromChild17}/>
                                </div>
                        }
                        {
                            dataFromChild === 18 &&
                                <div>
                                    <Step4Question18 dataFromChild18={handleDataFromChild18}/>
                                </div>
                        }
                        {
                            dataFromChild === 19 &&
                                <div>
                                    <Step4Question19 dataFromChild19={handleDataFromChild19}/>
                                </div>
                        }
                        <div className="col-2 mt-4 mb-4">
                            <button style={{border:'none'}} onClick={() => backButtonFunction()}> {'< Back'} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StepsForm;
