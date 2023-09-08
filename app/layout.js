"use client"
import './globals.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import {Inter} from 'next/font/google'
import InputGroup from 'react-bootstrap/InputGroup';
import {BiSearch} from "react-icons/bi";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={inter.className}>
    <header>
        <Navbar className="header justify-content-between c-container " bg="dark">
                <div className={'flex-between'}>
                    <Image className="avatar" src="/user.png" roundedCircle/>
                    <Form inline={'true'} className={'header-form'}>
                        <InputGroup className="c-input">
                            <Form.Control
                                placeholder="Search or jump to..."
                                aria-label="Search or jump to..."
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon2"><BiSearch/></InputGroup.Text>
                        </InputGroup>
                    </Form>
                </div>

                <div>
                    <Image className="avatar" src="/user.png" roundedCircle/>
                </div>

        </Navbar>
    </header>

    <main>
        {children}
    </main>


    <footer className={'footer c-container'}>
        <Image className="avatar" src="/user.png" roundedCircle/>
        <span>Project Management System</span>
    </footer>


    </body>
    </html>)
}
