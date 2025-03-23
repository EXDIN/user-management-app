import Container from "@mui/material/Container";
import { UserForm } from "../../../Components";
import { editUser, selectUserById, AppState } from "../../../Store";
import { useSelector } from "react-redux";
import { UserType } from "../../../Types";
import { useNavigate, useParams } from "react-router-dom";
import { PagesRouts } from "../../../Routing";
import { UserApi } from "../../../Services";
import { useAppDispatch } from "../../../Hooks";

export default function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: AppState) =>
        selectUserById(state, Number(id))
    );
    const dispatch = useAppDispatch();
    const handleSubmit = (data: UserType) => {
        try {
            UserApi.editUserFetch(data);
        } catch (error) {
            console.log(error);
        }

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
