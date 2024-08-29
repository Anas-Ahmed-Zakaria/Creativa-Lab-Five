import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './CardComponent.css'
export default class CardComponent extends Component {
  render() {
    const {id , postId , name , email , body} = this.props;

    return (
            <Card style={{backgroundColor: "#ccc"}} key={id} className='cards h-100 w-100 shadow py-3 px-2'>
              <Card.Title className='text-danger fw-bold'>Post ID: <span className='text-primary fw-medium'>{postId}</span></Card.Title>
              <Card.Body className='ms-0 px-0'>
              <Card.Text className='fs-5 text-danger fw-bold'>Name: <span className='text-primary fw-medium'>{name.slice(0,12)}</span></Card.Text>
              <Card.Text className='fs-5 text-danger fw-bold'>Email: <span className='text-primary fw-medium'>{email.slice(0,20)}</span></Card.Text>
              <Card.Text className='fs-5 text-danger fw-bold'>Desciription: <span className='text-primary fw-medium'>{body.slice(0 , 40)}</span></Card.Text>
            </Card.Body>
          </Card>         
    )
  }
}
