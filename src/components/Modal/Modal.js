import React from 'react';
import { Typography, Divider, Chip, TextField, Button } from '@material-ui/core';
import SimpleModal from '@material-ui/core/Modal';
import emailjs from 'emailjs-com';

import useStyles from './styles';

const Modal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();
  let body;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'alan_ai', e.target, 'user_dhVImkgxaL27bxQ8pLPQ5')
      .then((result) => { console.log(result.text); }, (error) => { console.log(error.text); });
  };

  if (isOpen && showFeedback) {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Something went wrong? Send us some feedback</Typography>
        <br /> 
        <form className={classes.form} onSubmit={sendEmail}>
          <TextField name="name" label="Your name" variant="outlined" />
          <br />
          <TextField name="email" type="email" label="Your email" variant="outlined" />
          <br />
          <TextField name="feedback" multiline rows={5} helperText="Describe the problems that you've encountered." label="Feedback" variant="outlined" />
          <br />
          <Button type="submit" variant="outlined" color="primary">Send</Button>
        </form>
      </div>
    );
  } else {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Harmony AI Use Cases</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">Control Your Home</Typography>
          <div className={classes.chipContainer}>
            {['Lighting Control', 'Climate Adjustment', 'Morning Routine', 'Security Activation'].map((useCase) => (
              <Chip key={useCase} label={useCase} color="primary" className={classes.chip} />
            ))}
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: "Turn on the living room lights" or "Adjust the temperature to 22 degrees"
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">Enhance Your Comfort</Typography>
          <div className={classes.chipContainer}>
            {['Energy Saving', 'Entertainment Control', 'Package Notification', 'Emergency Assistance'].map((useCase) => (
              <Chip key={useCase} label={useCase} color="primary" className={classes.chip} />
            ))}
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: "Activate energy-saving mode" or "Notify me about package deliveries"
        </Typography>
      </div>
    );
  }

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      {body}
    </SimpleModal>
  );
};

export default Modal;
