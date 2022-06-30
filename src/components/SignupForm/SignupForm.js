import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../redux/actions/users";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};


const SignupForm = ({ }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setshowPasswordConfirmation] =
    useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    await dispatch(signupAction(userData))
      .then(() => navigate("/signin"))
      .catch((e) => console.error(e));
  };

  const handleInputChange = (e) => {
    userData[e.target.name] = e.target.value;
  };

  // const SignupSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(3, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Username name required"),
  //   email: Yup.string()
  //     .email("Email must be a valid email address")
  //     .required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  //   passwordConfirmation: Yup.string().required("Password is required"),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     email: "",
  //     password: "",
  //     passwordConfirmation: "",
  //   },
  //   validationSchema: SignupSchema,
  //   onSubmit: async () => {
  //     await dispatch(signupAction(formik.values))
  //       .then(() => navigate("/signin", { replace: true }))
  //       .catch((err) => console.error(err));
  //   },
  // });

  // const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <form autoComplete="off" noValidate onSubmit={handleSignup}>
      <Stack spacing={3}>
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <TextField
            fullWidth
            autoComplete="current-username"
            type="string"
            label="Username"
            name="username"
            // {...getFieldProps("username")}
            // error={Boolean(touched.username && errors.username)}
            helperText={"Enter your username"}
            onChange={handleInputChange}
          />
        </Stack>

        <Stack
          spacing={3}
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={animate}
        >
          <TextField
            fullWidth
            autoComplete="current-email"
            type="email"
            label="Email address"
            name="email"
            // {...getFieldProps("email")}
            // error={Boolean(touched.email && errors.email)}
            helperText={"Enter your email"}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            // {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon
                      icon={
                        showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={"Enter your password"}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            autoComplete="current-passwordConfirmation"
            type={showPasswordConfirmation ? "text" : "password"}
            label="Password Confirmation"
            name="passwordConfirmation"
            // {...getFieldProps("passwordConfirmation")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() =>
                      setshowPasswordConfirmation((prev) => !prev)
                    }
                  >
                    <Icon
                      icon={
                        showPasswordConfirmation
                          ? "eva:eye-fill"
                          : "eva:eye-off-fill"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={"Enter the password confirmation"}
            onChange={handleInputChange}
          />
        </Stack>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={animate}
        >
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Sign up
          </LoadingButton>
        </Box>
      </Stack>
    </form>
  );
};

export default SignupForm;
