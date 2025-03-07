import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

type Props = {
  colCount: number;
};

export default async function TableLoading({ colCount }: Props) {
  const array = new Array(colCount).fill(0);
  return (
    <Table>
      <TableBody>
        <TableRow>
          {array.map((k, i) => (
            <TableCell key={i} sx={{ minHeight: 10 }}></TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
