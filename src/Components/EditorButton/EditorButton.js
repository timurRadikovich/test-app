import React from 'react'

export default (props) => (
    <button style={{margin: '-11px 0px 5px 0px'}} onClick={() => props.onOpenEditor()} className="btn btn-primary">Добавить </button>
)