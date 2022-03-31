import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput
} from 'reactstrap'
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <Card id='card'><br/>
        <h5 id='h5'>Your Address</h5>
    <CardBody>
      <Form >
        <p>Name: {contact.fullName}<br/>
         Address: {contact.address}<br/>
         Phone number: {contact.phoneNumber}<br/>
         Landmark: {contact.landmark}<br/>
         Pincode: {contact.pincode}<br/>
         State: {contact.state}</p>
        </Form >
        <Button type="submit" className='mr-1' color='btn btn-outline-primary'  onClick={(event) => handleEditClick(event, contact)} >Edit</Button> &nbsp;
        <Button type="submit"className='mr-1' color='btn btn-outline-danger'  onClick={() => handleDeleteClick(contact.id)}>Delete</Button>
          </CardBody> 
         </Card>
       
  )
}

export default ReadOnlyRow
