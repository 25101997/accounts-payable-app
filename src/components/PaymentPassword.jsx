import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

export default function PaymentPassword() {
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
              Payment Password
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="ID"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    size="small"
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
                    type="date"
                    label="Date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="date"
                    label="Payment Promise"
                    name="payment_promise"
                    value={formData.payment_promise}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="numer"
                    label="Currency"
                    name="currency"
                    value={formData.currency}
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
                    label="Document"
                    name="document"
                    value={formData.document}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="date"
                    label="Document Date"
                    name="document_date"
                    value={formData.document_date}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="text"
                    label="Invoice Type"
                    name="invoice_type"
                    value={formData.invoice_type}
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
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="number"
                    label="Total"
                    name="total"
                    value={formData.total}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    disabled
                  />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<PrintIcon />} // Agrega el ícono de impresión aquí
                    >
                        Print
                    </Button>
                </Grid>
              </Grid>
            </form>
        </Box>
      </Container>
    </div>
    
  );
}
