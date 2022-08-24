// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Demo Components Imports
import AddTodoForm from "src/views/add-todo-form/AddTodoForm";

const FormLayouts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={10}>
        <AddTodoForm />
      </Grid>
    </Grid>
  );
};

export default FormLayouts;
