import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import { Grid, MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import invoices from '../invoices.json';
import suppliers from '../SUPPLIER.json';
import { AppBar, IconButton, Toolbar } from '@mui/material';

const InvoiceView = () => {

  const { id } = useParams();
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    invoice: '',
    billingDate: '',
    dueDate: '',
    supplier: '',
    total: '',
  });

  useEffect(() => {
    console.log(id)
    const invoiceData = invoices.find(invoice => invoice.id === id);

    console.log(invoiceData)

    if (invoiceData) {
      setFormData({
        invoice: invoiceData.invoice,
        billingDate: invoiceData.billingDate,
        dueDate: invoiceData.dueDate,
        supplier: invoiceData.supplier,
        total: invoiceData.total,
      });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a una API
    console.log(formData);
    navigate('/'); // Redirige a la página de listado de facturas después de editar
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
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Box sx={{ boxShadow: 3, p: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Invoice {formData.invoice}
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
                  disabled
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
                  disabled
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
                  disabled
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth required size="small">
                  <InputLabel>Supplier</InputLabel>
                  <Select
                      label="Supplier"
                      value={formData.supplier} // Usar el valor actual del campo supplier en el formulario
                      name="supplier"
                      onChange={handleInputChange}
                      disabled
                  >
                      {suppliers.map((supplier) => (
                          <MenuItem key={supplier.id} value={supplier.empresa}>
                          {supplier.empresa}
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
                  disabled
                />
              </Grid>
        </Grid>  
          </form>
        </Box>
      </Container>
    </div>

  );
};

export default InvoiceView;
