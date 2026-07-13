import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Stacks = () => {
  return (
    <>
     <Stack gap={3}>
      <div className="p-2 border border-primary">First item</div>
      <div className="p-2 border border-primary">Second item</div>
      <div className="p-2 border border-primary">Third item</div>
    </Stack>
      <div className="hr" />
    <Stack direction="horizontal" gap={3}>
      <div className="p-2 border border-secondary-subtle">First item</div>
      <div className="p-2 border border-secondary-subtle">Second item</div>
      <div className="p-2 border border-secondary-subtle">Third item</div>
    </Stack>
      <div className="hr" />
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
  
    {/* <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <Stack className="col-md-5 mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <Stack gap={2} className="col mx-auto">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
    <Stack gap={2} className="col-md-5">
      <Button variant="secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack> */}
    </>
  )
}

export default Stacks