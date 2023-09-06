import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function projectAdd({show, handleClose, isNote}) {

    let content =""

    if (isNote) {
       content= <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
        >
            <Form.Label>Notes</Form.Label>
            <Form.Control
                type="notes"
                placeholder="Notes"
                autoFocus
            />
        </Form.Group>


    }
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
                <Button variant="success" onClick={handleClose}>
                    Add
                </Button>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );

}