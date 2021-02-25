import NavBar from "../../components/NavBar/navbar.js";
import Quantity from "../../components/Quantity";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const products = [
  {
    description: "Драже M&Ms с молочным шоколадом",
    weight: "45 г",
    price: "49,49 ₽",
  },
  {
    description: "Шоколад Ritter Sport темный с начинкой Марципан",
    weight: "100 г",
    price: "136,89 ₽",
  },
  {
    description: "Шоколадные конфеты Merci Ассорти",
    weight: "250 г",
    price: "409,99 ₽",
  },
  {
    description: "Пряники Яшкино шоколадные",
    weight: "350 г",
    price: "86,39 ₽",
  },
  {
    description:
      "Шоколад Bucheron с горькой клюквой, миндалем и фисташками 72%",
    weight: "100 г",
    price: "208,49 ₽",
  },
];

export default function Post() {
  return (
    <NavBar>
      <div className="container">
        <div className="main-box">
          <h1>Select products</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h2>Description</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Weight</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Price</h2>
                  </TableCell>
                  <TableCell align="right">
                    <h2>Quantity</h2>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((el, i) => (
                  <TableRow key={i}>
                    <TableCell>{el.description}</TableCell>
                    <TableCell align="right">{el.weight}</TableCell>
                    <TableCell align="right">{el.price}</TableCell>
                    <TableCell align="right">
                      <Quantity />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button style={{ margin: "0" }} className="gradient-btn">
            Add
          </button>
        </div>
      </div>
    </NavBar>
  );
}
