import React, {useState} from 'react';
import {Modal, Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function AuthenticationModal({type}){

    const [modalStyle] = useState(getModalStyle());
    const classes = useStyles();

    return (
        <Modal>
            <div style={modalStyle} className={classes.paper}>
                <input placeholder="Can u see me"/>
            </div>
        </Modal>
    )
}

export default AuthenticationModal;