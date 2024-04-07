import React from 'react'
import EmployeeListItem from "./EmloyeeListItem"

export default function Employeelist() {
  return (
    <div className='employee-list'>
    <EmployeeListItem name="John Doe" position="Software Engineer" />
    <EmployeeListItem name="Jane Smith" position="UI/UX Designer" />
    <EmployeeListItem name="Michael Johnson" position="Data Analyst" />
      
    </div>
  )
}
