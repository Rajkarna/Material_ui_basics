import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    })

    const Search = styled(Box)({
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '0 10px',
        width: '40%',
    })

    const Iconlist = styled(Box)(({ theme }) => ({
        display: 'none',
        gap: '20px',
        alignItems: 'center',
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }));

    return (
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>RAWAR</Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Iconlist>
                    <Badge badgeContent={4} color="error">
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} sx={{ width: 24, height: 24 }} />
                </Iconlist>
                <UserBox>
                    <Avatar onClick={() => setOpen(true)}
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography variant="span">Raj</Typography>
                </UserBox>
                <Menu
                  
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
