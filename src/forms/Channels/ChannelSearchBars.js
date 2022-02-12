import React from 'react';
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import avatar from '../../avatar-placeholder.png'

export function FindMembers ({ list, addMember, disable }) {
  const [searchInput, setSearchInput] = useState()  

  return (
        <div className='findmembers-search'>
          <div className='findmembers-search-input'>
            <div className='search-icon'>
              <FaSearch />
            </div>
            <input className='input-findmembers'
              value={searchInput}
              type="text"
              placeholder='Find members'
              onChange={(e) => {
                  setSearchInput(e.target.value)
              }}
              disabled={disable}
            />
          </div>
      {/* added a div wrapper */}
      {searchInput && searchInput.length > 0 ? (
        <div className="userlist">
          {list
            .filter(user => {
              if (searchInput == '') {
                return ''
              } else if (
                user.uid.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return user
              }
            })
            .map(user => {
              return (
                <div className='filtered-container' key={user.id} id={user.id}>
                  <img src='https://tinyurl.com/2p8fmaz3' height='24px' width='24px' onClick={addMember} id={user.id}/>
                  <span className='email' onClick={addMember} id={user.id}> {user.email} </span>
                </div>
              )
            })}
        </div>)
        : null}
    </div>
  );
}
