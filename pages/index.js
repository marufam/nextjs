import React from 'react'
import Head from 'next/head'
import Header from '../components/Header.jsx';
import Article from '../components/Article';
import Footer from '../components/Footer.jsx';

function getArticle() {
  return {
    id: "1",
    title: "Four shophouses on Tessensohn Road going for $25 mil",
    author: "Bong Xin Ying",
    date: "July 19, 2018 7:45 PM SGT",
    tags: "Tessensohn Road Shophouses",
    img:
      "https://sg.tepcdn.com/public/usr/1ihxsf/7d7c4d-15-17-19-21-Tessensohn-Road-Shophouses-1-.jpg",
    img_desc:
      "Cushman & Wakefield is marketing this row of four shophouses (Credit:C&W)",
    article:
      "<p> A row of four contiguous freehold conservation shophouses at Nos 15, 17, 19 and 21 Tessensohn Road is up for sale at a reserve price of $25 million. This translates into $1,399 psf on the allowable maximum GFA, according to the marketing agent Cushman & Wakefield (C&W). </p> <p> The properties have four individual land titles and a total land area of 5,958 sq ft. Under the 2014 Master Plan, it is zoned “residential with commercial at first storey”, with a gross plot ratio of 3.0. The GFA can be maximised up to 17,873 sq ft. </p> <p> The successful bidder can efficiently construct a six-storey rear extension over the four land plots. This is subject to the authorities’ approval. </p> <p> Nos 15 and 21 are the original two-storey shophouses; Nos 17 and 19 each have a part-two-storey front and part-three-storey rear. Each shophouse has a private car park lot. </p> <p> The four shophouses are being held by three separate ownerships, and the owners have jointly put them up for sale by tender. </p> <p> Christina Sim, director of capital markets at C&W, says: “Despite the recent cooling measures in the residential property market, freehold conservation shophouses in city-fringe locations have withstood the test of time as favoured long-term investments.” </p> <p>The tender will close on Aug 28.</p>"
  };
}
function getSocialMedia() {
  return [
    {
      id: "1",
      name: "facebook",
      icon: "https://dkc9trqgco1sw.cloudfront.net/images/fb_btn.png",
      link: "https://www.facebook.com/edgepropsg"
    },
    {
      id: "2",
      name: "twitter",
      icon: "https://dkc9trqgco1sw.cloudfront.net/images/tw_btn.png",
      link: "https://twitter.com/edgepropsg"
    },
    {
      id: "3",
      name: "instagram",
      icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/insta_btn.png",
      link: "https://www.instagram.com/edgepropsg"
    },
    {
      id: "4",
      name: "linkedin",
      icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/li_btn.png",
      link: "https://www.linkedin.com/showcase/6576638/"
    },
    {
      id: "5",
      name: "youtube",
      icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/yt_btn.png",
      link: "https://www.youtube.com/channel/UCp6JB-mJdeI4I1X2wN5XXZA"
    }
  ];
}

function getTopArticle() {
  return [
    {
      id: "1",
      name: "Lure of a comfortable, semi-retired lifestyle at just $1,500 a month",
      link: "https://www.edgeprop.sg/property-news/lure-comfortable-semi-retired-lifestyle-just-1500-month"
    },
    {
      id: "2",
      name: "My House Tour: A Bachelor Pad in Tanjong Pagar",
      link: "https://www.edgeprop.sg/property-news/my-house-tour-bachelor-pad-tanjong-pagar"
    },
    {
      id: "3",
      name: "5 things you need to know about Jho Low’s super-lux Singapore condo",
      link: "https://www.edgeprop.sg/property-news/5-things-you-need-know-about-jho-low%E2%80%99s-super-lux-singapore-condo"
    },
    {
      id: "4",
      name: "The most expensive Good Class Bungalows sold in Singapore in 2018",
      link: "https://www.edgeprop.sg/property-news/most-expensive-good-class-bungalows-sold-singapore-2018"
    },
    {
      id: "5",
      name: "Higher ABSD rates, tighter loan limits: What this means for Singapore’s homebuyers",
      link: "https://www.edgeprop.sg/property-news/higher-absd-rates-tighter-loan-limits-what-means-singapore%E2%80%99s-homebuyers-0"
    }
  ];
}

function getEvent_calender() {
  return [
    {
      id: "1",
      name: "Agent Training - 13 September 2018",
      img: "https://dkc9trqgco1sw.cloudfront.net/styles/homepage_new_slider_main/s3/Agent%20Training%20Cover%20Edgeprop-552_15.jpg?itok=RJbKGSQb",
      link: "https://www.edgeprop.sg/property-events/agent-training-13-september-2018"
    },
    {
      id: "2",
      name: "Property Auction by Knight Frank (September 2018)",
      img: "https://dkc9trqgco1sw.cloudfront.net/styles/homepage_new_slider_main/s3/KnightFrank_2.jpg?itok=57vsHeVw",
      link: "https://www.edgeprop.sg/property-events/property-auction-knight-frank-september-2018"
    }
  ];
}


export default () => (
  <div id="body">
    
    {/* <div id="coba">hbsjkhsjkhsk</div> */}
    <Head>
        <title>Simple Page</title>
    </Head>
    <Header title="Simple Page"/>
    <Article data_article={getArticle()} social_media={getSocialMedia()} top={getTopArticle()} event={getEvent_calender()}/>
    <Footer/>
    <style jsx>{`
    
          
        `}</style>
  </div>
)