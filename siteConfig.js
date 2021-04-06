module.exports = {
  siteUrl: "https://blog.ely.io",
  postsPerPage: 12,
  siteTitleMeta: "ely.io",
  siteDescriptionMeta:
    "Light",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "ely.io",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://ghost.theasdfghjkl.com",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://ghost-novela-preview.draftbox.co/",
      },
      {
        label: "Contact",
        url: "https://ghost-novela-preview.draftbox.co/contact",
      },
    ],
  },
  footer: {
    copyright: "Fuck me Gently Productions",
    navigation: [
      {
        label: "Home",
        url: "https://ghost-novela-preview.draftbox.co/",
      },
      {
        label: "Sitemap",
        url: "https://ghost-novela-preview.draftbox.co/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://ghost-novela-preview.draftbox.co/rss.xml",
      },
      {
        label: "Contact",
        url: "https://ghost-novela-preview.draftbox.co/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Get Dope News",
    helpText: "Get the latest dope words in your inbox.",
    successMessage: "Word. You're all good.",
  },
  socialLinks: {
    twitter: "https://twitter.com/creativ_ely",
    //facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/creativ_ely",
    linkedin: "https://linkedin.com/ely-kahn",
    github: "https://github.com/elykahn",
    pinterest: "https://www.pinterest.com/elykahncreative",
    youtube: "https://www.youtube.com/c/ElyKahn",
    //dribbble: "",
    //behance: "",
    externalLink: "https://ely.io",
    //whatsapp: "",
  },
  contactWidget: {
    title: "Contact ely",
    successMessage: "I'll be in touch.",
  },
  metadata: {
    title: "ely.io",
    description:
      "Lightning.",
  },
  twitterCard: {
    title: "ely.io",
    description:
      "Lightning.",
    imageUrl: "twitterImage.png",
    username: "@creativ_ely",
  },
/*  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },*/
  siteTitle: "ely.io",
  siteDescription:
    "Lightning",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
