import './App.css';
import { Box } from '@mui/material';
import {Route, Switch} from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Articles from './pages/Articles';
import Admin from './admin/Admin';
import ArticleUpsert from './admin/ArticleUpsert';

const App = () => {

  return (
    <div>
      <Drawer />
      <Box component="main" sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact from="/contact" render={props => <Contact {...props} />} />
          <Route exact from="/about" render={props => <About {...props} />} />    
          <Route exact from="/articles" render={props => <Articles {...props} />} />    
          <Route exact from="/admin" render={props => <Admin {...props} />} />      
          <Route exact from="/article/create" render={props => <ArticleUpsert {...props} />} />
          <Route exact from="/article/edit/:id" render={props => <ArticleUpsert {...props} />} />
          <Route exact from="/article/delete/:id" render={props => <ArticleUpsert {...props} />} />
        </Switch>
      </Box>
    </div>
  );
}

export default App;
