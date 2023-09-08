import {GrAdd, GrGithub, GrGroup, GrView} from "react-icons/gr";

import {BiDotsHorizontal, BiEdit, BiLogoGithub, BiShare} from "react-icons/bi";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {AiFillGithub, AiFillGitlab, AiOutlineGithub} from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import {FiDelete} from "react-icons/fi";

import React, {useState} from 'react';
import ProjectDelete from 'components/project-delete/projectDelete';
import {DiBitbucket} from "react-icons/di";


export default function ProjectCard({dataResult}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);  // State variable for delete modal

    let icon = '';
    let information ='';

    if (dataResult.source_type == "GitHub") {
        information = (
            <>
                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.contributor}</span>
                    <div>Contributor</div>
                </div>

                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.used_by}</span>
                    <div>Used By</div>
                </div>

                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.stars}</span>
                    <div>Stars</div>
                </div>

                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.forks}</span>
                    <div>Forked</div>
                </div>
            </>
        );
        icon = <Button  size="sm" variant="outline-primary"><BiLogoGithub/> GitHub</Button>;
    }
    if (dataResult.source_type == "GitLab") {
        information = (
            <>
                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.stars}</span>
                    <div>Stars</div>
                </div>
            </>
        );
        icon = <Button size="sm" variant="outline-danger"><AiFillGitlab/> GitLab</Button>;
    }
    if (dataResult.source_type == "BitBucket") {
        information = (
            <>
                <div className={'card-group-count'}>
                    <GrView/> <span className={'count'}>{dataResult.views}</span>
                    <div>Views</div>
                </div>
                <div className={'card-group-count'}>
                    <GrGroup/> <span className={'count'}>{dataResult.forks}</span>
                    <div>Forked</div>
                </div>
            </>
        );
        icon = <Button size="sm" variant="outline-info"><DiBitbucket/> BitBucket</Button>;
    }


    return (<div className={'project-card'}>

        <Dropdown className={'float-right'}>
            <Dropdown.Toggle bsPrefix='11' variant='white' className={'float-right mr10'}>
                <BiDotsHorizontal/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item> <BiEdit/> Edit</Dropdown.Item>
                <Dropdown.Item className="red-text" onClick={() => setShowDeleteModal(true)}>  {/* Modified line */}
                    <FiDelete/> Delete
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>


        <div className={'flex-between card-title'}>
            <div>
                <h3>{dataResult.project_title}</h3>
                <h4>{dataResult.user_name}</h4>
            </div>
            <Image className={'small-avatar'} src={dataResult.user_avatar} roundedCircle/>
        </div>

        <p className={'card-desc'}>
            {dataResult.project_description}
        </p>

        <div className={'flex-around'}>
            {information}
        </div>
        <hr/>
        <div className={'flex-between'}>
            {icon}
        </div>

        <ProjectDelete show={showDeleteModal} handleClose={() => setShowDeleteModal(false)}/>


    </div>);
}