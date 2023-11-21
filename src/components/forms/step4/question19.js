import React from 'react';
import './styles/step4.css'


const Question19 = () => {

    const handleClick = () => {
        console.log('Go to digital profile')
        // You can perform other actions here
      };

return (
    <div className="row"> 
        <div className="col-2" />
        <div className="col-8" style={{ color: '#666666', textAlign:'center'}}>
            <div className="row"> 
                <div className='col-12'>
                    <h4 className='mb-4'><b>Thank you for filling out your profile information! </b></h4>
                    <p>We are thrilled to have you on board at CHW Learning Hub. 
                        We invite you to take a tour of the Dashboard to explore all the exciting learning
                        and development opportunities we have for you. 
                    </p>
                </div>
                <div className='col-5 mt-6 mx-auto'>
                    <button class="button-go" type="button"  onClick={handleClick}>Go to Digital Profile </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Question19;
