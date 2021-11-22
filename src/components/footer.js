import React from 'react';
import {MdLocationPin} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
export default function FooterComponent(){
        return(
            <div className="container-fluid h-50 footer">
                        <div className="row">
                            <div className="col col-center">
                                     <p>Welcome to One World! One World Logistics and Freight Zambia Ltd.</p>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><p><MdLocationPin color="#ec3c82"/>&nbsp;&nbsp;1164 Nkanchibaya Road, off Addis Ababa drive, Rhodes Park, Lusaka.</p> </li>
                                            <li className="list-group-item"><p><BsTelephoneFill color="#ec3c82"/>&nbsp;&nbsp;Tel Number: +260 211 387700/ +260 966 333222</p> </li>
                                            <li className="list-group-item"><p> <a href="http://oneworld.oreganosoft.com"><GrMail color="#ec3c82"/>&nbsp;&nbsp;online@oneworld.co.zm / info@oneworld.co.zm</a> </p></li>
                                        </ul>                                
                            </div>
                            <div className="col col-center">
                                <img alt="Random slide" src="/images/zcc.png" width="130" height="130" style={{backgroundColor:"#ffffff"}}/>
                            </div>
                        </div>                                
            </div>
        )        
}