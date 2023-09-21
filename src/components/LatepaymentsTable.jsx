import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Container, Grid, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import payments_record from '../PaymentRecord.json'
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LatePaymentTable() {
  const navigate = useNavigate();

  const ManageClick = (id) => {
    navigate(`/edit-supplier/${id}`);
  };

  const late_payment = payments_record.filter(payment => payment["Estado del Pago"] === "Atrasado");

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
                Late payments
              </Typography>
            </Grid>
            <Grid item xs={6} align="right">
              
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
                    field: 'manage',
                    headerName: 'Gestionar',
                    width: 100,
                    renderCell: (params) => (
                      <IconButton
                        onClick={() => ManageClick(params.id)}
                        variant="contained" color="primary"
                      >
                        <SettingsIcon />
                      </IconButton>
                    ),
                  },
                ]}
                rows={late_payment}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}