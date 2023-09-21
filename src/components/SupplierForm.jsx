import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function SupplierForm() {
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    telefono: '',
    correo: '',
    calle: '',
    ciudad: '',
    estado: '',
    codigo_postal: '',
    rfc: '',
    registro_fiscal: '',
    regimen_fiscal: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a una API
    console.log(formData);
  };

  return (
    <div>
      <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="go-back"
              component={Link} 
              to="/suppliers"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Go Back
            </Typography>
          </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ boxShadow: 3, p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Register New Supplier
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Empresa"
                    name="invoice"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="number"
                    label="Telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.correo}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Pais"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Calle"
                    name="calle"
                    value={formData.calle}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="number"
                    label="Codigo Postal"
                    name="codigo_postal"
                    value={formData.codigo_postal}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label=""
                    name="billingDate"
                    value={formData.rfc}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="number"
                    label="Registro Fiscal"
                    name="registro_fiscal"
                    value={formData.registro_fiscal}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Regimen Fiscal"
                    name="regimen_fiscal"
                    value={formData.regimen_fiscal}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
        </Box>
      </Container>
    </div>
    
  );
}
