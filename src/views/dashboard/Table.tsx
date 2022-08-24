// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

// ** Types Imports
import { ThemeColor } from "src/@core/layouts/types";

import {
  useWunderGraph,
  withWunderGraph,
  AuthProviders,
  useMutation,
  useLiveQuery,
  useQuery,
} from "../../../components/generated/nextjs";

interface RowType {
  age: number;
  name: string;
  date: string;
  email: string;
  salary: string;
  status: string;
  designation: string;
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor;
  };
}

const DashboardTable = () => {
  const { result: todos } = useLiveQuery.Todos();

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.status === "ok" && todos.data.findManytodos.length !== 0 ? (
              <>
                {todos.data.findManytodos.map((row) => {
                  return (
                    <TableRow
                      hover
                      key={row.id}
                      sx={{
                        "&:last-of-type td, &:last-of-type th": { border: 0 },
                      }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.message}</TableCell>
                    </TableRow>
                  );
                })}
              </>
            ) : (
              <TableRow
                hover
                sx={{
                  "&:last-of-type td, &:last-of-type th": { border: 0 },
                }}
              >
                <TableCell colSpan={3}>No records found!</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DashboardTable;
