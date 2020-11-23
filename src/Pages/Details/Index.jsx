import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Title,ContainerDetails,Container,ImageDiv,Image,DetailsDescription,Button,Price,Customer,NoDescription,Descripton} from './Style';
import { addStore } from '../../core/actions/storeAction';
import api from '../../Services/api';
import ReactLoading from 'react-loading';

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