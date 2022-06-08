import React, { useContext } from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Switch} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import {ThemeContext} from './contexts/ThemeContext';
import {LanguageContext} from './contexts/LanguageContext';
import {words} from './locale/words';

function Navbar(props) {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { classes } = props;
  const {search, flag} = words[language].navbar;
  return (
    <div>
      <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit' >
            App Title
          </Typography>
          <Switch onChange={toggleTheme}/>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);