import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Outlet, Link } from 'react-router-dom';

export default function ReportMenu() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 5, sm: 5, md: 5 }}>
            <Grid item xs={1} sm={1} md={1}>
                <Card >
                    <CardContent>
                        <CardMedia
                            sx={{ height: 240, width: '100%' }}
                            image="https://cdn-icons-png.flaticon.com/512/4334/4334537.png"
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" component={Link} to="/late-payment-table">REPORT MENU</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>

      </Box>
      <Outlet />
    </div>
  );
}
