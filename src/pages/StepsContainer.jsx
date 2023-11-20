import React, { useState} from 'react';
import Button from '../components/shared/buttons/Button';
import StepsForm from '../components/forms/StepsForm';


const StepsContainer = (props) => {

const [activateSteps, setActivateSteps] = useState(false);


const handleClick = () => {
    setActivateSteps(true);
    // You can perform other actions here
  };


return (
    <div className='container'>
        <div className="row" style={{borderRight: '4px solid #eee;'}}>
            {
                activateSteps ? (
                    <StepsForm />
                ) : 
                (
                    <div className="card col-12" style={{ paddingBottom: '60px', backgroundColor: '#ddd' , color: 'white', borderRadius: '5px'}}>
                        <div className="row mt-6">
                            <div className='col-1'/>
                            <div className="col-5" >
                                <img style={{width: '300px', height: '350'}} src={"img/wellcome-form.png"} alt='welcome'/>
                            </div>
                            <div className='col-6 mt-6'>
                                <h4 className='card-title' style={{color: '#143F6A'}}>Hi Andrea</h4>
                                <h5 className='card-title' style={{color: '#143F6A'}}>Welcome to the CHW Learning Hub!</h5>
                                <p className='card-text' style={{color: '#646464'}}>Complete your profile and unlock the full potential of your learning journey. By providing comprehensive information, 
                                you can create a standout resume, track your progress, and access personalized opportunities.
                                Let’s make your CHW Learning Hub experience remarkable. Complete your profile and embark on an enriching journey today!</p>
                            </div>
                            <div className="col-6"/>
                            <div className="col-4 mt-6 ">
                                <a style={{ fontSize: '13px' ,color: '#143F6A'}} href='/'>
                                    Skip to Dashboard // My CHW Space</a>
                            </div>
                            <div className='col-2 mt-6'>
                                <Button type="submit" text={'Begin'} style={['false']}  onClick={handleClick}/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  );
};

export default StepsContainer;
