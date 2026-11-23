import type { Dictionary } from "../types";
import tools from "../tools/zh";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 38 款开发工具，零网络请求",
    siteDescription:
      "为完全隔离和受限的 Windows 机器打造的离线优先开发者工具箱。没有遥测、没有自动更新、绝不联网上报。",
    toolsTitle: "工具 — AirToolkit",
    toolsDescription:
      "浏览 AirToolkit 内置的全部 38 款工具，从 JSON 格式化到证书生成，按类别分类。",
    securityTitle: "安全与验证 — AirToolkit",
    securityDescription:
      "AirToolkit「零网络请求」承诺是如何被验证的：静态代码审计与操作系统级防火墙/虚拟机测试，两者你都可以自行复现。",
    faqTitle: "常见问题 — AirToolkit",
    faqDescription: "关于 AirToolkit 的离线保证、支持平台以及开源可用性的解答。",
    aboutTitle: "关于我们 — AirToolkit",
    aboutDescription:
      "AirToolkit 为何存在：由一位安全工程师打造，他需要能在受限虚拟机上使用的离线开发工具，却找不到真正做到离线的工具。",
    privacyTitle: "隐私政策 — AirToolkit",
    privacyDescription:
      "AirToolkit 不收集任何个人信息：没有账户、没有遥测、没有分析。哪些数据留在你的设备上，以及少数会传输数据的情况。",
  },
  boot: {
    lines: [
      "$ 正在初始化 airtoolkit...",
      "$ 正在检查网络接口... 无需联网",
      "$ 正在本地加载 38 款工具",
      "$ 已确认零网络请求 ✓",
    ],
    ready: "就绪。",
  },
  nav: {
    tools: "工具",
    security: "安全",
    faq: "常见问题",
    about: "关于",
    download: "下载",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },
  footer: {
    github: "github",
    privacy: "隐私",
  },
  hero: {
    badge: "无遥测 · 无自动更新 · 无网络请求",
    title: "38 款开发工具。零网络请求。",
    body: "AirToolkit 将你每天都会用到的实用工具——JSON 格式化、正则测试、哈希计算、JWT 解码等——集成到一个桌面应用中，该应用绝不会自行发起任何网络请求。没有遥测，没有自动更新，绝不联网上报。",
    downloadWindows: "下载 windows 版",
    getFromStore: "从 Microsoft 获取",
    viewGithub: "版本说明",
    deployNote: "通过组策略或 SCCM 部署？",
    grabMsi: "获取 .msi 安装包",
    msiSuffix: "更合适",
    terminalComment1: "# 阻止所有出站流量",
    terminalComment2: "# 应用仍正常运行",
  },
  whyOffline: {
    heading: "为何离线很重要",
    subheading: "这源于真实的需求，而非功能清单。",
    points: [
      {
        num: "01",
        title: "受限虚拟机无法访问浏览器工具",
        body: "在注重安全与访问控制的公司中，限制互联网访问的机器很常见。在这些机器上打开基于浏览器的 JSON 格式化工具或正则测试工具根本不是一个选项。",
      },
      {
        num: "02",
        title: "所谓「离线」网页工具往往名不副实",
        body: "大多数声称支持离线使用的网站仍会加载分析脚本、字体 CDN 或更新检测——一旦被拦截，它们要么明显报错，要么悄悄联网上报。",
      },
      {
        num: "03",
        title: "完全不依赖网络，没有例外",
        body: "AirToolkit 自身绝不发起任何网络请求：没有遥测、没有自动更新、绝不联网上报。唯一的例外——API 请求测试器——是可选的且已被明确说明。",
      },
    ],
    seeVerification: "→ 查看具体验证方式",
  },
  howItWorks: {
    heading: "工作原理",
    steps: [
      {
        title: "下载并安装",
        body: "获取 Windows 安装程序——运行它无需账号、无需许可证密钥，也无需联网。",
      },
      {
        title: "从侧边栏选择工具",
        body: "38 款工具分为五个类别，支持搜索。所有功能都在同一窗口内本地运行。",
      },
      {
        title: "自行验证",
        body: "在防火墙上阻止该应用后继续使用——除 API 请求测试器外的每一款工具都能照常运行。",
      },
    ],
    browseTools: "→ 浏览全部工具",
  },
  toolsShowcase: {
    heading: "38 款工具，一个应用",
    subheading:
      "所有功能都在同一窗口内本地运行，无需为每个工具单独配置。可在应用侧边栏中搜索，或在此按类别浏览。",
    categories: {
      "Formatters & Text": "格式化与文本",
      Generators: "生成器",
      Security: "安全",
      "Network & Config": "网络与配置",
      "Converters & Media": "转换与媒体",
    },
    categoryDescriptions: {
      "Formatters & Text":
        "格式化、转换、比较和清理文本与结构化数据。",
      "Generators":
        "生成哈希、ID、测试数据、二维码和图标集。",
      "Security":
        "检查令牌和证书、创建密钥，无需把机密粘贴到网站上。",
      "Network & Config":
        "处理 HTTP 请求、URL、子网、定时任务和环境变量文件。",
      "Converters & Media":
        "转换时间戳、数字和颜色，查看图片和二进制文件的内部。",
    },
    jumpTo: "跳转到",
    toolCount: "{n} 个工具",
    whyOfflineLabel: "为何离线",
    networkBadge: "使用网络 · 按需",
    tools,
  },
  verification: {
    heading: "可验证，而非空口承诺",
    subheading:
      "「零网络请求」是一项可验证的声明，而不是营销话术。以下正是验证方式——如果你不愿只听我们一面之词，可以自行复现。",
    checks: [
      {
        title: "静态代码审计",
        body: "在整个源代码中检索 fetch/XMLHttpRequest/WebSocket 以及 Rust 端的网络原语。理应只有 API 请求测试器会匹配到——每次改动都会执行此检查。",
      },
      {
        title: "操作系统级防火墙拦截",
        body: "在 Windows 防火墙中阻止打包后二进制文件的所有出站流量，并确认其余所有工具仍能完全正常工作。",
      },
      {
        title: "网络隔离虚拟机",
        body: "为获得更强的保证，可在完全没有虚拟网卡的情况下运行同一构建版本，而不是依赖防火墙规则。",
      },
    ],
    terminalComment: "唯一有文档记录的例外",
    terminalExceptionComment: "唯一有文档记录的例外",
    terminalSuccess: "✓ 其余所有工具仍正常运行",
    statusLabel: "当前状态：",
    statusBody:
      "上述静态审计已针对完整代码库执行，未发现意外匹配项。防火墙/虚拟机测试是针对已签名发布版本的人工步骤——尚未执行。在此行更新之前，请将任何离线声明视为未经验证。",
  },
  faq: {
    heading: "常见问题",
    questions: [
      {
        question: "AirToolkit 真的做到零网络请求了吗？",
        answer:
          "是的，只有一个有明确记录的例外：API 请求测试器，其唯一目的就是按需发送你自行组装的请求。其余所有工具都绝不会接触网络。具体验证方式请参见安全页面。",
      },
      {
        question: "安装或运行它需要联网吗？",
        answer:
          "不需要。只要拿到安装包，安装过程以及所有工具都能完全离线工作——无需账号、无需许可证服务器、也没有更新检测。",
      },
      {
        question: "它支持哪些平台？",
        answer: "Windows，使用 Tauri 构建。它专为受限的 Windows 虚拟机打造，目前这是主要目标场景。你可以从 Microsoft Store 安装，或在 GitHub 下载安装程序用于离线电脑。",
      },
      {
        question: "它是开源的吗？",
        answer:
          "是的——完整源代码托管在 GitHub 上。你可以自由阅读、审计，或自行构建，而不必仅仅信任一个打包好的二进制文件。",
      },
      {
        question: "为什么不直接使用基于浏览器的工具？",
        answer:
          "大多数基于浏览器的开发工具网站在限制互联网访问的机器上根本无法访问，而许多声称支持离线的网站仍会加载分析脚本或字体 CDN，一旦被拦截就会报错（或悄悄联网上报）。",
      },
    ],
  },
  about: {
    tag: "# 关于",
    heading: "由最先需要它的人亲手打造",
    paragraphs: [
      "我是 Ayoub，一名软件工程师，为一家 B2B 公司开发安全与访问控制系统。这份工作的一部分意味着要花大量时间在限制互联网访问的虚拟机中工作——这些机器被刻意与外部世界隔离，因为这正是其上运行系统的核心目的。",
      "问题在于，大多数开发工具都假设你随时都能连上互联网。需要格式化 JSON、测试正则表达式、解码 JWT？在普通机器上，搜索一下就能解决。但在受限虚拟机上却不行——而那些声称「离线可用」的工具网站往往仍会加载分析脚本或字体 CDN，一旦被拦截就会明显报错，或悄悄联网上报。",
      "我一直用同样的方式解决这个问题：安装一个真正的桌面应用，装一次，从此不再担心网络问题。AirToolkit 就是这样一个应用，它是被认真打造出来的，而不是每次临时拼凑——38 款工具覆盖日常实用工作，完全在本地运行，并将「零网络请求」这一保证当作真正的工程约束，而非一句宣传口号。",
      "这也是我早前打造的离线密码管理器 NeuroKey 背后的同一种理念——没有云端，没有中间服务器，你的数据永远不会离开你的设备。AirToolkit 将同样的原则应用到了开发者每天都会用到的工具上。",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "了解更多",
    aboutDeveloper: "关于开发者 →",
    sourceGithub: "github 源代码 →",
  },
  privacy: {
    tag: "# 隐私",
    heading: "隐私政策",
    updated: "最后更新：2026 年 11 月 19 日",
    intro: "AirToolkit 不收集、不存储，也不传输任何个人信息。没有账户、没有遥测、没有分析、没有崩溃报告，也没有自动更新。本页说明哪些数据留在你的设备上，以及少数会传输数据的情况。",
    sections: [
      {
        title: "应用保存的内容",
        body: "AirToolkit 只在你的电脑上保存两样东西：你选择的浅色/深色主题，以及你在 Scratchpad 中输入的文本。两者都保存在本地，绝不会离开你的设备。对于 Microsoft Store 版本，卸载应用会将其删除。",
      },
      {
        title: "你的文件",
        body: "AirToolkit 只读取你亲自打开的文件，也只把文件写到你选择保存的位置。文件内容在你的设备上处理，绝不会被上传。",
      },
      {
        title: "网络访问",
        body: "AirToolkit 不会主动发起任何网络请求。唯一的例外是 API Request Tester：当你点击发送时，它会把你编写的请求原样发送到你输入的地址。该请求直接从你的电脑发往该地址，绝不会发送给我们或任何第三方。",
      },
      {
        title: "Microsoft Store",
        body: "如果你从 Microsoft Store 安装 AirToolkit，下载和许可由 Microsoft 按照《Microsoft 隐私声明》处理。Microsoft 可能会向我们提供汇总的匿名统计数据，例如安装次数或崩溃次数，我们无法据此识别你的身份。",
      },
      {
        title: "本网站",
        body: "本网站没有任何分析、跟踪或广告，字体也由本站自行提供。它只会用一个 cookie 保存你选择的语言，并用一个临时标记避免在你访问期间重复播放开场动画。与任何 Web 服务器一样，我们的服务器可能会保留常规技术日志（例如 IP 地址和请求的页面），用于安全和网站运行。",
      },
      {
        title: "儿童",
        body: "AirToolkit 不收集任何人的个人信息，包括 13 岁以下的儿童。",
      },
      {
        title: "变更",
        body: "如果本政策发生变更，新版本将发布在本页面，并更新日期。",
      },
    ],
    contactLead: "对隐私有疑问？",
    contactLink: "在 github 上提交 issue →",
  },
};

export default dict;
