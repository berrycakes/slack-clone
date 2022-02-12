import React from 'react';
import { FiX } from "react-icons/fi";
import Buttons from './Buttons';

function Modals({children, modalTitle, handleClose, modalSubtitle, btnClass, btnTitle, btnText}) {
  return (
      <div className='modal-backdrop' onClick={handleClose}>
        <div className='modal-container'>
            <div className='modal-header'>
                <div className='modal-header-title'>
                    <span className='modal-title'>{modalTitle}</span>
                    <span className='btn-close-icon-modal' onClick={handleClose}><FiX /></span>
                </div>
                <div className='modal-header-subtitle'>
                    <p>{modalSubtitle}</p>
                </div>
            </div>
            <div className='modal-body'>
                {children}
            </div>
            <div className='modal-footer'>
                <Buttons className={btnClass} title={btnTitle} text={btnText}/>
            </div>
        </div>
      </div>
  );
}

export default Modals;
