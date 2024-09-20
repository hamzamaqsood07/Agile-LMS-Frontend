import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
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
    <>
      <div className='studentTableSearchBar'>

        <TextField
          sx={{ position: "absolute", top: "24%", left: "2%", width: "15%" }}
          name='searchByName'
          placeholder="Search by name"
          variant="outlined"
          size='small'
        />

        <TextField
          sx={{ position: "absolute", top: "24%", left: "20%", width: "15%" }}
          name='searchByFamily'
          placeholder="Search by family"
          variant="outlined"
          size='small'
        />

        <TextField
          sx={{ position: "absolute", top: "24%", left: "39%", width: "16%" }}
          name='searchByStatus'
          select
          label="Search by status"
          variant="outlined"
          size='small'
        />

        <TextField
          sx={{ position: "absolute", top: "24%", left: "58%", width: "16%" }}
          name='searchByClass'
          select
          label="Search by class"
          variant="outlined"
          size='small'
        />

        <TextField
          sx={{ position: "absolute", top: "24%", left: "77%", width: "16%" }}
          name='searchBySection'
          select
          label="Search by section"
          variant="outlined"
          size='small'
        />
      </div>

      <div className="ag-theme-alpine" style={{ height: '80%', width: '100%', position: "absolute", top: "20%", left: "0%"}} >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </>
  )
}
