import { ContactEmergency, Home, Mail, Notifications, People, Pets } from '@mui/icons-material'
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }} p={2} flex={1}>
      <Box position={'fixed'}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Peoples" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactEmergency />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Pets />
          </ListItemIcon>
          <ListItemText primary="Pets" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
          </ListItemIcon>
          <ListItemText primary="Moon" />
        </ListItem>

      </List>
      </Box>
      
    </Box>
  )
}

export default Sidebar