'use client';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./page.module.css";
import {Button, Nav, Pagination} from "react-bootstrap";
import {BiHome, BiSearch} from "react-icons/bi";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {CgBitbucket} from "react-icons/cg";
import Form from "react-bootstrap/Form";
import ProjectCard from "@/components/project-card/projectCard";
import {IoIosAddCircle} from "react-icons/io";
import InputGroup from "react-bootstrap/InputGroup";
import ProjectAdd from "@/components/project-add/projectAdd";
import {useState} from "react";


export default function Home() {

    let dataResult = [
        {
            "id": "0",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "stars": "1.8k",
            "forks": "213",
            "source_type": "GitHub"

        }, {
            "id": "1",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "stars": "1.8k",
            "forks": "213",
            "source_type": "GitLab"

        }, {
            "id": "2",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "stars": "1.8k",
            "forks": "213",
            "views": "213",
            "source_type": "BitBucket"

        }, {
            "id": "3",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "stars": "1.8k",
            "forks": "213",
            "views": "213",
            "source_type": "BitBucket"

        }, {
            "id": "4",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "stars": "1.8k",
            "forks": "213",
            "views": "213",
            "source_type": "BitBucket"

        }, {
            "id": "5",
            "user_avatar": "https://avatars.githubusercontent.com/u/29520646?v=4",
            "project_title": "Java Project",
            "user_name": "Jolin",
            "project_description": "aaaaaaaaddddddddd",
            "contributor": "123",
            "used_by": "444",
            "views": "213",
            "stars": "1.8k",
            "forks": "213",
            "source_type": "BitBucket"
        }
    ];

    let cardItems = dataResult.map(items => {
        return <ProjectCard key={items.id} dataResult={items}></ProjectCard>
    })

    let githubCard = dataResult.filter(function (value, index, arr) {
        return dataResult[index].source_type === 'GitHub'
    }).map(items => {
        return <ProjectCard key={items.id} dataResult={items}></ProjectCard>
    });

    let gitlabCard = dataResult.filter(function (value, index, arr) {
        return dataResult[index].source_type === 'GitLab'
    }).map(items => {
        return <ProjectCard key={items.id} dataResult={items}></ProjectCard>
    });

    let bitBucketCard = dataResult.filter(function (value, index, arr) {
        return dataResult[index].source_type === 'BitBucket'
    }).map(items => {
        return <ProjectCard key={items.id} dataResult={items}></ProjectCard>
    });


    const [modalShow, setModal] = useState(false);
    const [isNote, setIsNote] = useState(false);


    const [page,setPage] = useState(1);
    function addOperation() {
        setModal(true);
        setIsNote(true);
    }

    return (
        <>
            <ProjectAdd show={modalShow} handleClose={() => setModal(false)}></ProjectAdd>
            <Row>
                <Col sm={3} className="border-right full-height border-bottom">
                    <ul className="c-nav">
                        <li className="c-nav-item c-nav-active">Home</li>
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
                                        <Nav.Link color="black" eventKey="github"> <AiFillGithub/> GitHub</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="gitlab"> <AiFillGitlab/> GitLab</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="bitbucket"> <CgBitbucket/> BitBucket</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={3}>
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
                            </Col>
                        </Row>

                        <Tab.Content>
                            <Tab.Pane eventKey="overview">
                                <div className="pt-3 ">




                                   <div className={'c-flex'}>
                                       <div className={'empty-card'} onClick={addOperation}>
                                           <IoIosAddCircle className={'mt-4'} size="60" alignmentBaseline={"baseline"}
                                                           variant="primary"
                                           />
                                           <h3 className={'add-project mt-2'}>Add Project</h3>
                                       </div>
                                       {cardItems}
                                   </div>

                                    <div className={'pagination'}>
                                        <Pagination className={'mt-4 flex-row text-center'}>
                                            <Pagination.Prev/>
                                            <Pagination.Item active >{1}</Pagination.Item>
                                            <Pagination.Item >{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next/>
                                        </Pagination>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="github">
                                <div className="pt-3 c-flex">
                                    {githubCard}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gitlab">
                                <div className="pt-3 c-flex">
                                    {gitlabCard}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="bitbucket">
                                <div className="pt-3 c-flex">
                                    {bitBucketCard}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>


                </Col>
            </Row>
        </>
    )
}
