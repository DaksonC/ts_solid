export default class ShareButton {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  bind(className: string, socialNetwork: string) {
    let link: string;
    if (socialNetwork === "twitter") {
      link = `https://twitter.com/share?url=${this.url}`;
    } else if (socialNetwork === "facebook") {
      link = `https://facebook.com/sharer.php?u=${this.url}`;
    } else if (socialNetwork === "linkedin") {
      link = `https://linkedin.com/shareArticle?url=${this.url}`;
    }

    const elements = Array.from(document.querySelectorAll(className));
    for (const element of elements) {
      element.addEventListener("click", () => window.open(link));
    }
  }
};