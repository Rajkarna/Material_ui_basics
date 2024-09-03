import { Add as AddIcon, CalendarToday, CalendarTodayOutlined, MoreVert, Pets, Send, SendAndArchive } from '@mui/icons-material'
import { Button, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'


const Add = () => {
   
            const [open, setOpen] = useState(false);
            const handleOpen = () => {
                setOpen(true);
            };
            const handleClose = () => {
                setOpen(false);
            };

            return (
                <>
                    <Tooltip
                        title="add"
                        onClick={handleOpen}
                        sx={{ position: 'fixed', bottom: 10, left: { xs: 'calc(50% - 18px)', sm: 10, } }}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'white',
                                p: 4,
                                borderRadius: 2,
                                width: { xs: '90%', sm: 400 },
                            }}
                        >
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add a new post
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Please fill in the form
                            </Typography>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                sx={{ mt: 2 }}
                            />
                            <Stack direction="row" spacing={1} sx={{ mt: 2,color:"red" }}>
                                <Pets />
                                <CalendarTodayOutlined />
                                <SendAndArchive />
                                <MoreVert />
                            </Stack>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Send />}
                                    sx={{ mt: 2 }}
                                >
                                    Post
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                </>
            );
        }

export default Add