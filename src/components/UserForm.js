import React from 'react'
import UserTable from './UserTable'



function UserForm() {
  return (
    <div class="user-form   m-auto mt-5">
        <form className='bg-light p-5'>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name= "name" />
                         
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="age" name= "age" />
                         
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name= "email" />
                         
                </div>

                <div class="mb-3 form-check">
             <input type="checkbox" class="form-check-input" id="relocated" />
             <label class="form-check-label" for="relocated">Relocated</label>
             </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        <UserTable />
    </div>
  )
}

export default UserForm