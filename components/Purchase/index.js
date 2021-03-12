import Router from "next/router";
import PurchaseRow from "../Purchase/purchaserow";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const Purchase = ({ refetch }) => {
  const { purchases } = useSelector((globalState) => globalState.purchases);

  const editPurchase = (id) => {
    Router.push("/edit/" + id);
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h2>Purchase</h2>
              </TableCell>
              <TableCell align="right">
                <h2>Date</h2>
              </TableCell>
              <TableCell align="right">
                <h2>Actions</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchases.map((el, i) => (
              <PurchaseRow el={el} i={i} refetch={refetch}></PurchaseRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Purchase;
