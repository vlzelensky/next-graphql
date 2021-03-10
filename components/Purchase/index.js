import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_PURCHASE } from "../../mutations/purchase";
import { useMutation } from "@apollo/client";
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

const Purchase = ({ refetch }) => {
  const dispatch = useDispatch();
  const [removePurchase] = useMutation(DELETE_PURCHASE);
  const { purchases } = useSelector((globalState) => globalState.purchases);

  const deletePurchase = async (id) => {
    try {
      await removePurchase({
        variables: {
          input: { id },
        },
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
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
                <TableCell align="right">{el.date}</TableCell>
                <TableCell align="right">
                  <button
                    className="action-btn"
                    onClick={() => editPurchase(el.id)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => deletePurchase(el.id)}
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
