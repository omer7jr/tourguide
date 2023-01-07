import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body4"
          },
          style: {
            fontSize: 11
          }
        },
        {
        props: {
          variant: "body5"
        },
        style: {
          fontSize: 9
        }
        }
      ]
    }
  }
})

const ActionAreaCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <Card elevation={3} sx={{ maxWidth: 345, height: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={tour.image}
            alt="water falls"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {tour.name}
            </Typography>
            <Box sx={{
              display: "flex",
              alignItems: "center",
            }}
            >
              <AccessTimeFilledIcon sx={{ width: 15 }} />
              <Typography variant="body3" color="text.secondary" marginLeft={.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <ThemeProvider theme={theme}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 7
            }}
            >
              <Rating name="read-only" readOnly value={tour.rating} size='small' precision={0.5} />
              <Typography variant="body4" color="text.secondary" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body5" color="text.secondary" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            </ThemeProvider>
            <Typography variant="h6" component="h3" marginTop={0.5}>
              From ${tour.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ActionAreaCard;