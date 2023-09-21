import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, MenuItem, Select, FormControl,InputLabel} from '@mui/material';
import { AppBar, IconButton, Toolbar, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import suppliers from '../SUPPLIER.json'

export default function InvoiceForm() {
  const [formData, setFormData] = useState({
    invoice: '',
    billingDate: '',
    dueDate: '',
    supplier: '',
    total: '',
    purchaseOrder: '',
    approvalManager:''
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
              to="/invoices"
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
              Register New Invoice
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Invoice"
                    name="invoice"
                    value={formData.invoice}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="date"
                    label="Billing Date"
                    name="billingDate"
                    value={formData.billingDate}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    type="date"
                    label="Due Date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth required size="small">
                    <InputLabel>Supplier</InputLabel>
                    <Select
                      label="Supplier"
                      value={formData.supplier}
                      name="supplier" // Asegúrate de tener esta línea para el manejo de cambios
                      onChange={handleInputChange}
                    >
                      {suppliers.map(supplier => (
                        <MenuItem key={supplier.id} value={supplier.nombre}>
                          {supplier.nombre}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
