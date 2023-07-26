import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from 'formik';
import { useCallback } from 'react';
import * as yup from 'yup';
import Header from '../../components/Header';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('First Name is required'),
    lastName: yup
        .string()
        .required('Last Name is required'),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone is not valid")
        .required("Contact Number is required"),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    address1: yup
        .string()
        .required('Address 1 required'),
    address2: yup
        .string()
        .required('Address 2 required'),
});

const Profile = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address1: "",
            address2: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { errors, values, handleBlur, handleChange, handleSubmit, touched, handleReset } = formik;
    
    const showResetBtn = useCallback(() => {
        return Object.values(values).every((val) => val !== "")
    }, [values]);

    return (git
        <Box
            m="20px"
        >
            <Header title='CREATE USER' subtitle='Create a New User Profile' />
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Contact Number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contact}
                        name="contact"
                        error={!!touched.contact && !!errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address 1"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address1}
                        name="address1"
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Address 2"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address2}
                        name="address2"
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>
                <Box display="flex" justifyContent={`${showResetBtn() ? "space-between" : "end"}`} mt="20px">
                    {
                        showResetBtn() &&
                        <Button type="submit" color="secondary" onClick={handleReset} variant="contained">
                            Reset
                        </Button>
                    }
                    <Button type="submit" color="secondary" variant="contained">
                        Create New User
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Profile;