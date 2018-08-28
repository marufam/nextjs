import Layout from '../components/Layout'
import Link from "next/link";

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
        <h2>About me</h2>
        <div>Haii, my name is maruf, this page for example<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<br/>

        </div>
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
        #social{
            
        }
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
        height:500px;
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
)
