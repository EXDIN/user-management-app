import Container from "@mui/material/Container";
import { UserForm } from "../../../Components";
import { addUser, AppDispatch } from "../../../Store";
import { useDispatch } from "react-redux";
import { UserType } from "../../../Types";
import { useNavigate } from "react-router-dom";
import { PagesRouts } from "../../../Routing";

export default function AddUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const handleSubmit = (data: UserType) => {
        dispatch(addUser(data));
        navigate(PagesRouts.Users);
    };
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
            <UserForm onSubmit={handleSubmit}></UserForm>
        </Container>
    );
}
