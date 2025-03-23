import Container from "@mui/material/Container";
import { UserForm } from "../../../Components";
import { addUser } from "../../../Store";
import { UserType } from "../../../Types";
import { useNavigate } from "react-router-dom";
import { PagesRouts } from "../../../Routing";
import { UserApi } from "../../../Services";
import { useAppDispatch } from "../../../Hooks";

export default function AddUser() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmit = (data: UserType) => {
        try {
            UserApi.addUserFetch(data);
        } catch (error) {
            console.log(error);
        }

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
