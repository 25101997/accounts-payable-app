import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Container, Grid, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import invoices from '../invoices.json'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function InvoiceTable() {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/invoice-edit/${id}`);
  };

  const handleCancelClick = (id) => {
    navigate(`/edit-supplier/${id}`);
  };

  const handleViewClick = (id) => {
    navigate(`/invoice-view/${id}`);
  };

  return (
      <div>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="go-back"
            component={Link} 
            to="/"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Go Menu
          </Typography>
        </Toolbar>
        <Container minWidth="md" style={{ flex: 1 }} sx={{ p:2 }}>
          <Grid container >
            <Grid item xs={6}>
              <Typography variant="h6" align="left" gutterBottom>
                All Invoices
              </Typography>
            </Grid>
            <Grid item xs={6} align="right">
              <Button size="small" variant="contained" color="primary" component={Link} to="/invoice-form">Add New</Button>
            </Grid>
            <Grid item xs={12}>
              <DataGrid
                sx={{ boxShadow: 3 }}
                rowHeight={40}
                pagination // Habilitar paginación
                pageSize={5}
                pageSizeOptions={[5, 10, 25]}
                columns={[
                  { field: 'id', headerName: <Typography fontWeight="bold">ID</Typography>, flex: 0},
                  { field: 'invoice', headerName: <Typography fontWeight="bold">Factura</Typography>, flex: 1 },
                  { field: 'billingDate', headerName: <Typography fontWeight="bold">Pago</Typography>, flex: 1 },
                  { field: 'dueDate', headerName: <Typography fontWeight="bold">Vencimiento</Typography>, flex: 1 },
                  { field: 'supplier', headerName: <Typography fontWeight="bold">Proveedor</Typography>, flex: 1 },
                  { field: 'total', headerName: <Typography fontWeight="bold">Total</Typography>, flex: 1 },
                  {
                    field: 'cancel', // Campo ficticio para la columna de cancelación
                    headerName: 'Anular', // No necesitas un encabezado para esta columna
                    width: 100,
                    renderCell: (params) => (
                      <IconButton
                        onClick={() => handleCancelClick(params.id)} // Agrega la función para manejar la acción de cancelación
                        variant="contained"
                        color="secondary" // Puedes usar otro color que indique "cancelar"
                      >
                        <CancelIcon />
                      </IconButton>
                    ),
                  },
                  {
                    field: 'edit',
                    headerName: 'Edit',
                    width: 100,
                    renderCell: (params) => (
                      <IconButton
                        onClick={() => handleEditClick(params.id)}
                        variant="contained" color="primary"
                        
                      >
                        <EditIcon />
                      </IconButton>
                    ),
                  },
                  {
                    field: 'view',
                    headerName: 'View',
                    width: 100,
                    renderCell: (params) => (
                      <IconButton
                        onClick={() => handleViewClick(params.id)}
                        variant="contained" color="primary"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    ),
                  },
                ]}
                rows={invoices}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}