import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 39 herramientas dev, cero llamadas de red",
    siteDescription:
      "Una caja de herramientas para desarrolladores totalmente sin conexión, pensada para máquinas Windows aisladas o bloqueadas. Sin telemetría, sin actualizaciones automáticas, sin conexión a servidores, nunca.",
    toolsTitle: "Herramientas — AirToolkit",
    toolsDescription:
      "Explora las 39 herramientas incluidas en AirToolkit, desde el formateo de JSON hasta la generación de certificados, organizadas por categoría.",
    securityTitle: "Seguridad y verificación — AirToolkit",
    securityDescription:
      "Cómo se comprueba la afirmación de cero llamadas de red de AirToolkit: una auditoría estática del código y una prueba de firewall/VM a nivel de sistema operativo, ambas reproducibles por ti mismo.",
    faqTitle: "Preguntas frecuentes — AirToolkit",
    faqDescription:
      "Respuestas sobre la garantía sin conexión de AirToolkit, las plataformas compatibles y la disponibilidad de código abierto.",
    aboutTitle: "Acerca de — AirToolkit",
    aboutDescription:
      "Por qué existe AirToolkit: creado por un ingeniero de seguridad que necesitaba herramientas de desarrollo sin conexión para VM bloqueadas y no encontró ninguna que realmente lo fuera.",
  },
  nav: {
    tools: "herramientas",
    security: "seguridad",
    faq: "faq",
    about: "acerca de",
    download: "descargar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "sin telemetría · sin actualizaciones automáticas · sin llamadas de red",
    title: "39 herramientas dev. Cero llamadas de red.",
    body: "AirToolkit reúne las utilidades que usas a diario — formateo de JSON, pruebas de regex, hashing, decodificación de JWT y más — en una sola aplicación de escritorio que nunca hace llamadas de red por su cuenta. Sin telemetría, sin actualizaciones automáticas, sin conexión a servidores. Nunca.",
    downloadWindows: "descargar para windows",
    viewGithub: "ver en github",
    deployNote: "¿desplegando vía Group Policy o SCCM?",
    grabMsi: "obtén el .msi",
    msiSuffix: "en su lugar",
    terminalComment1: "# bloquear todo el tráfico saliente",
    terminalComment2: "# la app sigue funcionando con normalidad",
  },
  whyOffline: {
    heading: "Por qué importa el modo sin conexión",
    subheading: "Esto surgió de una necesidad real, no de una lista de funciones.",
    points: [
      {
        num: "01",
        title: "Las VM bloqueadas no pueden acceder a una herramienta de navegador",
        body: "Las máquinas con acceso a Internet restringido son comunes en empresas centradas en seguridad y control de acceso. Abrir un formateador de JSON o un probador de regex basado en navegador simplemente no es una opción ahí.",
      },
      {
        num: "02",
        title: "Las herramientas web \"sin conexión\" normalmente no lo son",
        body: "La mayoría de los sitios que afirman ser compatibles sin conexión siguen cargando analíticas, CDN de fuentes o comprobaciones de actualización — que fallan ruidosamente, o se conectan en silencio en cuanto se bloquean.",
      },
      {
        num: "03",
        title: "Sin dependencia de red, punto final",
        body: "AirToolkit no realiza ninguna llamada de red por su cuenta: sin telemetría, sin actualizaciones automáticas, sin conexión a servidores. La única excepción — el probador de solicitudes API — es opcional y está documentada.",
      },
    ],
    seeVerification: "→ ver cómo se verifica esto",
  },
  howItWorks: {
    heading: "Cómo funciona",
    steps: [
      {
        title: "Descarga e instala",
        body: "Consigue el instalador de Windows — sin cuenta, sin clave de licencia, sin necesidad de conexión a Internet para ejecutarlo.",
      },
      {
        title: "Elige una herramienta en la barra lateral",
        body: "39 herramientas organizadas en cinco categorías, con búsqueda. Todo se ejecuta localmente en la misma ventana.",
      },
      {
        title: "Verifícalo tú mismo",
        body: "Bloquea la aplicación en el firewall y sigue trabajando — todas las herramientas excepto el probador de solicitudes API siguen funcionando con normalidad.",
      },
    ],
    browseTools: "→ explorar todas las herramientas",
  },
  toolsShowcase: {
    heading: "39 herramientas, una sola app",
    subheading:
      "Todo se ejecuta localmente, en la misma ventana, sin configuración por herramienta. Busca en la barra lateral de la app, o explora por categoría aquí.",
    categories: {
      "Formatters & Text": "Formateadores y texto",
      Generators: "Generadores",
      Security: "Seguridad",
      "Network & Config": "Red y configuración",
      "Converters & Media": "Conversores y medios",
    },
    tools: {
      jsonFormatter: {
        label: "Formateador JSON",
        description: "Formatea, minifica y valida JSON.",
      },
      xmlCsvFormatter: {
        label: "Formateador XML / CSV",
        description: "Formatea XML y visualiza CSV como tabla.",
      },
      sqlFormatter: {
        label: "Formateador SQL",
        description: "Convierte SQL minificado en una salida legible e indentada.",
      },
      markdownPreviewer: {
        label: "Vista previa de Markdown",
        description: "Renderizado de Markdown en vivo mientras escribes.",
      },
      jsonYamlToml: {
        label: "JSON ↔ YAML / TOML",
        description: "Convierte entre JSON, YAML y TOML.",
      },
      regexTester: {
        label: "Probador de regex",
        description:
          "Resaltado de coincidencias, grupos de captura y una chuleta de patrones.",
      },
      diffTool: {
        label: "Herramienta de diff",
        description: "Diff línea por línea entre dos bloques de texto.",
      },
      caseConverter: {
        label: "Convertidor de mayúsculas/minúsculas",
        description: "camelCase, snake_case, kebab-case y más.",
      },
      textUtilities: {
        label: "Utilidades de texto",
        description:
          "Ordenar, eliminar duplicados, normalizar espacios y contar palabras y líneas.",
      },
      encodeDecode: {
        label: "Codificar / Decodificar",
        description: "Base64, codificación de URL y entidades HTML.",
      },
      logParserGrep: {
        label: "Analizador de logs / Grep",
        description:
          "Filtra logs multilínea por patrón, con una vista de líneas más repetidas.",
      },
      stringEscapeUnescape: {
        label: "Escapado de cadenas",
        description: "Escapado de JSON, shell, SQL y regex en un solo lugar.",
      },
      jsonDiff: {
        label: "Diff de JSON",
        description:
          "Diff estructural por clave/valor — ignora el reordenamiento y el formato.",
      },
      jsonSchemaValidator: {
        label: "Validador de JSON Schema",
        description: "Valida un documento JSON contra un JSON Schema.",
      },
      scratchpad: {
        label: "Bloc de notas",
        description:
          "Un bloc de notas local multi-nota que nunca sale de tu máquina.",
      },
      hashUuidGenerator: {
        label: "Generador de hash / UUID",
        description: "Generación de MD5, SHA-1/256/512 y UUID v4.",
      },
      fakeDataGenerator: {
        label: "Generador de datos falsos",
        description:
          "Nombres, correos, direcciones y más para poblar datos de prueba.",
      },
      qrCodeGenerator: {
        label: "Generador de código QR",
        description: "Texto o URL a un código QR, exportable como PNG.",
      },
      faviconGenerator: {
        label: "Generador de favicon",
        description:
          "Una imagen de entrada, un conjunto completo de tamaños de favicon y un .ico de salida.",
      },
      jwtDecoder: {
        label: "Decodificador de JWT",
        description: "Inspecciona el encabezado, el payload y los claims de firma.",
      },
      x509CertificateDecoder: {
        label: "Decodificador de certificados X.509",
        description:
          "Emisor, sujeto, validez y SAN a partir de un certificado PEM pegado.",
      },
      passwordStrengthChecker: {
        label: "Verificador de fortaleza de contraseñas",
        description:
          "Estimaciones de entropía y tiempo de crackeo, más un generador de contraseñas seguras.",
      },
      certificateCsrGenerator: {
        label: "Generador de certificado / CSR",
        description:
          "Genera un certificado autofirmado o un CSR — la clave privada nunca sale de tu dispositivo.",
      },
      apiRequestTester: {
        label: "Probador de solicitudes API",
        description:
          "Compón y envía solicitudes HTTP bajo demanda — la única excepción deliberada al cero llamadas de red.",
      },
      urlParserBuilder: {
        label: "Analizador / constructor de URL",
        description: "Descompón una URL en campos, o construye una desde cero.",
      },
      subnetCidrCalculator: {
        label: "Calculadora de subred / CIDR",
        description:
          "Dirección de red, broadcast y rango de hosts utilizables a partir de una IP + CIDR.",
      },
      cronExplainer: {
        label: "Explicador de cron",
        description:
          "Explicación legible de una expresión cron, más las próximas ejecuciones.",
      },
      dotenvDiffValidator: {
        label: "Diff y validador de dotenv",
        description:
          "Compara dos archivos .env en busca de claves faltantes, extra o diferentes.",
      },
      networkPortReference: {
        label: "Referencia de puertos de red",
        description: "Búsqueda de puertos comunes y qué se ejecuta en ellos.",
      },
      curlRequestBuilder: {
        label: "cURL ↔ Constructor de solicitudes",
        description:
          "Analiza un comando cURL en sus partes, o genera uno a partir de una solicitud.",
      },
      systemInfo: {
        label: "Información del sistema",
        description: "Plataforma, arquitectura, hostname y configuración regional — leídos localmente.",
      },
      timestampConverter: {
        label: "Convertidor de timestamp",
        description:
          "Timestamps Unix a fechas y viceversa, en segundos o milisegundos.",
      },
      numberBaseConverter: {
        label: "Convertidor de base numérica",
        description: "Conversión binaria, octal, decimal y hexadecimal.",
      },
      colorTools: {
        label: "Herramientas de color",
        description: "Conversión HEX, RGB, HSL y CMYK con selector visual.",
      },
      colorPaletteExtractor: {
        label: "Extractor de paleta de colores",
        description: "Colores dominantes de una imagen mediante clustering k-means.",
      },
      qrCodeReader: {
        label: "Lector de código QR",
        description: "Decodifica una imagen de código QR de vuelta a texto.",
      },
      hexBinaryFileInspector: {
        label: "Inspector de archivos hex / binarios",
        description:
          "Volcado hexadecimal y detección de tipo de archivo por magic bytes.",
      },
      base64FileEncoder: {
        label: "Codificador de archivos Base64",
        description:
          "Codifica cualquier archivo a base64 o a un data URI, y decodifícalo de vuelta.",
      },
    },
  },
  verification: {
    heading: "Verificable, no solo afirmado",
    subheading:
      "\"Cero llamadas de red\" es una afirmación comprobable, no una frase de marketing. Aquí está exactamente cómo se verifica — reprodúcelo tú mismo si no quieres confiar en nuestra palabra.",
    checks: [
      {
        title: "Auditoría estática del código",
        body: "Grep en todo el código fuente en busca de fetch/XMLHttpRequest/WebSocket y primitivas de red del lado de Rust. Solo el probador de solicitudes API debería coincidir — se ejecuta en cada cambio.",
      },
      {
        title: "Bloqueo de firewall a nivel de sistema operativo",
        body: "Bloquea todo el tráfico saliente del binario empaquetado en el Firewall de Windows y confirma que todas las demás herramientas siguen funcionando por completo.",
      },
      {
        title: "VM aislada de la red",
        body: "Para una garantía más sólida, ejecuta la misma build sin ninguna NIC virtual en lugar de depender de una regla de firewall.",
      },
    ],
    terminalComment: "la única excepción documentada",
    terminalExceptionComment: "la única excepción documentada",
    terminalSuccess: "✓ todas las demás herramientas siguen funcionando con normalidad",
    statusLabel: "Estado actual:",
    statusBody:
      "la auditoría estática anterior se ha ejecutado contra la base de código completa sin coincidencias inesperadas. La ejecución de firewall/VM es un paso manual contra una build de release firmada — aún no realizado. Considera cualquier afirmación de funcionamiento sin conexión como no verificada hasta que se actualice esta línea.",
  },
  faq: {
    heading: "Preguntas frecuentes",
    questions: [
      {
        question: "¿AirToolkit realmente no hace ninguna llamada de red?",
        answer:
          "Sí, con una excepción documentada: el probador de solicitudes API, cuyo único propósito es enviar una solicitud que compones bajo demanda. Ninguna otra herramienta toca la red. Consulta la página de Seguridad para ver exactamente cómo se verifica esto.",
      },
      {
        question: "¿Necesito conexión a Internet para instalarlo o ejecutarlo?",
        answer:
          "No. Una vez que tienes el instalador, la instalación y todas las herramientas funcionan completamente sin conexión — sin cuenta, sin servidor de licencias, sin comprobación de actualizaciones.",
      },
      {
        question: "¿Qué plataformas admite?",
        answer:
          "Windows, construido con Tauri. Se creó específicamente para VM de Windows bloqueadas, que son el objetivo principal hoy en día.",
      },
      {
        question: "¿Es de código abierto?",
        answer:
          "Sí — el código fuente completo está en GitHub. Eres bienvenido a leerlo, auditarlo o compilarlo tú mismo en lugar de confiar en un binario empaquetado.",
      },
      {
        question: "¿Por qué no simplemente usar herramientas basadas en navegador?",
        answer:
          "La mayoría de los sitios de herramientas de desarrollo basados en navegador son inaccesibles en máquinas con acceso a Internet restringido, y muchos de los que afirman funcionar sin conexión siguen cargando analíticas o CDN de fuentes que fallan (o se conectan en silencio) en cuanto se bloquean.",
      },
    ],
  },
  about: {
    tag: "# acerca de",
    heading: "Creado por alguien que lo necesitaba primero",
    paragraphs: [
      "Soy Ayoub, ingeniero de software que trabaja en sistemas de seguridad y control de acceso para una empresa B2B. Parte de ese trabajo implica pasar mucho tiempo dentro de VM con acceso a Internet restringido — máquinas deliberadamente aisladas del mundo exterior, porque ese es precisamente el propósito de los sistemas que se ejecutan en ellas.",
      "El problema es que la mayoría de las herramientas de desarrollo asumen que nunca estás a más de una pestaña de Internet. ¿Necesitas formatear JSON, probar una regex, decodificar un JWT? En una máquina normal, es cuestión de una búsqueda. En una VM bloqueada, no lo es — y los sitios de herramientas \"sin conexión\" que afirman funcionar de todos modos a menudo siguen cargando analíticas o CDN de fuentes que fallan ruidosamente, o se conectan en silencio, en cuanto se bloquean.",
      "Seguí resolviendo esto de la misma manera: instalar una aplicación de escritorio real, una vez, y no volver a pensar en la red. AirToolkit es esa aplicación, construida correctamente en lugar de improvisada cada vez — 39 herramientas que cubren el trabajo utilitario diario, funcionando completamente en local, con la garantía de cero llamadas de red tratada como una restricción de ingeniería real en lugar de un eslogan.",
      "Es también el mismo instinto detrás de NeuroKey, un gestor de contraseñas sin conexión que construí anteriormente — sin nube, sin servidor intermedio, tus datos nunca salen de tu dispositivo. AirToolkit aplica ese mismo principio a las herramientas que los desarrolladores usan cada día.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "más información",
    aboutDeveloper: "sobre el desarrollador →",
    sourceGithub: "código fuente en github →",
  },
};

export default dict;
