import React, { Component } from 'react';
import Logo from '../../svgs/marvel.svg';
import { connect } from 'react-redux';
import {Tab,List,Button,Img,Input,Header,A} from './Style';
import { bindActionCreators } from 'redux';
import { getSearch } from '../../core/actions/comicsAction';
import { AiOutlineSearch } from "react-icons/ai";

class Headers extends Component {
  state = {
    show: false,
    search: ''
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getSearch(this.state.search);
    this.setState({search:''});
  }
  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <Header>
        <Img src={Logo}></Img>
        <main>
          <List>
            <li ><A href="/" shouldHover={true}>Comics</A></li>
            <li ><A href="/Store" shouldHover={true}>Store</A></li>
            <li><Button shouldHover={true} onClick={this.handleClick}><AiOutlineSearch style={{ color: "white", width: '20px' }}></AiOutlineSearch></Button></li>
          </List>
        </main>
        <Tab active={this.state.show}>
          <form onSubmit={this.handleSubmit}>
            <Input placeholder="Type here..." name='search' onChange={this.handleChange} maxLength="40"></Input>
          </form>
        </Tab>
      </Header>
    )
  };
}



const mapStateToProps = state => ({ search: state.search, id: state.id })
const mapDispatchToProps = dispatch => bindActionCreators({ getSearch }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Headers)