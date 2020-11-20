
import React, { Component } from 'react'
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";
import { connect } from 'react-redux';


const Container = styled.div`
  display:flex;
  width:100%;
  height:auto;
  flex-direction:column;
  align-items: center;
  align-self:center;
  margin-bottom:1.4rem;
`

const ContainerBody = styled.div`
  margin-bottom:2.3rem;
  align-items:center;
  text-align:center;
  width:70%;
  min-width:300px;
  background:white;
  margin-top:6.4rem;
`

const Title = styled.h1`
  color:black;
  padding-top:0.7rem;
  margin:2.4rem;
  text-align:center;

`
const CheckOut = styled.div`
  display:flex;
  flex-direction:row;
  border:1px solid black;
  margin:0.8rem;
  padding:0.7rem;
  justify-content:space-around;
  @media (max-width: 490px) {
    flex-direction:column;
}
`

const ImageTitle = styled.div`
  display:flex;
  margin-top:30px;
  min-weight:100px;
  max-width:250px;
  width:300px;
  height:auto;
  flex-direction:row;
  @media (max-width: 490px) {
    align-self:center;
}
  
`

const PTitle = styled.p`
  font-size:12px;
  align-self:center;
  width:auto;
  max-width:150px;
  min-width:30px;
  margin:0.9rem;
  @media (max-width: 740px) {
   max-width:100px;
}
`
const PEmpty = styled.p`
   align-self:center;
   font-size:20px;
`

const P = styled.p`
  font-size:13px;
  margin:0.5rem;
`

const Image = styled.img`
  weight:100px;
  align-self:center;
  height:90px;
`
const Price = styled.div`
  display:flex;
  flex-direction:row;
  align-self:center;
  max-width:150px;
  margin-top:30px;
  @media (max-width: 740px) {
    text-align:center;
 }
`

const Button = styled.button`
align-self:center;
  width:2.3rem;
  height:2.1rem;
`

const Total = styled.div`
 text-align:center;
`

class Store extends Component {

  state = {
    comic: [],
    empty: false,
    total: 0
  }


  componentDidMount() {
    const array = localStorage.getItem('store');
      if (array == null) {
        this.setState({ empty: true })
      }else{
        if(array.length == 0){
          this.setState({empty:true})
        }
        JSON.parse(array);

        let total = JSON.parse(array).reduce(function (total, valorAtual) {
          return total += valorAtual.price;
        }, 0)
  
        this.setState({ comic: JSON.parse(array), total: total });
      }
    }

  onClick = (id, price) => {
    const novo = this.state.comic.filter(function (e) {
      return e.id !== id;
    })
    let totalNew = this.state.total - price
    this.setState({ comic: novo, total: totalNew })
    if (novo.length === 0) {
      this.setState({ empty: true })
    }
    localStorage.setItem('store', JSON.stringify(novo));
  }

  render() {
    const { comic, empty } = this.state;

    const formatPrice = (value) => {
      const novoValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
      return (
        <P>{novoValue}</P>
      )
    }

    if (empty) {
      return (
        <Container>
          <ContainerBody>
            <Title>Store</Title>
            <PEmpty>No Comic in the Store</PEmpty>
          </ContainerBody>
        </Container>
      )
    } else {
      return (
        <Container>
          <ContainerBody>
            <Title>Cart</Title>
            <Total>
              <PEmpty>Total:{formatPrice(this.state.total)}</PEmpty>
            </Total>
            {
              comic.map(comics => (
                <CheckOut>
                  <ImageTitle>
                    <Image src={`${comics.thumbnail.path}/portrait_fantastic.${comics.thumbnail.extension}`}></Image>
                    <PTitle>{comics.title}</PTitle>
                  </ImageTitle>
                  <Price>
                    <span style={{ fontWeight: "bold", flex: 1 }}>Price<P>{formatPrice(comics.price)}</P></span>
                    <Button onClick={() => this.onClick(comics.id, comics.price)}><FaTrashAlt></FaTrashAlt></Button>
                  </Price>
                </CheckOut>
              ))
            }
          </ContainerBody>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => ({ Data: {} })
export default connect(mapStateToProps, null)(Store)