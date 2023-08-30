import {GrAdd, GrGroup} from "react-icons/gr";

import {BiDotsHorizontal, BiEdit, BiShare} from "react-icons/bi";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import Image from 'react-bootstrap/Image';
import {BsShare} from "react-icons/bs";
import {GiHidden} from "react-icons/gi";
import {FiDelete} from "react-icons/fi";

export default function ProjectCard() {


    return (<div className={'project-card'}>

        <Dropdown className={'float-right'}>
            <Dropdown.Toggle bsPrefix='11' variant='white' className={'float-right mr10'}>
                <BiDotsHorizontal/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item> <BiEdit/> Edit</Dropdown.Item>
                <Dropdown.Item><BsShare/> Share</Dropdown.Item>
                <Dropdown.Item> <GiHidden/> Hide</Dropdown.Item>
                <Dropdown.Item className={'red-text'}> <FiDelete/> Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>


        <div className={'flex-between card-title'}>
            <div>
                <h3>a long repo nameLily</h3>
                <h4>Username</h4>
            </div>
            <Image className={'small-avatar'} src="/user.png" roundedCircle/>
        </div>

        <p className={'card-desc'}>
            Lorem ipsum dolor sit amet.
        </p>

        <div className={'flex-around'}>

            <div className={'card-group-count'}>
                <GrGroup/> <span className={'count'}>123</span>
                <div>Used By</div>
            </div>

            <div className={'card-group-count'}>
                <GrGroup/> <span className={'count'}>123</span>
                <div>Used By</div>
            </div>

            <div className={'card-group-count'}>
                <GrGroup/> <span className={'count'}>123</span>
                <div>Used By</div>
            </div>

            <div className={'card-group-count'}>
                <GrGroup/> <span className={'count'}>123</span>
                <div>Used By</div>
            </div>

        </div>

        <hr/>

        <div className={'flex-between'}>
            <Button size="sm" variant="outline-secondary"><AiFillGithub/> Github</Button>
            <Button size="sm" variant="success">Original</Button>
        </div>

    </div>);
}