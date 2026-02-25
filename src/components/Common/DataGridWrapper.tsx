import React from 'react';
import { Box, Skeleton, Paper, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridWrapperProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading?: boolean;
  pageSize?: number;
}

const DataGridWrapper: React.FC<DataGridWrapperProps> = ({ 
  rows, 
  columns, 
  loading = false, 
  pageSize = 5 
}) => {
  const theme = useTheme();

  if (loading) {
    return (
      <Paper sx={{ p: 2, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
        <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Box>
        {[...Array(pageSize)].map((_, i) => (
          <Skeleton key={i} variant="text" sx={{ fontSize: '2rem', mb: 1 }} />
        ))}
      </Paper>
    );
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: 'action.hover',
            borderRadius: 0,
          },
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-row:hover': {
            bgcolor: 'action.hover',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: '1px solid',
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  );
};

export default DataGridWrapper;
