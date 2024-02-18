import ShareButtonFacebook from "./ShareButton/shareButtonFacebook";
import ShareButtonLinkedin from "./ShareButton/shareButtonLinkedin";
import ShareButtonPrint from "./ShareButton/shareButtonPrint";
import ShareButtonTwitter from "./ShareButton/shareButtonTwitter";
import AbstractShareButton from "./abstractShareButton";
import DOMeventHandler from "./Events/DOMeventHandler";

const eventHandler = new DOMeventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', 'https://github.com/DaksonC');
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', 'https://github.com/DaksonC');
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', 'https://github.com/DaksonC');
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print');
print.bind();