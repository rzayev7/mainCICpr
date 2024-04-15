import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImpersonationCard() {
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  const cardStyle = {
    maxWidth: 345,
    backgroundColor: '#141b2d',
    position: 'relative',
    overflow: 'hidden',
    marginLeft: 2,
    borderRadius: 5, // Border radius
  };
  const imageUrls = [
    './capture_20240414141932725.png',
    './capture_20240414142415345.png',
    './capture_20240414142242595.png',
  ];
  return (
    <div style={{ display: 'flex' }}>
      {imageUrls.map((image,index) => (
        <Card
          key={index}
          sx={cardStyle}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <CardMedia
            component="img"
            src={image}
            autoPlay={isMouseOver}
            loop
            muted
            sx={{
              height: 240,
              objectFit: 'cover',
            }}
          />
          <CardContent sx={{ color: 'white' }}>
            <Typography gutterBottom variant="h5" component="div">
              Impersonation
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Tags: #RovshanNajaf, #Socar
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="error">
              Report Hosting
            </Button>
            <Button size="small" color="error">
              Report DNS Registrar
            </Button>
            <Button size="small" color="error">
              Report Advertisement
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
