import React, { Component } from 'react';
import {
  Avatar, 
  Button, 
  CssBaseline, 
  FormControl, 
  FormControlLabel, 
  Checkbox, 
  Input, 
  InputLabel, 
  Paper, 
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import {LanguageContext} from './contexts/LanguageContext';
import {words} from './words';

class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const {language, changeLanguage} = this.context;
    const {classes} = this.props;
    const {signIn, email, password, remember} = words[language].form;
    const {english, japanese, vietnamese} = words[language].form.language;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">{english}</MenuItem>
            <MenuItem value="japanese">{japanese}</MenuItem>
            <MenuItem value="vietnamese">{vietnamese}</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel control={<Checkbox color='primary'/>} label={remember}></FormControlLabel>
            <Button 
              variant='contained' 
              type='submit' 
              fullWidth 
              color='primary'
              className={classes.submit}
            >{signIn}</Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);