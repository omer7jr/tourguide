import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import QuiltedImageList from "../components/ImageCollage";
import ControlledAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import TransitionsModal from '../components/Modal';


const Tour = () => (
    <Container sx={{ width: 900 }}>
        <Typography variant='h3' component='h1' marginTop={3}>
            Explore the world in Vegas
        </Typography>
        <Box marginTop={3} display="flex">
            <img
                src="https://img.freepik.com/premium-photo/pretty-tourist-taking-photo-las-vegas-city-sign-by-cellphone-young-lady-traveler-shooting-famous-landmark-nevada-backpacker-las-vegas-trips-concept_678158-6335.jpg?w=1060"
                height={325}
            />
            <QuiltedImageList />
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3} marginBottom={3}>
                cool information about the ticket
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant='h6' component='h4' marginTop={3}>
                frequently asked questions
            </Typography>
            <ControlledAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
            >
            <TransitionsModal />
            </BottomNavigation>
        </Paper>
    </Container>
);

export default Tour;