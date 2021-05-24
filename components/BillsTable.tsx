import MaterialTable from 'material-table';
import React from 'react';
import { IBillDetails } from '../models/data';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { forwardRef } from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';

interface IBillsTableProps {
    billsData: IBillDetails[]
  }

  const columns = [
    { title: 'Title', field: 'title', headerStyle: {
        width:'300px',
        maxWidth: '300px'
      }},
    { title: 'Last Action Date', field: 'date',width: '50%'},
    { title: 'Status', field: 'status',width: '50%'},
]

// const columns = [
//     { title: 'Title', field: 'title', width: '50%'},
//     { title: 'Last Action Date', field: 'date',width: '50%'},
//     { title: 'Status', field: 'status',width: '50%'},
// ]

// const columns = [
//     { title: 'Title', field: 'title', headerStyle: {width: "50%"}},
//     { title: 'Last Action Date', field: 'date',headerStyle: {width: "50%"}},
//     { title: 'Status', field: 'status',headerStyle: {width: "50%"}},
// ]


// const columns = [
//     { title: 'Title', field: 'title', cellStyle: {
//         width: 90,
//         maxWidth: 90
//       },
//       headerStyle: {
//         width:90,
//         maxWidth: 90
//       }},
//     { title: 'Description', field: 'description', cellStyle: {
//         width: 10,
//         maxWidth: 10
//       },
//       headerStyle: {
//         width:10,
//         maxWidth: 10
//       }},
// ]

const tableIcons = {
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  };

const BillsTable = ({billsData}:IBillsTableProps) => {
    const tableRef = React.createRef();
    return(
        <MaterialTable 
            icons={tableIcons}
            tableRef={tableRef}
            columns={columns} 
            data={billsData} 
            options={{
                tableLayout: "fixed"
            }}
            
            detailPanel={[
                {
                icon: ExpandMoreIcon,
                
                  tooltip: 'Expand',
                  render: rowData => {
                    return (
                      <div>
                        {rowData.description}
                      </div>
                    )
                  },
                },

                
            ]}
            actions={[
                {
                  icon: OpenInNewIcon,
                  tooltip: 'Open Link',
                  onClick: (event, rowData) => {
                    
                  }
                }
              ]}
            
            
            
            />
        )
        
        
    }
    
    export default BillsTable