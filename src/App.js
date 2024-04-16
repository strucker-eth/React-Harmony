import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

import alanBtn from '@alan-ai/alan-sdk-web';

import HarmonyCards from './components/HarmonyCards/HarmonyCards'; 
import Modal from './components/Modal/Modal'; 
import useStyles from './styles';
import services from './services'; 
import logo from './images/logo.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: 'e696dea14cc2f189f6bdc75e50d657342e956eca572e1d8b807a3e2338fdd0dc/stage', 
      onCommand: ({ command, data }) => {
        if (command === 'control') {
          
          switch (data.device) {
            case 'lights':
             
              break;
            case 'climate':
             
              break;
            case 'security':
              
              break;
           
            default:
              alanBtn().playText('Sorry, I did not understand that command.');
          }
        } else if (command === 'instructions') {
          setIsOpen(true);
          alanBtn().playText('Here are the instructions.');
        } else if (command === 'closeModal') {
          setIsOpen(false);
          alanBtn().playText('Closing the instructions.');
        }
        
      },
    });
  }, []);

  return (
    <div>
     <div className={classes.logoContainer}>
        {/* Logo and name side by side */}
        <img src={logo} alt="Harmony logo" style={{ width: '150px', height: '100px', marginTop: '10px', alignItems: 'center' }} />
       
      </div>
      {/* Tagline below logo and name */}
      <Typography variant="subtitle1" style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>
  Welcome to React Harmony, Click Chat to Start Managing your home.
</Typography>

      <HarmonyCards services={services} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
