import React from 'react'
import { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css';
export default function Noise() {
  const [columnDefs] = useState([
    { headerName: "Roll #", field: "roll", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Class", field: "class", sortable: true, filter: true },
    { headerName: "Section", field: "section", sortable: true, filter: true },
    { headerName: "Admission Date", field: "admissionDate", sortable: true, filter: true },
    { headerName: "Status", field: "status", sortable: true, filter: true },
    { headerName: "Father's Contact", field: "fatherContact", sortable: true, filter: true },
  ]);

  const [rowData] = useState([
    { roll: 2624, name: 'ZUNAIR AHMAD ASGHAR', class: 'EIGHT', section: 'GREEN', admissionDate: '2024-06-06', status: 'Active', fatherContact: '923064440366' },
    { roll: 2623, name: 'RAMZAN SHAHZAD', class: 'TEN', section: 'GENERAL BOYS', admissionDate: '2024-06-01', status: 'Active', fatherContact: '923144260748' },
    { roll: 2622, name: 'M ZAYAN RAFIQ', class: 'NURSERY', section: 'GREEN', admissionDate: '2024-05-21', status: 'Active', fatherContact: '923074554907' },
    // Add more rows here as needed
  ]);
  return (
    <div  className="ag-theme-alpine" 
    style={{ height: '800px', width: '100%' }} >
       <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  )
}
