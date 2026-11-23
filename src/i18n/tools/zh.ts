import type { ToolsDict } from "../types";

const tools: ToolsDict = {
  // Formatters & Text
  jsonFormatter: {
    label: "JSON 格式化工具",
    description: "美化或压缩 JSON，无效时立即提示。",
    features: [
      "2 或 4 空格缩进，或压缩为单行",
      "报告解析错误，损坏的 JSON 一眼可见",
      "输入与输出并排显示，一键复制",
    ],
    whyOffline: "API 响应和配置文件常含有令牌或客户数据，不应粘贴到在线格式化工具中。",
  },
  xmlCsvFormatter: {
    label: "XML / CSV 格式化工具",
    description: "格式化 XML，并将 CSV 显示为易读的表格。",
    features: [
      "XML：美化或压缩",
      "CSV：选择分隔符，以表格查看各行",
      "复制格式化结果",
    ],
    whyOffline: "数据导出和旧版 XML 配置可以直接在生成它们的机器上检查。",
  },
  sqlFormatter: {
    label: "SQL 格式化工具",
    description: "将压缩的查询变成易读、带缩进的 SQL。",
    features: [
      "方言：PostgreSQL、MySQL、SQLite、SQL Server (T-SQL) 和标准 SQL",
      "关键字大小写：保持原样、全大写或全小写",
      "实时输出，可复制",
    ],
    whyOffline: "生产环境查询会暴露表名和数据，在这里它们只留在你的机器上。",
  },
  markdownPreviewer: {
    label: "Markdown 预览器",
    description: "边写边实时预览 Markdown，安全渲染。",
    features: [
      "GitHub 风格 Markdown：表格、任务列表、代码块",
      "渲染后的 HTML 在显示前经过净化",
      "复制生成的 HTML",
    ],
    whyOffline: "无需浏览器扩展或在线编辑器即可预览 README 和文档。",
  },
  jsonYamlToml: {
    label: "JSON ↔ YAML / TOML",
    description: "在 JSON、YAML 和 TOML 之间任意方向转换。",
    features: [
      "源格式和目标格式可分别选择",
      "适用于 Kubernetes 清单、CI 文件以及 Cargo / pyproject 配置",
      "复制转换结果",
    ],
    whyOffline: "基础设施配置常包含内部主机名和密钥。",
  },
  regexTester: {
    label: "正则表达式测试器",
    description: "测试正则表达式，实时高亮匹配结果。",
    features: [
      "标志：g、i、m、s (dotAll) 和 u (unicode)",
      "在文本中高亮匹配，并列出每个匹配的位置和捕获组",
      "内置 16 个常用语法的速查表",
    ],
    whyOffline: "人人都需要、却通常只有网页版的工具。",
  },
  diffTool: {
    label: "文本对比工具",
    description: "逐行查看两段文本之间的差异。",
    features: [
      "原文与修改后文本并排显示",
      "高亮新增和删除的行",
    ],
    whyOffline: "在服务器上直接对比配置版本，无需复制到别处。",
  },
  caseConverter: {
    label: "命名格式转换器",
    description: "一次将文本转换为 9 种命名风格。",
    features: [
      "UPPERCASE、lowercase、Title Case、Sentence case",
      "camelCase、PascalCase、snake_case、kebab-case、CONSTANT_CASE",
      "所有风格同时显示，各带复制按钮",
    ],
    whyOffline: "快速重命名变量、列名和环境变量键。",
  },
  textUtilities: {
    label: "文本实用工具",
    description: "统计并清理文本。",
    features: [
      "实时统计：字符数（含/不含空格）、单词数、行数",
      "按 A→Z 或 Z→A 排序行，删除重复行",
      "合并空白，将换行符转换为 LF 或 CRLF",
    ],
    whyOffline: "就地清理列表和日志，包括 Windows 与 Linux 文件之间的换行符问题。",
  },
  encodeDecode: {
    label: "编码 / 解码",
    description: "对 Base64、URL 编码和 HTML 实体进行编码与解码。",
    features: [
      "三种方案：Base64、URL 编码、HTML 实体",
      "编码或解码，一键切换方向",
      "复制结果",
    ],
    whyOffline: "解码日志中的 Base64 数据是常见又敏感的操作。",
  },
  logParserGrep: {
    label: "日志解析 / Grep",
    description: "像 grep 一样用正则过滤日志。",
    features: [
      "正则过滤，可忽略大小写",
      "反向匹配，类似 grep -v",
      "显示匹配行，以及重复最多的 5 行",
      "复制全部匹配",
    ],
    whyOffline: "日志正是绝不能离开受限机器的那类数据。",
  },
  stringEscapeUnescape: {
    label: "字符串转义 / 反转义",
    description: "为 JSON、shell、SQL 和正则转义或反转义字符串。",
    features: [
      "四种目标：JSON、shell、SQL、正则",
      "转义或反转义，一键切换",
      "复制结果",
    ],
    whyOffline: "安全地将值嵌入脚本和查询，不再靠猜。",
  },
  jsonDiff: {
    label: "JSON 差异对比",
    description: "按结构而非按行比较两个 JSON 文档。",
    features: [
      "比较键和值，键的顺序变化不算差异",
      "列出修改、新增和删除的值及其路径",
      "文档完全相同时给出明确提示",
    ],
    whyOffline: "对比两个环境的 API 响应或配置。",
  },
  jsonSchemaValidator: {
    label: "JSON Schema 校验器",
    description: "根据 JSON Schema 校验 JSON 文档。",
    features: [
      "Schema 与数据并排显示",
      "报告所有错误，而不只是第一个",
      "清晰的有效 / 无效结果",
    ],
    whyOffline: "在开发过程中按契约校验载荷和配置。",
  },
  scratchpad: {
    label: "便签本",
    description: "支持多条笔记的小型记事本，保存在本机。",
    features: [
      "新建、重命名和删除笔记",
      "自动保存在本地",
      "不同步，也不上传",
    ],
    whyOffline: "在没有云笔记的机器上随手保存代码片段和命令。",
  },

  // Generators
  hashUuidGenerator: {
    label: "哈希 / UUID 生成器",
    description: "计算文本哈希并生成 UUID。",
    features: [
      "一次算出输入的 MD5、SHA-1、SHA-256 和 SHA-512",
      "批量生成随机的第 4 版 UUID",
      "复制单个值或全部",
    ],
    whyOffline: "校验和与 ID 随时都要用，而输入内容可能很敏感。",
  },
  fakeDataGenerator: {
    label: "虚拟数据生成器",
    description: "生成逼真的测试记录。",
    features: [
      "字段：姓名、邮箱、UUID、地址、电话、公司",
      "自定义生成数量",
      "输出为 JSON 或 CSV",
    ],
    whyOffline: "填充测试数据库，无需动用真实客户数据。",
  },
  qrCodeGenerator: {
    label: "二维码生成器",
    description: "将文本或 URL 转换为二维码。",
    features: [
      "输入时实时预览",
      "通过 Windows 保存对话框存为 PNG",
      "将图片复制为 data URL",
    ],
    whyOffline: "无需在线生成器，就能把网址或 Wi-Fi 信息传到手机上。",
  },
  faviconGenerator: {
    label: "网站图标生成器",
    description: "用一张图片生成整套网站图标。",
    features: [
      "8 种 PNG 尺寸：16、32、48、64、128、180、192 和 512 px",
      "多分辨率 favicon.ico（16、32 和 48 px）",
      "将所有 PNG 保存到文件夹，或保存 .ico",
    ],
    whyOffline: "离线构建机上的 Web 项目同样需要图标。",
  },

  // Security
  jwtDecoder: {
    label: "JWT 解码器",
    description: "解码 JSON Web Token 的头部和载荷。",
    features: [
      "头部和载荷以格式化 JSON 显示",
      "exp、iat 和 nbf 声明显示为易读日期",
      "签名原样显示，并明确提示未做验证",
    ],
    whyOffline: "把真实令牌粘贴到网站上，就是一起随时可能发生的安全事故。",
  },
  x509CertificateDecoder: {
    label: "X.509 证书解码器",
    description: "读取 PEM 证书，查看其中内容。",
    features: [
      "主题、颁发者和序列号",
      "有效期，过期证书会被标出",
      "签名算法、CA 标志和密钥用途",
      "SHA-1 和 SHA-256 指纹",
    ],
    whyOffline: "检查内部或客户证书，无需上传。",
  },
  passwordStrengthChecker: {
    label: "密码强度检测器",
    description: "评估密码强度，并给出更强的密码。",
    features: [
      "以比特计的熵和预计破解时间（离线攻击，约每秒 100 亿次猜测）",
      "识别键盘序列、重复字符和常见密码",
      "生成高强度随机密码",
    ],
    whyOffline: "在网站上检测密码，本身就违背了初衷。",
  },
  certificateCsrGenerator: {
    label: "证书 / CSR 生成器",
    description: "创建自签名证书或 CSR，密钥在你的设备上生成。",
    features: [
      "密钥：RSA 2048、RSA 4096 或 ECDSA P-256",
      "主题字段（CN、O、OU、L、ST、C）、使用者备用名称 (SAN) 和有效期",
      "输出证书或 CSR、私钥 (PKCS#8) 和公钥，均为 PEM 格式",
    ],
    whyOffline: "私钥在你的设备上生成且从不离开，这与在线 CSR 生成器不同。",
  },

  // Network & Config
  apiRequestTester: {
    label: "API 请求测试器",
    description: "发送你编写的 HTTP 请求并查看响应。唯一会使用网络的工具。",
    features: [
      "方法：GET、POST、PUT、PATCH、DELETE、HEAD",
      "请求头编辑器和请求体",
      "状态码、响应时间和响应体，另附可搜索的 42 个状态码参考",
    ],
    whyOffline: "只有在你点击“发送”时才会发出请求，且只发往你输入的地址。专为测试内网服务而设计。",
  },
  urlParserBuilder: {
    label: "URL 解析 / 构建器",
    description: "将 URL 拆分为各个部分，或由各部分构建 URL。",
    features: [
      "粘贴 URL，自动填入协议、主机、端口、路径和片段",
      "以键/值列表编辑查询参数",
      "重建的 URL 实时更新，可复制",
    ],
    whyOffline: "安全地调试冗长的重定向和回调 URL。",
  },
  subnetCidrCalculator: {
    label: "子网 / CIDR 计算器",
    description: "根据地址和前缀计算 IPv4 子网信息。",
    features: [
      "网络地址和广播地址",
      "子网掩码和通配符掩码",
      "可用主机范围、主机数和地址总数",
    ],
    whyOffline: "网络规划恰恰就在这些隔离网络中进行。",
  },
  cronExplainer: {
    label: "Cron 表达式解释器",
    description: "用通俗语言解释 cron 表达式，并列出接下来的运行时间。",
    features: [
      "易读的调度说明",
      "接下来 5 次运行时间",
      "可直接上手的示例表达式",
    ],
    whyOffline: "在部署前检查服务器上的定时任务。",
  },
  dotenvDiffValidator: {
    label: "dotenv 对比与校验器",
    description: "比较两个 .env 文件并标出问题。",
    features: [
      "只存在于其中一个文件的键",
      "值不同的键",
      "任一文件中重复的键",
    ],
    whyOffline: ".env 文件满是密钥，在线比较绝不可取。",
  },
  networkPortReference: {
    label: "网络端口参考",
    description: "可搜索的常用网络端口列表。",
    features: [
      "64 个知名端口，含服务名称和说明",
      "按端口号、服务或说明搜索",
    ],
    whyOffline: "这类信息平时都要上网查。",
  },
  curlRequestBuilder: {
    label: "cURL ↔ 请求构建器",
    description: "将 cURL 命令拆成可编辑字段，也能由字段生成 cURL。",
    features: [
      "粘贴 cURL 命令（例如从浏览器开发者工具复制），自动填入方法、URL、请求头和请求体",
      "编辑字段，得到重新生成的 cURL 命令",
    ],
    whyOffline: "复制来的 cURL 命令通常带有 Cookie 和认证头。",
  },
  systemInfo: {
    label: "系统信息",
    description: "机器和应用的详细信息，全部在本地读取。",
    features: [
      "操作系统、版本、架构、主机名和区域设置",
      "屏幕分辨率、窗口大小和用户代理",
      "AirToolkit 和 Tauri 版本，可一键全部复制",
    ],
    whyOffline: "为受限虚拟机中的问题报告快速提供环境信息。",
  },

  // Converters & Media
  timestampConverter: {
    label: "时间戳转换器",
    description: "在 Unix 时间戳和日期之间转换。",
    features: [
      "Unix（秒或毫秒）转为 ISO 8601、本地时间和 UTC",
      "日期转为 Unix，支持 ISO 8601 或 “Jan 17 2024” 这类格式",
      "“现在”按钮获取当前时间",
    ],
    whyOffline: "读取日志和令牌中的时间戳是日常工作。",
  },
  numberBaseConverter: {
    label: "进制转换器",
    description: "在二进制、八进制、十进制和十六进制之间转换数字。",
    features: [
      "在任一进制中输入，四种进制同步更新",
      "显示前缀：0b、0o、0x",
      "可复制任意进制",
    ],
    whyOffline: "用于位掩码、权限和内存地址。",
  },
  colorTools: {
    label: "颜色工具",
    description: "在 HEX、RGB、HSL 和 CMYK 之间转换颜色。",
    features: [
      "编辑任一格式，其他格式同步更新",
      "取色器和颜色预览",
      "无效值给出清晰提示",
    ],
    whyOffline: "在没有设计软件的机器上完成设计工作。",
  },
  colorPaletteExtractor: {
    label: "调色板提取器",
    description: "找出图片中的 6 种主色。",
    features: [
      "显示每种颜色在图中的占比",
      "以 HEX 复制每种颜色",
      "对采样像素进行 k-means 聚类",
    ],
    whyOffline: "图片在你的设备上处理，绝不上传。",
  },
  qrCodeReader: {
    label: "二维码读取器",
    description: "读取二维码图片中的文本。",
    features: [
      "打开包含二维码的图片文件",
      "显示解码文本，可复制",
    ],
    whyOffline: "打开二维码前先确认它指向哪里。",
  },
  hexBinaryFileInspector: {
    label: "十六进制 / 二进制文件检查器",
    description: "查看文件的字节并识别其真实类型。",
    features: [
      "带 ASCII 列的十六进制转储（前 16 KB）",
      "通过魔数识别 23 种文件类型：PNG、PDF、ZIP、EXE/DLL、ELF、SQLite 等",
      "识别纯文本文件",
    ],
    whyOffline: "检查可疑或无标识的文件，无需上传到在线扫描器。",
  },
  base64FileEncoder: {
    label: "Base64 文件编码器",
    description: "将文件转换为 Base64，也可还原。",
    features: [
      "将任意文件编码为 Base64，或带 MIME 类型的 data URI",
      "解码 Base64 或 data URI 并保存文件",
      "复制编码后的文本",
    ],
    whyOffline: "在受限系统上通过纯文本渠道传输小文件。",
  },
};

export default tools;
