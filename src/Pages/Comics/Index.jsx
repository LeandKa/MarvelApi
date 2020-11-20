import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComics, getComicsPagination } from '../../core/actions/comicsAction';
import Card from '../../Components/Card/Card';
import Pagination from 'react-js-pagination';
import InfiniteLoading from 'react-infinite-scroll-component';
import ReactLoading from 'react-loading';
import LogoNotFound from '../../svgs/not-found.svg';
import './style.css';

const Main = styled.main`
     display:flex;
     flex-direction:column;
     
`

const Title = styled.h1`
  color:black;
  padding-top:1.6rem;
  margin:3.4rem;
  text-align:center;

`
const Img = styled.img`
    align-self:center; 
    margin-top:30px;
    width:250px;
    align-content:center;
    @media(max-width:670px){
      width:200px;
    }
`
const DivCard = styled.div`
     display:grid;
     text-align:center;
     width:auto;
     grid-template-columns: repeat(3,auto);
     grid-gap:1.0rem;
     padding:1.2rem;
  @media (max-width: 840px) {
    grid-template-columns:repeat(2,auto);
}
@media (max-width: 670px) {
  grid-template-columns:repeat(1,auto);
}
`
const SpanTitle = styled.h1`
    font-size:2.0rem;
    margin-top:2.3rem;
    color:black;
`
const DivEmpty = styled.div`
  display:flex;
  margin-top:70px;
  flex-direction:column;
`
const Pag = styled.div`
   align-self:center;
`

class Comics extends Component {

  state = {
    pageNumber: 1,
    estado: true,
    total:0,
    limit:20
  }

  componentDidMount() {
    this.props.getComics();
  }

  componentDidUpdate(){
    console.log(this.props)
  }

  handlePageChange = (pageNumber) => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
    this.setState({
      pageNumber: pageNumber
    })
    this.props.getComicsPagination(pageNumber, this.state.limit,this.props.title)
  }

  render() {
    const { comics, title,Empty,total } = this.props

    if (Empty) {
      return (<DivEmpty>
        <Img src={LogoNotFound}></Img>
      </DivEmpty>)
    }
    return (
      <div>
        <Main>
          {this.props.title === undefined ? (<Title>Comics</Title>) : (<Title><SpanTitle>Current results for {title}</SpanTitle></Title>)}
          {!this.props.loading ? (
            <ReactLoading className='Load' type={"bubbles"} height={367} width={175} color={"black"} />

          ) : (
              <DivCard>
                {
                  comics.map((comics, index) => (
                    <Card key={comics.id} id={comics.id} Name={comics.title} Comics={this.props.comics[index]} Image={comics.thumbnail}></Card>
                  ))
                }
              </DivCard>
            )}
          <Pag>
            <Pagination className="pagination" activePage={this.props.pageNumber} itemClass="page-item" linkClass="page-link" onChange={this.handlePageChange} itemsCountPerPage={20} totalItemsCount={total} pageRangeDisplayed={5}></Pagination>
          </Pag>
        </Main>
      </div>
    );
  }
}

const mapStateToProps = state => ({ total: state.total, title: state.title, loading: state.loading, limit: state.limit, Empty: state.Empty, comics: state.comics,pageNumber:state.pageNumber })
const mapDispatchToProps = dispatch => bindActionCreators({ getComics, getComicsPagination }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Comics)