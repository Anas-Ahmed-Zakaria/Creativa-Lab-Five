import React, { Component } from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import CardComponent from '../CardComponent/CardComponent';

export default class RenderCardFromApi extends Component {
  constructor() { 
    super()
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);  
        }
        return response.json();  
      })
     .then(data => this.setState({ data, isLoading: false } , () => {console.log(data);
     }))
     .catch(error => this.setState({ error, isLoading: false }));
     
  }

  renderCards() {
    return this.state.data.map((comment) => (
      <Col md={3} className='mb-3'>
        <CardComponent key={comment.id} id={comment.id} postId={comment.postId} name={comment.name} email={comment.email} body={comment.body}/>
      </Col>))}
  render() {
    return (
      <Container className='mt-4'>
        <Row>
        {this.state.isLoading?(<><div>Loading...</div></>) : (<>{this.renderCards()}</>)}
        {this.state.error && <div>Error: {this.state.error.message}</div>}
        </Row>

      </Container>
    )
  }
}
