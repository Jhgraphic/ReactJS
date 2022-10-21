import React from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const HomePage = () => {
    const history = useHistory();
    
    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <Button variant="contained" startIcon={<LoginIcon />} onClick={() => navigate('/login')}>
                Login
            </Button>
            <Button sx={{ marginLeft: 2, marginRight: 2 }} variant="contained" startIcon={<LogoutIcon />} onClick={() => navigate('/register')}>
                Register
            </Button>
            <Button variant="contained" startIcon={<HowToRegIcon />} onClick={() => navigate('/tasks')}>
                Tasks
            </Button>
        </div>
    );
}

export default HomePage;
