import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TextField, Button, Box, Typography } from "@mui/material";
import { UserType } from "../../Types";

const userSchema = z.object({
    name: z.string().min(3, "The name must contain at least 3 characters."),
    email: z.string().email("Invalid format email"),
    phone: z.string().optional(),
});

type UserFormData = z.infer<typeof userSchema> & { id?: number };

type UserFormProps = {
    initialData?: UserType;
    onSubmit: (data: UserType) => void;
};

export default function UserForm({ initialData, onSubmit }: UserFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema),
        defaultValues: initialData || {
            id: 0,
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmitHandler: SubmitHandler<UserFormData> = (data) => {
        if (initialData) {
            data.id = initialData.id;
        }
        onSubmit(data as UserType);
    };

    return (
        <Box
            component='form'
            noValidate
            onSubmit={handleSubmit(onSubmitHandler)}
            sx={{
                maxWidth: 400,
                height: "100%",
                mx: "auto",
                p: 5,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Typography variant='h5' gutterBottom textAlign='center'>
                {initialData ? "Edit user" : "Add user"}
            </Typography>

            <TextField
                label='Name'
                variant='outlined'
                fullWidth
                margin='normal'
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextField
                label='Email'
                variant='outlined'
                fullWidth
                margin='normal'
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextField
                label='Phone number'
                variant='outlined'
                fullWidth
                margin='normal'
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
            />

            <Box mt={3} textAlign='center'>
                <Button type='submit' variant='contained' color='primary'>
                    {initialData ? "Save" : "Add"}
                </Button>
            </Box>
        </Box>
    );
}
