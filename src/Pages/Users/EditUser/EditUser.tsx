import Container from "@mui/material/Container";
import { UserForm } from "../../../Components";
import {
    editUser,
    AppDispatch,
    selectUserById,
    AppState,
} from "../../../Store";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "../../../Types";
import { useNavigate, useParams } from "react-router-dom";
import { PagesRouts } from "../../../Routing";

export default function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: AppState) =>
        selectUserById(state, Number(id))
    );
    const dispatch = useDispatch<AppDispatch>();
    const handleSubmit = (data: UserType) => {
        dispatch(editUser(data));
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
            <UserForm initialData={user} onSubmit={handleSubmit}></UserForm>
        </Container>
    );
}
