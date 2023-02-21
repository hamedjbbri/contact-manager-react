import React from 'react'

function UserTable({ userList, handleDelete }) {
   
  return (
    <div className='mt-5'>
        <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {userList.map((item, index) =><tr key= {item.id} >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td><button className="btn btn-info m-1">Edit</button><button  onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button></td>
                   </tr>)}
                </tbody>
            </table>
    </div>
  )
}

export default UserTable