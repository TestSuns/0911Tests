import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function projectAdd({show, handleClose}) {

    let content = ""

    const handleAdd = () => {
        // Add your code to delete the project card here
        console.log('Project card deleted');
        handleClose();
    };
    console.log(show)

    // if (isNote) {
    //     content = <Form.Group
    //         className="mb-3"
    //         controlId="exampleForm.ControlTextarea1"
    //     >
    //         <Form.Label>Notes</Form.Label>
    //         <Form.Control
    //             type="notes"
    //             placeholder="Notes"
    //             autoFocus
    //         />
    //     </Form.Group>
    // }

    return (

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link</Form.Label>
                        <Form.Control
                            type="link"
                            placeholder="Link"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={handleAdd}>
                    Add
                </Button>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>);

}