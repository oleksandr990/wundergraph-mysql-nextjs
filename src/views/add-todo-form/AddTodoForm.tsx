// ** React Imports
import React, { ChangeEvent, MouseEvent, useState, useEffect } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useRouter } from "next/router";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import {
  AuthProviders,
  useLiveQuery,
  useWunderGraph,
  withWunderGraph,
  useMutation,
} from "../../../components/generated/nextjs";

interface State {
  password: string;
  showPassword: boolean;
}

const AddTodoForm = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const { mutate: addTodo, result: todoAdded } = useMutation.AddTodo();
  useEffect(() => {
    if (todoAdded.status === "ok") {
      setOpen(true);
      router.push("/");
    }
  }, [todoAdded]);

  // ** States
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const [confirmPassValues, setConfirmPassValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleConfirmPassChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassValues({
        ...confirmPassValues,
        [prop]: event.target.value,
      });
    };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({
      ...confirmPassValues,
      showPassword: !confirmPassValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          ToDo created successfully.
        </Alert>
      </Snackbar>
      <CardHeader title="New ToDo" titleTypographyProps={{ variant: "h6" }} />
      <CardContent>
        <form
          onSubmit={(e) => {
            addTodo({
              input: {
                message: e?.target?.message?.value || "",
                title: e?.target?.title?.value || "",
              },
            });
            e.preventDefault();
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                required
                name="title"
                label="Title"
                placeholder=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                name="message"
                required
                label="Message"
                placeholder=""
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button type="submit" variant="contained" size="large">
                  Create
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default withWunderGraph(AddTodoForm);
