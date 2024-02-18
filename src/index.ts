import ShareButton from "./shareButton";

const shareButton = new ShareButton("https://www.linkedin.com");
shareButton.bind(".btn-linkedin", "linkedin");
shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");