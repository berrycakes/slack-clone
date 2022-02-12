import React from 'react';
import { FiHash } from "react-icons/fi";

function NewChannel({ name, description, handleSubmit, handleNameInput, handleDescriptionInput, handleClick }) {
  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='label-input-container'>
                <label htmlFor='channel-name'>Name</label>
                <div className='input-container'>
                    <span className='input-icon'><FiHash /></span>
                    <input className='newchannel-input'
                    type='text'
                    name='channel-name'
                    id='channel-name'
                    value={name}
                    onChange={handleNameInput}
                    placeholder='e.g. plan-budget'
                    required/>
                </div>
            </div>
            <div className='label-input-container'>
                <label htmlFor='channel-name-desc'>Description (optional)</label>
                <div className='input-container'>
                    <input className='newchannel-input'
                    type='text'
                    name='channel-name-desc'
                    id='channel-name-desc'
                    value={description}
                    onChange={handleDescriptionInput}
                    placeholder='e.g. plan-budget'/>
                </div>
                <div className='input-bottom-desc'>What's this channel about?</div>
            </div>
            <div className='btn-container'>
                <button className='btn-rectangle-large'
                onClick={handleClick}>
                    Create
                </button>
            </div>
        </form>
    </div>
  );
}

export default NewChannel;
