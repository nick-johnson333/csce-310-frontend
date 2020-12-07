import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container, Tab, Tabs } from '@material-ui/core'
import theme from './theme.js'

import HeaderBar from "./HeaderBar.js"
import Player from "./tabs/Player.js";
import Team from "./tabs/Team.js";
import Game from "./tabs/Game.js";
import Season from "./tabs/Season.js";
import About from "./tabs/About.js";

function App() {

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        padding={4}
        maxWidth='md'
      >
          
        <HeaderBar />
        
        <Tabs 
          value={tabIndex} onChange={handleTabIndex} 
          centered variant='fullWidth'
          style={{ paddingBottom:40 }}
          TabIndicatorProps={{ style: { background: "#ffffff" } }}
        >
          <Tab label="Player" value={0} />
          <Tab label="Team" value={1} />
          <Tab label="Game" value={2} />
          <Tab label="Season" value={3} />
          <Tab label="About" value={4} />
        </Tabs>
        
        {tabIndex === 0 && (<Player />)}
        {tabIndex === 1 && (<Team />)}
        {tabIndex === 2 && (<Game />)}
        {tabIndex === 3 && (<Season />)}
        {tabIndex === 4 && (<About />)}

      </Container>
    </ThemeProvider>
  );
}

export default App;