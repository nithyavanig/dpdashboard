import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import useStore from "../store/store";
import ChatAssistanceModal from "./ChatAssistanceModal";
import { useState } from "react";
import RulesModal from "./RulesRefineModal";

const ruleColumns = [
  {
    id: "field_name",
    label: "Field Name",
    minWidth: 100,
  },
  { id: "rule_name", label: "Rule", minWidth: 350 },
  // { id: "rule_name", label: "Name", minWidth: 170 },
  { id: "rule_syntax", label: "Syntax", minWidth: 200 },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "left",
  },
];

const TableComponent = () => {
  const rulesData = useStore((state) => state.rulesData);
  const setOpenChatModal = useStore((state) => state.setOpenChatModal);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentRuleId, setCurrentRuleId] = useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRefineRule = (rowKey) => {
    //API call to refine rule
    console.log("refine rule: ", rowKey);
    setOpenChatModal(true);
    setCurrentRuleId(rowKey);
    // updateRuleData(rowKey);
    // updateRowsAfterDeletion(rowKey);
  };

  return (
    <>
      <RulesModal ruleId={currentRuleId} />
      {/* <ChatAssistanceModal ruleId={currentRuleId} /> */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ backgroundColor: "#D3D3D3" }}>
              <TableRow>
                {ruleColumns.map((column) => {
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
              {rulesData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {ruleColumns.map((column) => {
                        const value = row[column.id];
                        if (column.id === "action") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleRefineRule(row.id)}
                              >
                                Refine
                              </Button>
                            </TableCell>
                          );
                        } else if (column.id === "rule_name") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value?.length <= 0
                                ? "Not Available"
                                : value.map((item, index) => (
                                    <span key={index}>
                                      {index + 1}) {item}
                                      <br />
                                    </span>
                                  ))}
                            </TableCell>
                          );
                        } else {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
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
          count={rulesData?.length ?? 0}
          rowsPerPage={rowsPerPage ?? 0}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default TableComponent;
