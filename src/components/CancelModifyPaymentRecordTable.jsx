import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Container, Grid, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import cm_payments_record from '../CancelModifyPaymentRecord.json'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CancelModifyPaymentRecordTable() {
  const navigate = useNavigate();

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
                Modified Payments
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
                  { field: 'payment_record', headerName: <Typography fontWeight="bold">Pago ID</Typography>, flex: 0 },
                  { field: 'fechaHoraDelCambio', headerName: <Typography fontWeight="bold">Fecha / Hora</Typography>, flex: 1 },
                  { field: 'tipoDeCambio', headerName: <Typography fontWeight="bold">Tipo de Cambio</Typography>, flex: 1 },
                  { field: 'usuarioResponsable', headerName: <Typography fontWeight="bold">Usuario</Typography>, flex: 1 },
                  { field: 'campoModificado', headerName: <Typography fontWeight="bold">Campo Modificado</Typography>, flex: 1 },
                  { field: 'valorAnterior', headerName: <Typography fontWeight="bold">Valor Anterior</Typography>, flex: 1 },
                  { field: 'valorNuevo', headerName: <Typography fontWeight="bold">Valor Nuevo</Typography>, flex: 1 },
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
                rows={cm_payments_record}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}