import Layout from "../components/Layout";
import Link from "next/link";

//idealnya fungsi ini load data dari api backend, didokumentasi nya pakai isomorphic-unfetch
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

export default () => (
  <Layout>
    <div id="main-wrap">
      <div id="content">
        <h2>{getArticle().title}</h2>
        <div id="titledesc">
          <p>
            By {getArticle().author} / EdgeProp | {getArticle().date}
          </p>
          <p>Tags: {getArticle().tags}</p>
        </div>

        <img src={getArticle().img} />
        <p id="imgdesc">{getArticle().img_desc}</p>
        <div
          id="article"
          dangerouslySetInnerHTML={{ __html: getArticle().article }}
        />
        <br />
        <div id="social">
          <h3 id="social_title">Follow Us On</h3>
          {getSocialMedia().map(social => (
            <Link href={social.link}>
              <a id="social_icon">
                <img src={social.icon} alt={social.name} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div id="sidebar" />
    </div>
    <style jsx>{`
      #social_icon {
        margin-right: 5px;
      }
      #social_title {
        margin-bottom: 0px;
      }
      #content {
        padding: 20px;
        border: 1px solid #ddd;
        float: left;
        width: 70%;
      }
      #titledesc {
        margin-top: 10px;
      }

      #imgdesc {
        margin-top: 0px;
      }
      #main-wrap {
        /* overflow to handle inner floating block */
        overflow: hidden;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      #sidebar {
        float: right;
        width: 25%;
        height: 100px;
        border: 1px solid #ddd;
      }
    `}</style>
  </Layout>
);
