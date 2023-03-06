import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';

const drawerWidth = 240;

const AppBar = props => {
    const {title} = props;    

    return (
        <MuiAppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >            
            <Toolbar>
                <CameraIcon sx={{mr: 1}}/>
                <Typography variant="h6" component="h2" color="inherit" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;