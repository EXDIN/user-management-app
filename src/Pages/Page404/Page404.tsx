import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { undefinedBackgroundImage } from "../../Constants";

export default function Page404() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                height: "calc(100vh - 64px)",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src={undefinedBackgroundImage} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    variant='contained'
                    onClick={handleGoBack}
                    sx={{
                        backgroundColor: "#123456",
                        color: "#fff",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        "&:hover": {
                            backgroundColor: "#0F2D4A",
                        },
                    }}
                >
                    Back
                </Button>
            </Box>
        </Box>
    );
}
