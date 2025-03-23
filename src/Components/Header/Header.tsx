import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { PagesRouts } from "../../Routing";
import { darken } from "@mui/material/styles";

export default function Header() {
    return (
        <AppBar position='static' sx={{ bgcolor: "#123456", height: "64px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: "50px" }}>
                    <Button
                        color='inherit'
                        component={Link}
                        to={PagesRouts.Users}
                        sx={{
                            "&:hover": {
                                bgcolor: darken("#123456", 0.2),
                            },
                        }}
                    >
                        USERS
                    </Button>
                    <Button
                        color='inherit'
                        component={Link}
                        to={PagesRouts.Users + "/" + PagesRouts.AddUser}
                        sx={{
                            "&:hover": {
                                bgcolor: darken("#123456", 0.2),
                            },
                        }}
                    >
                        Add new user
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
