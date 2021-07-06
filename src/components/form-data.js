import React , { Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {  withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class FormData extends Component {
   
    userData;

    constructor (props)  {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            fname: '',
            lname:'',
            email: '',
            phone: ''
        }
        
    }
    
    // Form event
    onChangefirstName(e) {
        this.setState({ fname: e.target.value})
    }

    onChangelastName(e){
        this.setState({lname: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onChangePhone(e){
        this.setState({phone: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

    }

    //React Lifecycle

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                fname: this.userData.fname,
                lname: this.userData.lname,
                email: this.userData.email,
                phone: this.userData.phone
            })
            
        } else {
            this.setState({
                fname: '',
                lname: '',
                email: '',
                phone: ''
            })
            
        }
    }

    //Update Local storage
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render(){
        const { classes } = this.props
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography><br></br>
                <form className={classes.form} onSubmit={this.onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={this.state.fname}
                        onChange={this.onChangefirstName}

                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={this.state.lname}
                        onChange={this.onChangelastName}

                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        type="phone"
                        id="phone"
                        autoComplete="phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" /> }
                        label="Your contact details will be shared with TØyen Unlimited"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        );
     }
}
export default withStyles(styles, {withTheme:true}) (FormData)
