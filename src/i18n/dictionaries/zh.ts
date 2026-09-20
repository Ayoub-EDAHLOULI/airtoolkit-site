import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 39 款开发工具，零网络请求",
    siteDescription:
      "为完全隔离和受限的 Windows 机器打造的离线优先开发者工具箱。没有遥测、没有自动更新、绝不联网上报。",
    toolsTitle: "工具 — AirToolkit",
    toolsDescription:
      "浏览 AirToolkit 内置的全部 39 款工具，从 JSON 格式化到证书生成，按类别分类。",
    securityTitle: "安全与验证 — AirToolkit",
    securityDescription:
      "AirToolkit「零网络请求」承诺是如何被验证的：静态代码审计与操作系统级防火墙/虚拟机测试，两者你都可以自行复现。",
    faqTitle: "常见问题 — AirToolkit",
    faqDescription: "关于 AirToolkit 的离线保证、支持平台以及开源可用性的解答。",
    aboutTitle: "关于我们 — AirToolkit",
    aboutDescription:
      "AirToolkit 为何存在：由一位安全工程师打造，他需要能在受限虚拟机上使用的离线开发工具，却找不到真正做到离线的工具。",
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
  },
  hero: {
    badge: "无遥测 · 无自动更新 · 无网络请求",
    title: "39 款开发工具。零网络请求。",
    body: "AirToolkit 将你每天都会用到的实用工具——JSON 格式化、正则测试、哈希计算、JWT 解码等——集成到一个桌面应用中，该应用绝不会自行发起任何网络请求。没有遥测，没有自动更新，绝不联网上报。",
    downloadWindows: "下载 windows 版",
    viewGithub: "在 github 上查看",
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
        body: "39 款工具分为五个类别，支持搜索。所有功能都在同一窗口内本地运行。",
      },
      {
        title: "自行验证",
        body: "在防火墙上阻止该应用后继续使用——除 API 请求测试器外的每一款工具都能照常运行。",
      },
    ],
    browseTools: "→ 浏览全部工具",
  },
  toolsShowcase: {
    heading: "39 款工具，一个应用",
    subheading:
      "所有功能都在同一窗口内本地运行，无需为每个工具单独配置。可在应用侧边栏中搜索，或在此按类别浏览。",
    categories: {
      "Formatters & Text": "格式化与文本",
      Generators: "生成器",
      Security: "安全",
      "Network & Config": "网络与配置",
      "Converters & Media": "转换与媒体",
    },
    tools: {
      jsonFormatter: {
        label: "JSON 格式化工具",
        description: "美化、压缩并验证 JSON。",
      },
      xmlCsvFormatter: {
        label: "XML / CSV 格式化工具",
        description: "美化 XML，并以表格形式查看 CSV。",
      },
      sqlFormatter: {
        label: "SQL 格式化工具",
        description: "将压缩的 SQL 转换为可读的缩进格式。",
      },
      markdownPreviewer: {
        label: "Markdown 预览器",
        description: "边输入边实时渲染 Markdown。",
      },
      jsonYamlToml: {
        label: "JSON ↔ YAML / TOML",
        description: "在 JSON、YAML 和 TOML 之间互相转换。",
      },
      regexTester: {
        label: "正则表达式测试器",
        description: "匹配高亮、捕获组，以及正则语法速查表。",
      },
      diffTool: {
        label: "文本对比工具",
        description: "对两段文本进行逐行比较。",
      },
      caseConverter: {
        label: "命名格式转换器",
        description: "camelCase、snake_case、kebab-case 等多种命名格式。",
      },
      textUtilities: {
        label: "文本实用工具",
        description: "排序、去重、规范化空白字符，统计字数与行数。",
      },
      encodeDecode: {
        label: "编码 / 解码",
        description: "Base64、URL 编码以及 HTML 实体。",
      },
      logParserGrep: {
        label: "日志解析 / Grep",
        description: "按模式过滤多行日志，并查看最常重复的行。",
      },
      stringEscapeUnescape: {
        label: "字符串转义 / 反转义",
        description: "JSON、Shell、SQL 与正则表达式的转义一站式处理。",
      },
      jsonDiff: {
        label: "JSON 差异对比",
        description: "按键/值进行结构化对比——忽略顺序与格式差异。",
      },
      jsonSchemaValidator: {
        label: "JSON Schema 校验器",
        description: "根据 JSON Schema 校验 JSON 文档。",
      },
      scratchpad: {
        label: "便签本",
        description: "一个永远不会离开你设备的本地多笔记便签本。",
      },
      hashUuidGenerator: {
        label: "哈希 / UUID 生成器",
        description: "生成 MD5、SHA-1/256/512 以及 UUID v4。",
      },
      fakeDataGenerator: {
        label: "虚拟数据生成器",
        description: "生成姓名、邮箱、地址等，用于填充测试数据。",
      },
      qrCodeGenerator: {
        label: "二维码生成器",
        description: "将文本或链接生成二维码，可导出为 PNG。",
      },
      faviconGenerator: {
        label: "网站图标生成器",
        description: "输入一张图片，输出一整套图标尺寸和 .ico 文件。",
      },
      jwtDecoder: {
        label: "JWT 解码器",
        description: "查看头部、载荷及签名声明。",
      },
      x509CertificateDecoder: {
        label: "X.509 证书解码器",
        description: "从粘贴的 PEM 证书中解析颁发者、主体、有效期及 SAN。",
      },
      passwordStrengthChecker: {
        label: "密码强度检测器",
        description: "熵值与破解耗时估算，附带强密码生成器。",
      },
      certificateCsrGenerator: {
        label: "证书 / CSR 生成器",
        description: "生成自签名证书或 CSR——私钥绝不会离开你的设备。",
      },
      apiRequestTester: {
        label: "API 请求测试器",
        description: "按需组装并发送 HTTP 请求——这是零网络请求原则中唯一有意保留的例外。",
      },
      urlParserBuilder: {
        label: "URL 解析 / 构建器",
        description: "将 URL 拆解为各个字段，或从零构建一个 URL。",
      },
      subnetCidrCalculator: {
        label: "子网 / CIDR 计算器",
        description: "根据 IP + CIDR 计算网络地址、广播地址及可用主机范围。",
      },
      cronExplainer: {
        label: "Cron 表达式解释器",
        description: "以易读方式解释 cron 表达式，并给出下次运行时间。",
      },
      dotenvDiffValidator: {
        label: "dotenv 对比与校验器",
        description: "比较两个 .env 文件，找出缺失、多余或不同的键。",
      },
      networkPortReference: {
        label: "网络端口参考",
        description: "可搜索的常用端口及其对应服务查询表。",
      },
      curlRequestBuilder: {
        label: "cURL ↔ 请求构建器",
        description: "将 cURL 命令解析为各个部分，或根据请求生成 cURL 命令。",
      },
      systemInfo: {
        label: "系统信息",
        description: "平台、架构、主机名与区域设置——均在本地读取。",
      },
      timestampConverter: {
        label: "时间戳转换器",
        description: "在 Unix 时间戳与日期之间互相转换，支持秒或毫秒。",
      },
      numberBaseConverter: {
        label: "进制转换器",
        description: "二进制、八进制、十进制与十六进制之间的转换。",
      },
      colorTools: {
        label: "颜色工具",
        description: "HEX、RGB、HSL 与 CMYK 转换，附带可视化取色器。",
      },
      colorPaletteExtractor: {
        label: "调色板提取器",
        description: "通过 k-means 聚类从图像中提取主色调。",
      },
      qrCodeReader: {
        label: "二维码读取器",
        description: "将二维码图像解码回文本。",
      },
      hexBinaryFileInspector: {
        label: "十六进制 / 二进制文件检查器",
        description: "对任意文件进行十六进制转储及魔数文件类型检测。",
      },
      base64FileEncoder: {
        label: "Base64 文件编码器",
        description: "将任意文件编码为 Base64 或 data URI，并可解码还原。",
      },
    },
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
        answer: "Windows，使用 Tauri 构建。它专为受限的 Windows 虚拟机打造，目前这是主要目标场景。",
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
      "我一直用同样的方式解决这个问题：安装一个真正的桌面应用，装一次，从此不再担心网络问题。AirToolkit 就是这样一个应用，它是被认真打造出来的，而不是每次临时拼凑——39 款工具覆盖日常实用工作，完全在本地运行，并将「零网络请求」这一保证当作真正的工程约束，而非一句宣传口号。",
      "这也是我早前打造的离线密码管理器 NeuroKey 背后的同一种理念——没有云端，没有中间服务器，你的数据永远不会离开你的设备。AirToolkit 将同样的原则应用到了开发者每天都会用到的工具上。",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "了解更多",
    aboutDeveloper: "关于开发者 →",
    sourceGithub: "github 源代码 →",
  },
};

export default dict;
