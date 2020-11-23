import React, { Component } from 'react'
import { ImageTitle, Image, PTitle, Price, P, Button, Container, ContainerBody, Title, PEmpty, CheckOut, Total } from './Style';
import { FaTrashAlt } from "react-icons/fa";

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
    } else {
      if (array.length == 0) {
        this.setState({ empty: true })
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
    if (novo.length == 0) {
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
            <Title>Comics</Title>
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

export default Store;