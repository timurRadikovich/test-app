import React from 'react'

export default props =>
    <div>
        <p>Выбран пользователь <b>{props.rowInfo.firstName + ' ' + props.rowInfo.lastName}</b></p>
        {props.rowInfo.description &&
            <div>
                <p>Описание:</p>
                <textarea rows='5'>
                    {props.rowInfo.description}
                </textarea>
            </div>}

        {props.rowInfo.address &&
            <div>
                <p>Адрес проживания: <b>{props.rowInfo.address.streetAddress}</b></p>
                <p>Город: <b>{props.rowInfo.address.city}</b></p>
                <p>Провинция/штат: <b>{props.rowInfo.address.state}</b></p>
                <p>Индекс: <b>{props.rowInfo.address.zip}</b></p>
            </div>}
    </div>