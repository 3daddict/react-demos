import React from 'react';

function Table(){
    return (
    <table className="table">
        <thead className="thead-inverse">
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
        </thead>
        <tbody>
            <tr>
                <td>Jill</td>
                <td>Math</td> 
                <td>50</td>
            </tr>
            <tr>
                <td>Mat</td>
                <td>English</td> 
                <td>98</td>
            </tr>
            <tr>
                <td>Geraldo</td>
                <td>Geography</td> 
                <td>80</td>
            </tr>
        </tbody>
    </table>
    )
}

export default Table();