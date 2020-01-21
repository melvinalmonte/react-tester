import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Banner } from '../components/banner/Banner'
import {Grid} from '../components/grid/Grid'

export const MainPage = () => {
    return(
        <Layout>
            <Banner/>
            <Grid/>
        </Layout>
    )
};