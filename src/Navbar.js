import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Switch} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import {ThemeContext} from './contexts/ThemeContext';
import {withLanguageContext} from './contexts/LanguageContext';
import {words} from './words';

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const {isDarkMode, toggleTheme} = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const {search, flag} = words[language].navbar
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
                placeholder={search}
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
}

export default withLanguageContext(withStyles(styles)(Navbar));