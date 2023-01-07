import ActionAreaCard from "../components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json';
import Typography from '@mui/material/Typography';

const Home = () => (
    <div className="App">
        
        <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
                <>
                    <Typography
                        variant='h3'
                        component='h2'
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} Tours
                    </Typography>
                    <Grid container spacing={3}>
                        {city.tours.map((tour, index) => (
                            <ActionAreaCard tour={tour} key={index} />
                        ))}
                    </Grid>
                </>
            ))}
        </Container>
    </div>
);

export default Home