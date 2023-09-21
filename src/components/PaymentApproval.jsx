import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function PaymentApproval() {
  const [formData, setFormData] = useState({
    id: '',
    supplier: '',
    date: '',
    payment_promise: '',
    currency: ''
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
                Payment Approval
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    size="small"
                    label="Quotation"
                    name="quotation"
                    value={formData.quotation}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    label="Amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Supplier"
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Currenci"
                    name="currenci"
                    value={formData.currenci}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="numer"
                    label="Products / Services"
                    name="products_services"
                    value={formData.products_services}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<VisibilityIcon />}
                    >
                        See Quotation
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button
                    variant="contained"
                    color="error" // Puedes ajustar el color según tus preferencias
                    fullWidth
                    startIcon={<CancelIcon />} // Ícono de Rechazar
                    >
                    Decline
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button
                    variant="contained"
                    color="success" // Puedes ajustar el color según tus preferencias
                    fullWidth
                    startIcon={<CheckCircleIcon />} // Ícono de Aprobar
                    >
                    Approve
                    </Button>
                </Grid>
                
              </Grid>
            </form>
        </Box>
      </Container>
    </div>
    
  );
}
