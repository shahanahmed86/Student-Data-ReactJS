import React from 'react';

const Preview = ({data, onEdit, onDel}) => {
    return(
        <div>
            <h3>Students Details</h3>
            <table className='student'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Religion</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, ind) => {
                            return(
                                <tr key={ind}>
                                    <td>{value.name}</td>
                                    <td>{value.father}</td>
                                    <td>{value.class}</td>
                                    <td>{value.religion}</td>
                                    <td>
                                        <input 
                                            type='button' value='Edit' className='btn btn-secondary btn-sm'
                                            onClick={() => onEdit(ind)} />
                                        <input 
                                            type='button' value='Delete' className='btn btn-danger btn-sm'
                                            onClick={() => onDel(ind)} />
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Preview;