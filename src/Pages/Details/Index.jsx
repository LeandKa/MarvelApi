import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStore } from '../../core/actions/storeAction';
import api from '../../Services/api';
import ReactLoading from 'react-loading';

const Container = styled.div`
   display:flex;
   width:auto;
   flex-direction:column;
   margin-top:65px;
   margin-bottom:20px;
  
`
const ContainerDetails = styled.div`
    display:grid;
    background:white;
    max-width:1200px;
    padding-top:2.2rem;
    align-self:center;
    grid-template-areas:
     "image Details"
     "image customer"
     "characters characters"; 

     @media (max-width: 640px) {
      grid-template-areas:
     "image"
     "Details"
     "customer"
     "characters"
  }
    
`
const ImageDiv = styled.div`
   width:auto;
   min-width:300px;
   max-width:400px;
   padding:1.5rem;
   height:auto;
   align-content:center;
   grid-area:image;
   grid-column:image;
   @media (max-width: 620px) {
}
`

const Image = styled.img`
  height:auto;
  width:100%;
`

const DetailsDescription = styled.div`
   width:auto;
   align-self:center;
   padding:0.2rem;
   grid-area: Details;
   grid-column:Details;
   @media (max-width: 640px) {
    
    max-width:350px;
}
`

const Title = styled.h1`
  font-size:25px;
  font-weight:bold;
  @media (max-width: 640px) {
    
    text-align:center;
}
`
const Descripton = styled.h1`
  font-size:13px;
  margin:1.4rem;
  
`
const Price = styled.div`
  font-weight:bold;
  padding:0.5rem;
  height:2.0rem;
  color: black;
`

const Customer = styled.div`
height:200px;
align-content:center;
text-align:center;
align-self:center;
width:100%;
grid-area: customer;
`

const Button = styled.button`
 padding:0.9rem;
 margin-top:1.2rem;
 border-radius:10%;
 background:white;
 border:none;
 grid-area: customer;
 transition: all 1.5s ease;
 &:hover{
   color:white;
   background:black;
 }

 &:focus{
   outline:none;
 }
`
const NoDescription = styled.p`
   text-align:center;
   margin-top:60px;
`

class Details extends Component {

  state = {
    loading: false,
    item: [],
    thumbnail: {},
    price: 0
  }

  componentDidMount() {
    const json = JSON.parse(localStorage.getItem('store'))
    console.log(json)
    api.get('/comics', { params: { id: this.props.match.params.id } })
      .then(result => {
        this.setState({
          loading: true,
          item: result.data.data.results[0],
          price: result.data.data.results[0].prices[0].price,
          thumbnail: result.data.data.results[0].thumbnail
        })
      }, 600)
  }

  handleClick = () => {
    this.props.addStore(this.state.item);
  }


  render() {
    return (
      <Container>
        {!this.state.loading ? (
          <ReactLoading className='Load' type={"bubbles"} height={367} width={175} color={"black"} />
        ) : (
            <ContainerDetails>
              <ImageDiv>
                <Image src={`${this.state.thumbnail.path}/portrait_uncanny.${this.state.thumbnail.extension}`}></Image>
              </ImageDiv>
              <DetailsDescription>
                <Title>{this.state.item.title}</Title>
                <Descripton>{this.state.item.description === undefined ? (<NoDescription>No Description</NoDescription>) : (this.state.item.description)}</Descripton>
              </DetailsDescription>
              <Customer>
                <Price>Price:{this.state.price}</Price>
                <Button onClick={this.handleClick}>Add</Button>
              </Customer>
            </ContainerDetails>)}
      </Container>
    )
  }

}
const mapStateToProps = state => ({test:state.test,tudo:state.tudo})
const mapDispatchToProps = dispatch => bindActionCreators({ addStore }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Details)