import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { jsondata } from "../../pages/Home";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FormTable({ datas,changeData }) {
  const classes = useStyles();
  const history=useHistory();


  
  const handleDelete=(id)=>{
    //   const clonnedstate=[...jsondata]
//    let jsondata=clonnedstate.filter(item=> item.id !==id)
changeData(datas.filter(item=> item.id !==id))
  }

  return (
    <>
      <Button variant="contained" color="primary" style={{float:"right"}} onClick={()=>{history.push('/adduser')}}>
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gmail</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data,idx) => (
              <TableRow key={idx+1}>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>
                  <div className="disp-felx" style={{ display: "flex" }}>
                    <Button variant="contained" color="primary" onClick={()=>history.push(`/edituser/${data.id}`)}>
                      Edit
                    </Button>
                    <p className="gap" style={{ width: "10px" }}></p>
                    <Button variant="contained" color="secondary" onClick={()=>handleDelete(data.id)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
