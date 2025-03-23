import React, { useState } from "react";
import useStore from "../store/store";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const issueColumns = [
  //   {
  //     id: "id",
  //     label: "Issue ID",
  //     minWidth: 100,
  //   },
  { id: "fieldName", label: "Field Name", minWidth: 120 },
  { id: "rule", label: "Rule", minWidth: 200 },
  {
    id: "issueDescription",
    label: "Issue Description",
    minWidth: 200,
  },
  {
    id: "remediation",
    label: "Remediation",
    minWidth: 200,
  },
];

export const IssueTrackingTable = () => {
  const issuesTrackingData = useStore((state) => state.issuesTrackingData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ backgroundColor: "#D3D3D3" }}>
              <TableRow>
                {issueColumns.map((column) => {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {issuesTrackingData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {issueColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={issuesTrackingData?.length ?? 0}
          rowsPerPage={rowsPerPage ?? 0}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
