"use client"
import './globals.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import {Inter} from 'next/font/google'
import {Container} from "react-bootstrap";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <header>
            <Navbar className="header justify-content-between " bg="dark" data-bs-theme="dark">
                <Container>
                   <div>
                       <Image className="avatar" src="/user.png" roundedCircle/>
                       <Form inline={true} className="header-form">
                           <Form.Control
                               placeholder="Username"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                           />
                       </Form>
                   </div>

                    <div>
                        <Image className="avatar"  src="/user.png" roundedCircle/>
                    </div>
                </Container>

            </Navbar>
        </header>

        <main>
            {children}
        </main>


        </body>
        </html>
    )
}
