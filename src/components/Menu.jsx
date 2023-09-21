import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Outlet, Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 5, sm: 5, md: 5 }}>
            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://static.vecteezy.com/system/resources/previews/004/572/128/non_2x/invoice-line-icon-logo-illustration-free-vector.jpg"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/invoices">FACTURAS</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://kawaiiaccesorios.com/wp-content/uploads/2017/05/proveedor.png"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/suppliers">PORVEEDORES</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkl8UZIT3DteqyMQfhHC6UkSsXyiGVixxl7dxn4U59w&s"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/payments-record">REGISTRO DE PAGOS</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://static.vecteezy.com/system/resources/thumbnails/000/356/060/small/1__2845_29.jpg"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/cancel-modify-payments-record">PAGOS MODIFICADOS</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://cdn-icons-png.flaticon.com/512/4334/4334537.png"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/late-payment-table">PAGOS ATRASADOS</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://cdn-icons-png.flaticon.com/512/5674/5674015.png"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/report-menu">PAGOS ATRASADOS</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

      </Box>
      <Outlet />
    </div>
  );
}
