import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ProjectDelete({ show, handleClose }) {

    // Function to handle the deletion of the project card
    const handleDelete = () => {
        // Add your code to delete the project card here
        console.log('Project card deleted');
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>This project will be deleted in the management system permanently, but it will not afftect the priginal project in the git source system.</p>
            </Modal.Body>

            <Modal.Footer className="justify-content-center">
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
