import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  tos: yup.bool().oneOf([true], "You must agree to our Terms of Service"),
});
