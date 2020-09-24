import React from 'react'

export default props => (
    <table className="table">
        <thead>
            <tr>
                <th onClick={() => props.onSort('id')}>
                    Id
                    {props.sortedField === 'id' && props.sortAsc ? <i className="fa fa-fw fa-angle-down"></i> : null}
                    {props.sortedField === 'id' && !props.sortAsc ? <i className="fa fa-fw fa-angle-up"></i> : null}
                    {props.sortedField !== 'id' ? <i className="fa fa-fw fa-angle-up invisible"></i> : null}
                </th>
                <th onClick={() => props.onSort('firstName')}>First Name
                    {props.sortedField === 'firstName' && props.sortAsc ? <i className="fa fa-fw fa-angle-down"></i> : null}
                    {props.sortedField === 'firstName' && !props.sortAsc ? <i className="fa fa-fw fa-angle-up"></i> : null}
                    {props.sortedField !== 'firstName' ? <i className="fa fa-fw fa-angle-up invisible"></i> : null}
                </th>
                <th onClick={() => props.onSort('lastName')}>Last Name
                    {props.sortedField === 'lastName' && props.sortAsc ? <i className="fa fa-fw fa-angle-down"></i> : null}
                    {props.sortedField === 'lastName' && !props.sortAsc ? <i className="fa fa-fw fa-angle-up"></i> : null}
                    {props.sortedField !== 'lastName' ? <i className="fa fa-fw fa-angle-up invisible"></i> : null}
                </th>
                <th onClick={() => props.onSort('email')}>Email
                    {props.sortedField === 'email' && props.sortAsc ? <i className="fa fa-fw fa-angle-down"></i> : null}
                    {props.sortedField === 'email' && !props.sortAsc ? <i className="fa fa-fw fa-angle-up"></i> : null}
                    {props.sortedField !== 'email' ? <i className="fa fa-fw fa-angle-up invisible"></i> : null}
                </th>
                <th onClick={() => props.onSort('phone')}>Phone
                    {props.sortedField === 'phone' && props.sortAsc ? <i className="fa fa-fw fa-angle-down"></i> : null}
                    {props.sortedField === 'phone' && !props.sortAsc ? <i className="fa fa-fw fa-angle-up"></i> : null}
                    {props.sortedField !== 'phone' ? <i className="fa fa-fw fa-angle-up invisible"></i> : null}
                </th>
            </tr>
        </thead>
        <tbody>
            {props.newRows.length > 0 && props.newRows.map(item => (
                <tr key={item.id + item.phone} onClick={() => props.onRowSelect(item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            {props.data.map(item => (
                <tr key={item.id + item.phone} onClick={() => props.onRowSelect(item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
)