import ShareButtonFacebook from "./ShareButton/shareButtonFacebook";
import ShareButtonLinkedin from "./ShareButton/shareButtonLinkedin";
import ShareButtonPrint from "./ShareButton/shareButtonPrint";
import ShareButtonTwitter from "./ShareButton/shareButtonTwitter";
import AbstractShareButton from "./abstractShareButton";

const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', 'https://github.com/DaksonC');
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', 'https://github.com/DaksonC');
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin', 'https://github.com/DaksonC');
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint('.btn-print');
print.bind();