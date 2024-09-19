import React from 'react'
import { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useLoaderData } from 'react-router-dom';
export default function StudentTable() {
  
  const students = useLoaderData()

  const dateFormatter = params => {
    const date = new Date(params.value);
    return date.toLocaleDateString(); 
  };

  const [columnDefs] = useState([
    { headerName: "Roll No", field: "rollNo", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "CNIC", field: "cnic", sortable: true, filter: true },
    { headerName: "Father's CNIC", field: "fatherCnic", sortable: true, filter: true },
    { headerName: "Father's Mobile", field: "fatherMobile", sortable: true, filter: true },
    { headerName: "Father's Name", field: "fatherName", sortable: true, filter: true },
    { headerName: "Admission Date", field: "admissionDate", sortable: true, filter: true, valueFormatter: dateFormatter },
    { headerName: "Created Date", field: "createdDate", sortable: true, filter: true, valueFormatter: dateFormatter },
    { headerName: "Updated Date", field: "updatedDate", sortable: true, filter: true, valueFormatter: dateFormatter },
    { headerName: "Status Date", field: "statusDate", sortable: true, filter: true, valueFormatter: dateFormatter }
  ]);
  

  const [rowData] = useState(students);
  
  return (
    <div  className="ag-theme-alpine" style={{ height: '400px', width: '100%' }} >
       <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  )
}
