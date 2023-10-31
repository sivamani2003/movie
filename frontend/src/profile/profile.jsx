import React, { Fragment, useEffect, useState } from 'react';
import { getUserBooking } from '../apis/api';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';

const Userprofile = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getUserBooking()
            .then((res) => setBookings(res.bookings))
            .catch((err) => console.log(err));
    }, []);
    console.log("User Object:", bookings.user);
    return (
        <Box style={{ width: '100%', display: 'flex' }}>
            {
                bookings && bookings.length > 0 && (
                    <Fragment>
                        <Box style={{ width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <AccountCircleIcon sx={{ fontSize: '10rem' }} />
                            {bookings.map((booking, index) => (
                                <Typography key={index} style={{ padding: '1rem', width: 'auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '6px' }}>
                                    Name: {booking.user.name}
                                </Typography>
                            ))}
                        </Box>
                        <Box style={{ width: '70%' }}>
                            {/* Additional content for profile */}
                        </Box>
                    </Fragment>
                )
            }
        </Box>
    );
};

export default Userprofile;
