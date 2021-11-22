import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
    const testResult=zxcvbn(password);
    const num= testResult.score*100/4;
    
    function colorProgressFunc(){
        switch(testResult.score){
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none' ;
            }
    }

    function changeColor() {
        return ({
            width:`${num}%`,
            background:colorProgressFunc(),
            height:'6px'
        });
    }
        return(
            <>
                 <div className="progress mt-2" style={{height:'6px'}}>
                    <div className="progress-bar" style={changeColor()}></div>
                </div>
            </>
        )
}

export default PasswordStrengthMeter