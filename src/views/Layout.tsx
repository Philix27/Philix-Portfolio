import React from 'react'
import Head from 'next/head'
import Footer from './globalComps/Footer/Footer'
import Navbar from './globalComps/Navbar/Navbar'

export default function Layout(props) {
    return (
        < >
             <Head>
                <title>Eligbue Felix</title>
                <meta name="portfolio" content="Created by Eligbue" />
                {/* <link rel="stylesheet" href="/styles/index.css" /> */}
            </Head> 
            <Navbar />
            {props.children}    
            <Footer/> 
        </>
    )
}
