import React, { useEffect, useState } from 'react'

export default props => {
    const [row, setRow] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })
    const [acceptSubmit, setAcceptSubmit] = useState(false)
    const onChangeHandler = event => {
        setRow({ ...row, [event.target.id]: event.target.value })
    }
    useEffect(() => {
        setAcceptSubmit(true)
        Object.keys(row).forEach(key => {
            if (row[key] === '') {
                setAcceptSubmit(false);
            }
        });
    })
    return (
        <div>
            <div className="form-group">
                <label htmlFor="id">Id</label>
                <input value={row.id} className="form-control" id="id" aria-describedby="emailHelp" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input value={row.firstName} className="form-control" id="firstName" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input value={row.lastName} className="form-control" id="lastName" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={row.email} type="email" className="form-control" id="email" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input value={row.phone} className="form-control" id="phone" onChange={onChangeHandler} />
            </div>
            <button disabled={!acceptSubmit} id="submitRow" className="btn btn-primary" onClick={() => props.onNewRowSubmit(row)}>Добавить в таблицу</button>
        </div>
    )
}