import { getDirname, path } from "@vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: "https://javaguide.cn/",
  logo: "/logo.png",
  favicon: "/favicon.ico",

  iconAssets: "//at.alicdn.com/t/c/font_2922463_kweia6fbo9.css",

  author: {
    name: "Guide",
    url: "https://javaguide.cn/article/",
  },

  repo: "https://github.com/Snailclimb/JavaGuide",
  docsDir: "docs",
  // 纯净模式：https://theme-hope.vuejs.press/zh/guide/interface/pure.html
  pure: true,
  breadcrumb: false,
  navbar,
  sidebar,
  footer:
    '<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
  displayFooter: true,

  pageInfo: [
    "Author",
    "Category",
    "Tag",
    // "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],

  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
    medias: {
      Zhihu: "https://www.zhihu.com/people/javaguide",
      Github: "https://github.com/Snailclimb",
      Gitee: "https://gitee.com/SnailClimb",
    },
  },

  plugins: {
    blog: true,

    copyright: {
      author: "JavaGuide(javaguide.cn)",
      license: "MIT",
      triggerLength: 100,
      maxLength: 700,
      canonical: "https://javaguide.cn/",
      global: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      align: true,
      codetabs: true,
      container: true,
      figure: true,
      gfm: true,
      include: {
        resolvePath: (file, cwd) => {
          if (file.startsWith("@"))
            return path.resolve(
              __dirname,
              "../snippets",
              file.replace("@", "./"),
            );

          return path.resolve(cwd, file);
        },
      },
      tasklist: true,
    },
  },
});
