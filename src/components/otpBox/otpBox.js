import React from 'react'
import { useState } from 'react';
import "./otpbox.css"

const OtpBox = ({ length ,onChange}) => {

    const [otp, setOtp] = useState(new Array(length).fill(""));
    


    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }}

        // Trigger onChange callback if provided
        if (onChange) {
            let x = 0;
            otp.forEach((e)=>{
                let z = parseInt(e)
                if( (z<=9)&&(z>=0)){x++;}});
                 onChange(otp.join(""),x);}

    

    return (
        <div>
            {
                otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                }

                )}
        </div>
    );
}

export default OtpBox
