import React from 'react'

export default props => {
    const smallDataLink = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    const bigDataLink = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
    return(
        <div>
            <button style={{margin: '5px 1px'}} onClick={() => props.onSelectData(smallDataLink)} className="btn btn-primary">32 строки</button>
            <button style={{margin: '5px 1px'}} onClick={() => props.onSelectData(bigDataLink)} className="btn btn-primary">1000 строк</button>
        </div>
    )
}