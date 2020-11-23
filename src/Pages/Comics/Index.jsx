import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComics, getComicsPagination } from '../../core/actions/comicsAction';
import Card from '../../Components/Card/Card';
import Pagination from 'react-js-pagination';
import ReactLoading from 'react-loading';
import {Img,Main,Pag,DivEmpty,DivCard,Title} from './Style';
import LogoNotFound from '../../svgs/not-found.svg';
import './style.css';

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
          {this.props.title === undefined ? (<Title>Comics</Title>) : (<Title>{`Current results for ${title}`}</Title>)}
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