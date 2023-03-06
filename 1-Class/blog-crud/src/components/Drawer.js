import React from 'react';

import { Drawer as MUIDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const Drawer = props => {
    const { history } = props;

    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/')
        }, 
        {
            text: 'Articles',
            icon: <AssignmentIcon />,
            onClick: () => history.push('/articles')
        },
        {
            text: 'Contact',
            icon: <CreateIcon />,
            onClick: () => history.push('/contact')
        }, 
        {
            text: 'About',
            icon: <PersonIcon />,
            onClick: () => history.push('/about')
        },
        {
            text: 'Admin',
            icon: <SettingsIcon />,
            onClick: () => history.push('/admin')
        },
    ];

    return (
        <MUIDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                    <ListItem key={text} onClick={onClick}>
                        <ListItemButton>
                            { icon && <ListItemIcon>{icon}</ListItemIcon> }
                            <ListItemText primary={text} />
                        </ListItemButton>

                    </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    )
};

export default withRouter(Drawer);