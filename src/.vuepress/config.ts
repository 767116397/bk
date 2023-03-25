import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/bk/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },
  markdown: {
    toc: {
      shouldAllowNested: true,
      level:[1, 2, 3, 4, 5, 6]
    },
    anchor: {
      level:[1, 2, 3, 4, 5, 6],
    },
    headers: {
      level: [1, 2, 3, 4, 5, 6]
    }
  },

  
  theme,

  plugins: [
    // 搜索
    searchProPlugin({

      locales: {
        "/": {
          placeholder: "开始搜索"
        }
      },
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => "page.frontmatter.category",
          formatter: "分类：$content",
        },
        {
          getter: (page) => "page.frontmatter.tag",
          formatter: "标签：$content",
        },
      ],
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
