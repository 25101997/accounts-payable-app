import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Container, Grid, Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import suppliers from '../SUPPLIER.json'
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function SupplierTable() {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
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
                Proveedores
              </Typography>
            </Grid>
            <Grid item xs={6} align="right">
              <Button size="small" variant="contained" color="primary" component={Link} to="/supplier-form">Add New</Button>
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
                  { field: 'empresa', headerName: <Typography fontWeight="bold">Empresa</Typography>, flex: 1 },
                  { field: 'nombre', headerName: <Typography fontWeight="bold">Contacto</Typography>, flex: 1 },
                  { field: 'telefono', headerName: <Typography fontWeight="bold">Telefono</Typography>, flex: 1 },
                  { field: 'registro_fiscal', headerName: <Typography fontWeight="bold">Registro</Typography>, flex: 1 },
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
                        onClick={() => handleEditClick(params.id)}
                        variant="contained" color="primary"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    ),
                  },
                ]}
                rows={suppliers}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}