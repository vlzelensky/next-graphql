import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { removePurchase } from "../../redux/actions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Purchase = () => {
  const dispatch = useDispatch();
  const { purchases } = useSelector((globalState) => globalState.purchases);

  const deletePurchase = (id) => {
    dispatch(removePurchase(id));
  };

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
              <TableRow key={i}>
                <TableCell>{el.title}</TableCell>
                <TableCell align="right">
                  {el.date.toLocaleDateString("ru-RU")}
                </TableCell>
                <TableCell align="right">
                  <button
                    onClick={() => editPurchase(el.id)}
                    style={{
                      color: "grey",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => deletePurchase(el.id)}
                    style={{
                      color: "grey",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Purchase;
