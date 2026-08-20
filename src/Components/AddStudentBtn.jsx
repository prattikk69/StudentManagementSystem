
import React from 'react'

export default function AddStudentBtn() {
    function handleFormToggle(){
        const form = document.querySelector('.addStudentForm')
        form.classList.toggle("activeForm")
    }
  return (
    <div>
        <form className='addStudentForm'>
                <p className='font-bold text-2xl
                '>Add student data</p>
                <input type="text" placeholder='Name e.g. Spongebob' required/>
                <input type="text" placeholder='LCID e.g. "LC*****"' required/>
                <select name="department" id="department">
                    <option value="" selected disabled>Select Department</option>
                    <option value="BIT">BIT</option>
                </select>
                <select name="status" id="status">
                    <option value="" selected disabled>Select status</option>
                    <option value="true">Enrolled</option>
                    <option value="false">Not enrolled</option>
                </select>
                <button type='submit' className='
                bg-blue-500 text-white
                font-semibold cursor-pointer
                active:font-light'>Add student</button>
                <button className='cursor-pointer
                bg-red-600 text-white'
                onClick={handleFormToggle}> Cancel</button>
            </form>
        <button className='cursor-pointer
        bg-blue-500 text-white my-2'
        onClick={handleFormToggle}> +Add student</button>

    </div>
  )
}
