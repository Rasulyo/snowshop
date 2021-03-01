import {Grid, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';

const Company = () => {
    return (
        <div>
            <Navbar />

            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                    <img style={{ width: "100%" }} alt="snowbord" src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/11/28/e4340b97-ee44-4756-9161-4fddb1a1673b/28-winters-nitro-knut-eliassen-carving" />

                </Grid>

                <Grid item xs={12} sm={12} md={12}>

                    <Typography align="center">Company Since 1991</Typography>
                    <Typography align="center">Never Summer’s reputation of quality and durability began in the early years of snowboarding.
                        Designing and building snowboards since 1991 has given us years of experience in testing and
                        perfecting our snowboard designs and construction methods. The end result of our experience
                        coupled with a close working relationship with the world’s leading raw materials manufacturers
                        and engineers allows us to bring you the most durable, high performance boards on the planet!
                        Each board is carefully handcrafted in our Denver, Colorado factory to precision tolerances.
                        Our domestic manufacturing and our ability to improve upon existing technologies resulted in
                        Never Summer being awarded the first patent on any type of hybrid camber technology.
                        We allow only the world’s best snowboard shops to sell our products.</Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="h5">Focusing less on excessive promotion and hype, and more on using the highest quality materials,
                        craftsmanship, and customer service has made Never Summer the world’s premier independent board company.</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6">Never Summer Factory</Typography>
                    <Typography variant="h6">Each board is carefully handcrafted in our Denver,
                        Colorado factory to precision tolerances.

                        Business hours are Monday-Friday between 9 am and 4 pm.</Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography>Address</Typography>
                    <Typography>Never Summer Industries
                        3838 Eudora Way
                        Denver, CO 80207</Typography>
                    <Typography>
                        Phone
                    </Typography>
                    <Typography>
                        (303) 320-1813
                    </Typography>
                    <Typography>
                        Email
                    </Typography>
                    <Typography>
                        info@neversummer.com
                    </Typography>
                </Grid>

            </Grid>

        </div>
    );
};

export default Company;