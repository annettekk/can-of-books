import React from 'react';
import '.Header.css'

export default function Header() {
  return (
    <header className='flex-container'>
    <div className='txt-200-regular'>Logo</div>
    <ul className='=flex--items flex--container'>
        <li><a> href='' className='txt-200-regular'</a><em>Collections</em></li>
        <li><a> href='' className='txt-200-regular'</a>Upload</li>
    </ul>
    </header>
  )
}

// how state works

// let statePointer = 0
// let stateStack = []
// let initialised = false
// let reRender = function () {
//     // re render thife component
// }

// function myUseState(initialValue) {
//     if(!initialised) {
//         stateStack[statePointer] = {
//             value: initialValue,
//             updateFunc: function (value) {
//                 reRender()
//             }
//         }
//     }

//     let state = stateStack[statePointer]
//     statePointer++

//     return [state.value, state.updateFunc]
// }

