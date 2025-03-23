import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    AppDispatch,
    deleteUser,
    fetchUsersThunk,
    getAllUsers,
} from "../../Store";
import { useEffect, useState } from "react";
import { UserType } from "../../Types";
import { Confirm } from "../../Components";

export default function Users() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<{
        name: string;
        id: number;
    } | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const { users, loaded, status, error } = useSelector(getAllUsers);

    useEffect(() => {
        if (!loaded) {
            dispatch(fetchUsersThunk());
        }
    }, [loaded, status, dispatch]);

    const onDelete = (userId: number, userName: string) => {
        setSelectedUser({ name: userName, id: userId });
        setDialogOpen(true);
    };

    const handleConfirm = () => {
        dispatch(deleteUser(Number(selectedUser?.id)));
        handleClose();
    };

    const handleClose = () => {
        setDialogOpen(false);
        setSelectedUser(null);
    };

    const columns: GridColDef<UserType>[] = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "number",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            renderCell: (params) => params.row.address?.city || "",
        },
        {
            field: "street",
            headerName: "Street",
            flex: 1,
            renderCell: (params) => params.row.address?.street || "",
        },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            filterable: false,
            flex: 1,
            renderCell: (params) => {
                const id = params.row.id;
                const userName = params.row.name;
                return (
                    <>
                        <Button
                            size='small'
                            variant='contained'
                            color='primary'
                            component={Link}
                            to={`/users/edit/${id}`}
                            style={{ marginRight: 8 }}
                        >
                            Edit
                        </Button>
                        <Button
                            size='small'
                            variant='outlined'
                            color='error'
                            onClick={() => onDelete(id, userName)}
                        >
                            Delete
                        </Button>
                    </>
                );
            },
        },
    ];

    if (error) {
        return <div>{error}</div>;
    }

    if (status === "loading") {
        return <div>Завантаження користувачів…</div>;
    }

    return (
        <div style={{ width: "100%" }}>
            <DataGrid<UserType> rows={users} columns={columns} />
            <Confirm
                open={isDialogOpen}
                onClose={handleClose}
                onConfirm={handleConfirm}
                userName={selectedUser?.name || ""}
            />
        </div>
    );
}
