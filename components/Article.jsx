import React from "react";
import Article_title from "../components/Article_title";
import Article_title_desc from "../components/Article_title_desc";
import Article_img from "../components/Article_img";
import Social_icon from "../components/Social_icon";
import Top_article from "./Top_article";

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <div id="main-wrap">
          <div id="content">
            <Article_title name={this.props.data_article.title} />
            <Article_title_desc
              author={this.props.data_article.author}
              date={this.props.data_article.date}
              tags={this.props.data_article.tags}
            />
            <Article_img
              img={this.props.data_article.img}
              img_desc={this.props.data_article.img_desc}
            />
            <div
              id="article"
              dangerouslySetInnerHTML={{
                __html: this.props.data_article.article
              }}
            />
            <br />
            <Social_icon data={this.props.social_media} />
          </div>
          <Top_article  data={this.props.top} data2={this.props.event}/>
        </div>
        <style jsx>{`
          #content {
            padding: 20px;
            border: 1px solid #ddd;
            float: left;
            width: 70%;
          }
          
          #main-wrap {
            /* overflow to handle inner floating block */
            overflow: hidden;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          
        `}</style>
      </div>
    );
  }
}
