import ShareButtonFacebook from "./ShareButton/shareButtonFacebook";
import ShareButtonLinkedin from "./ShareButton/shareButtonLinkedin";
import ShareButtonTwitter from "./ShareButton/shareButtonTwitter";

const twitter = new ShareButtonTwitter('https://www.google.com', 'btn-twitter');
twitter.bind();

const facebook = new ShareButtonFacebook('https://www.google.com', 'btn-facebook');
facebook.bind();

const linkedin = new ShareButtonLinkedin('https://www.google.com', 'btn-linkedin');
linkedin.bind();