import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Purchase = ({ purchases }) => {
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
                    style={{
                      color: "grey",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      focus: {
                        outline: "none",
                      },
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

const mapStateToProps = (state) => {
  return {
    purchases: state.purchases.purchases,
  };
};

export default connect(mapStateToProps)(Purchase);
