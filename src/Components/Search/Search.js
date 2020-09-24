﻿import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const onChangeHandler = event => {
        setValue(event.target.value)
    }
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button onClick={() => props.onSearch(value)} className="btn btn-outline-secondary" type="button">Найти</button>
            </div>
            <input type="text" className="form-control" value={value} onChange={onChangeHandler}/>
        </div>  
    )
}