import {GrAdd, GrGroup} from "react-icons/gr";

import {BiDotsHorizontal, BiEdit, BiShare} from "react-icons/bi";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import {FiDelete} from "react-icons/fi";

export default function ProjectCard({dataResult}) {
    if(dataResult.source_type=="GitHub"){


    }


    return (<div className={'project-card'}>

        <Dropdown className={'float-right'}>
            <Dropdown.Toggle bsPrefix='11' variant='white' className={'float-right mr10'}>
                <BiDotsHorizontal/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item> <BiEdit/> Edit</Dropdown.Item>
                <Dropdown.Item className={'red-text'}> <FiDelete/> Delete</Dropdown.Item>
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
            if(dataResult.source_type=="GitHub"){

        }
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

        </div>

        <hr/>

        <div className={'flex-between'}>
            <Button size="sm" variant="outline-secondary"><AiFillGithub/> GitHub</Button>
        </div>

    </div>);
}