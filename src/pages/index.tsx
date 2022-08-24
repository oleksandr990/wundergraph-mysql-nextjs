// ** MUI Imports
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

// ** Styled Component Import
import { useRouter } from "next/router";

// ** Demo Components Imports
import Table from "src/views/dashboard/Table";

import {
  AuthProviders,
  useLiveQuery,
  useWunderGraph,
  withWunderGraph,
} from "../../components/generated/nextjs";

const Dashboard = () => {
  const router = useRouter();

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  );
};

export default withWunderGraph(Dashboard);
