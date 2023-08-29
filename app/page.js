'use client';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./page.module.css";
import {GrGithub} from "react-icons/gr";
import IconText from '../components/icon_text';
import {Nav} from "react-bootstrap";
import {BiHome} from "react-icons/bi";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {CgBitbucket} from "react-icons/cg";
import Form from "react-bootstrap/Form";
import AddCard from "@/components/add-card/AddCard";

export default function Home() {
    return (<Container>
            <Row>
                <Col sm={3} className="border-right full-height border-bottom">
                    <ul className="c-nav">
                        <li className="c-nav-item">Home</li>
                    </ul>

                </Col>
                <Col sm={9} className="right-area full-height border-bottom">



                            <Tab.Container  defaultActiveKey="overview">
                                <Row>
                                    <Col sm={9}>
                                <Nav fill variant="underline" className="flex-between">
                                    <Nav.Item>
                                        <Nav.Link eventKey="overview"> <BiHome/> Overview</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link color="black" eventKey="github"> <AiFillGithub/> Github</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="gitlab"> <AiFillGitlab/> Gitlab</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="bitbucket"> <CgBitbucket/> Bitbucket</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                    </Col>
                                    <Col sm={3}>
                                        <Form inline={true} className="header-form">
                                            <Form.Control
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </Form>
                                    </Col>
                                </Row>

                                <Tab.Content>
                                    <Tab.Pane eventKey="overview">
                                        <div className="pt-3 c-flex">
                                            <AddCard/>
                                            <AddCard/>
                                            <AddCard/>
                                            <AddCard/>
                                            <AddCard/>
                                            <AddCard/>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="github">Second tab content</Tab.Pane>
                                    <Tab.Pane eventKey="gitlab">Second tab content</Tab.Pane>
                                    <Tab.Pane eventKey="bitbucket">Second tab content</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>



                </Col>
            </Row>
        </Container>)
}
