'use client';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./page.module.css";
import {GrAdd, GrGithub} from "react-icons/gr";
import IconText from '../components/icon_text';
import {Button, Nav, Pagination} from "react-bootstrap";
import {BiHome, BiSearch} from "react-icons/bi";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {CgBitbucket} from "react-icons/cg";
import Form from "react-bootstrap/Form";
import ProjectCard from "@/components/project-card/projectCard";
import {IoIosAddCircle} from "react-icons/io";
import InputGroup from "react-bootstrap/InputGroup";
import  ProjectAdd from "@/components/project-add/projectAdd";
import {useState} from "react";


export default function Home() {

    function addOperation(){
        setShow(true);
        setIsNote(true);
    }

    function quickAddOperation(){
        setShow(true);
        setIsNote(false);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [isNote,setIsNote]=useState(false);
    return (
            <Row>
                <Col sm={3} className="border-right full-height border-bottom">
                    <ul className="c-nav">
                        <li className="c-nav-item c-nav-active">Home</li>
                        <li className="c-nav-item">Hided Projects</li>
                        <li className="c-nav-item">Setting</li>
                    </ul>

                </Col>
                <Col sm={9} className="right-area full-height border-bottom">
                    <Tab.Container defaultActiveKey="overview">
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
                                <Form inline className={'header-form'}>
                                    <InputGroup className="c-input">
                                        <Form.Control
                                            placeholder="Search or dump to..."
                                            aria-label="Search or dump to..."
                                            aria-describedby="basic-addon1"
                                        />
                                        <InputGroup.Text id="basic-addon2"><BiSearch/></InputGroup.Text>
                                    </InputGroup>
                                </Form>
                            </Col>
                        </Row>

                        <Tab.Content>
                            <Tab.Pane eventKey="overview">
                                <div className="pt-3 c-flex">


                                    <div className={'empty-card'}>
                                        <IoIosAddCircle size="60" alignmentBaseline={"baseline"}  variant="primary" onClick={addOperation} />
                                        <ProjectAdd show={show} handleClose={handleClose} isNote={isNote} ></ProjectAdd>
                                        <h3 className={'add-project'} >Add Project</h3>
                                        <Button variant="success" onClick={quickAddOperation} >Quick Add</Button>
                                    </div>

                                    <ProjectCard/>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="github">
                                <div className="pt-3 c-flex">
                                    <ProjectCard/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gitlab">
                                <div className="pt-3 c-flex">
                                    <ProjectCard/>
                                    <ProjectCard/>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="bitbucket">
                                <div className="pt-3 c-flex">
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>
                                    <ProjectCard/>

                                    <Pagination className={'mt-5 flex-row text-center'}>
                                        <Pagination.First />
                                        <Pagination.Prev />
                                        <Pagination.Item>{1}</Pagination.Item>
                                        <Pagination.Ellipsis />

                                        <Pagination.Item>{10}</Pagination.Item>
                                        <Pagination.Item>{11}</Pagination.Item>
                                        <Pagination.Item active>{12}</Pagination.Item>
                                        <Pagination.Item>{13}</Pagination.Item>
                                        <Pagination.Item disabled>{14}</Pagination.Item>

                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{20}</Pagination.Item>
                                        <Pagination.Next />
                                        <Pagination.Last />
                                    </Pagination>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>


                </Col>
            </Row>
    )
}
