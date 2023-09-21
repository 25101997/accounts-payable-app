import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Container, Grid, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import payments_record from '../PaymentRecord.json'
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PaymentRecordTable() {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/edit-supplier/${id}`);
  };

  const handleCancelClick = (id) => {
    navigate(`/edit-supplier/${id}`);
  };

  const handleViewClick = (id) => {
    navigate(`/edit-supplier/${id}`);
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
                Payment Record
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
                  { field: 'proveedor', headerName: <Typography fontWeight="bold">Proveedor</Typography>, flex: 1 },
                  { field: 'Monto', headerName: <Typography fontWeight="bold">Monto</Typography>, flex: 1 },
                  { field: 'Fecha de Pago', headerName: <Typography fontWeight="bold">Fecha de Pago</Typography>, flex: 1 },
                  { field: 'Estado del Pago', headerName: <Typography fontWeight="bold">Estado del Pago</Typography>, flex: 1 },
                  {
                    field: 'Anular', // Campo ficticio para la columna de cancelación
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
                rows={payments_record}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}