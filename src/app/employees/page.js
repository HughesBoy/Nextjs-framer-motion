"use client"
import React, {useState, useEffect} from 'react'


const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);


  
  
  useEffect(()=>{
    async () => {
      const res = await fetch(`https://dummy.restapiexample.com/api/v1/employees`);
      //console.log(employees)
      const employees = await res.json();
      console.log(employees.data)
      setEmployees(employees.data)
    }
    
  },[])

  return (
    <div>
      {employees && employees.map((employee) => {
        <p key={employee.id}>{employee.employee_name}</p>
      })}
    </div>
  )
}

export default EmployeesPage