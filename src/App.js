import React, { useState, useEffect } from 'react';

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
      key: 'e696dea14cc2f189f6bdc75e50d657342e956eca572e1d8b807a3e2338fdd0dc/stage', // Replace with your actual Alan AI key
      onCommand: ({ command, data }) => {
        if (command === 'control') {
          // Interface with HarmonyCard logic
          // For example, if the HarmonyCard components are controlled via state:
          switch (data.device) {
            case 'lights':
              // Call a function or set state to control lights
              break;
            case 'climate':
              // Call a function or set state to adjust climate
              break;
            case 'security':
              // Call a function or set state to activate security system
              break;
            // Add additional cases for other devices
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
        {/* You can add interactive voice command instructions or other relevant information here */}
        <img src={logo} className={classes.alanLogo} alt="Harmony logo" />
      </div>
      <HarmonyCards services={services} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Footer or additional components can go here */}
    </div>
  );
};

export default App;
