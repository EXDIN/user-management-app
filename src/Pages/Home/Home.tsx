import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <Container
            maxWidth={false}
            sx={{
                bgcolor: "#f5f5f5",
                minHeight: "calc(100vh - 64px)",
                padding: "2rem",
                textAlign: "center",
                alignContent: "center",
            }}
        >
            <Typography variant='h4' component='h1' gutterBottom>
                Created by Ivan Lila
            </Typography>
        </Container>
    );
}
