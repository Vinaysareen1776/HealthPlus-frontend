import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import signup_image from '../sigunup_image.gif';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} PaperProps={{style:{ overflow:'hidden',className: 'dialog-container' }}}>
      <DialogTitle className="dialog-title">
      <div className="display_flex">
<h2>Sign Up</h2>
<button onClick={handleClose} className="close-button float-right">
<span>×</span>
</button>
</div>
      </DialogTitle>
      <div className="dialog-content">
        <img src={signup_image} alt="avatar" />
        <p>Enter a mobile number</p>
        <div className="mobile-number-input">
          <span className="country-code">+91</span>
          <input type="text" placeholder="Enter your mobile number" className="input-field" />
        </div>
        <button className="sign-up-button">Sign Up</button>
      </div>
      <div className="login-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </Dialog>
  );
}

export default SimpleDialog;
