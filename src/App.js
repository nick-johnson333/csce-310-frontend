import {useRoutes} from 'hookrouter';

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme.js'

import HeaderBar from "./HeaderBar.js"
import TabBar from "./TabBar.js"
import Player from "./tabs/Player.js";
import Team from "./tabs/Team.js";
import Game from "./tabs/Game.js";
import Season from "./tabs/Season.js";

const routes = {
    '/': () => <Player />,
    '/team': () => <Team />,
    '/game': () => <Game />,
    '/season': () => <Season />
}; 

function App() {
  const routeResult = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
          
        <HeaderBar />
        <TabBar />
        {routeResult}
          
      </div>
    </ThemeProvider>
  );
}

export default App;