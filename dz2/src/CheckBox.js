import React from 'react'

export const CheckBox = props => {
    return (
      <div className="Card" >
       <input   key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value}/> {props.id} {props.value}
      </div>
    )
}

export default CheckBox