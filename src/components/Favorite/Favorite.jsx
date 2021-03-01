import React, { useContext, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { localItem } from '../../contexts/LocalContext';
import { Navbar } from 'react-bootstrap';
import Header from '../../containers/Navbar/Navbar';
// import { cartContext } from '../../contexts/CartContext';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Favorite() {
    const classes = useStyles();
    const { getItemFromLocal, delFromToLocal, items } = useContext(localItem)
    // const {removeProductFromCart, addP   roductToCart, cart} = useContext(cartContext)

    console.log(items)
    useEffect(() => {
        getItemFromLocal()
    }, [])

    return (
        <>
        <Header/>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">brand</StyledTableCell>
                        <StyledTableCell align="right">price</StyledTableCell>
                        <StyledTableCell align="right">&times;</StyledTableCell>
                        {/* <StyledTableCell align="right">buy</StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.brand}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton onClick={delFromToLocal} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}