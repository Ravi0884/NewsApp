import React, { Component } from 'react'
import NewItems from './NewItems'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: 'general'
  }
  constructor(props) {
    super(props)
    this.state = {
 
      articles: [],
      loading: true,
      page:1,
      totalResults:0
    }
  }
  async updateNews() {
    this.props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=82d0cce830fe4f65a93362774929f7ff&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    this.props.setProgress(30);
    let data= await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
 async componentDidMount() {
    this.updateNews()
    this.setState({page: this.state.page+1})
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=82d0cce830fe4f65a93362774929f7ff&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  // handlePreClick= async ()=> {
  //   this.setState({
  //     page: this.state.page-1
  //   })
  //   this.updateNews()
  // }
  // handleNextClick= async ()=> {
  //   this.updateNews()
  //   this.setState({
  //     page: this.state.page+1
  //   })
    
  // }
  render() {
    return (
      <>
        <h2 align="center">Today's {this.props.category} News! </h2>
        {/* {this.state.loading && <Loading />} */}
        <InfiniteScroll
                 
                 dataLength={this.state.articles.length}
                 next={this.fetchMoreData}
                 hasMore={this.state.articles.length !== this.state.totalResults}
                 loader={this.state.articles.length !== this.state.totalResults?<Loading />:""}
               >
         <div className="row">

       {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.publishedAt}>
            <NewItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,85):""}
             author={element.author} date={element.publishedAt} image={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/z/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"} adddress={element.url?element.url:"https://thumbs.dreamstime.com/z/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"}/>
       </div>
       
       })}
       
       </div>
       </InfiniteScroll>
    {/* <div className="button">
       <button type="button"  disabled={this.state.page <=1} className="btn btn-primary" onClick={this.handlePreClick}>&larr; Previous</button>
       <button type="button"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
       </div> */}
       </>
    )

  }
}

export default News