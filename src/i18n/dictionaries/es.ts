import type { Dictionary } from "../types";
import tools from "../tools/es";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 38 herramientas dev, cero llamadas de red",
    siteDescription:
      "Una caja de herramientas para desarrolladores totalmente sin conexión, pensada para máquinas Windows aisladas o bloqueadas. Sin telemetría, sin actualizaciones automáticas, sin conexión a servidores, nunca.",
    toolsTitle: "Herramientas — AirToolkit",
    toolsDescription:
      "Explora las 38 herramientas incluidas en AirToolkit, desde el formateo de JSON hasta la generación de certificados, organizadas por categoría.",
    securityTitle: "Seguridad y verificación — AirToolkit",
    securityDescription:
      "Cómo se comprueba la afirmación de cero llamadas de red de AirToolkit: una auditoría estática del código y una prueba de firewall/VM a nivel de sistema operativo, ambas reproducibles por ti mismo.",
    faqTitle: "Preguntas frecuentes — AirToolkit",
    faqDescription:
      "Respuestas sobre la garantía sin conexión de AirToolkit, las plataformas compatibles y la disponibilidad de código abierto.",
    aboutTitle: "Acerca de — AirToolkit",
    aboutDescription:
      "Por qué existe AirToolkit: creado por un ingeniero de seguridad que necesitaba herramientas de desarrollo sin conexión para VM bloqueadas y no encontró ninguna que realmente lo fuera.",
    privacyTitle: "Política de privacidad — AirToolkit",
    privacyDescription:
      "AirToolkit no recopila información personal: sin cuentas, sin telemetría, sin analíticas. Qué se queda en tu dispositivo y los pocos casos en que se mueven datos.",
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
    privacy: "privacidad",
  },
  hero: {
    badge: "AirToolkit para Windows",
    title: "38 herramientas de desarrollo.",
    titleAccent: "Un entorno sin conexión.",
    body: "Formatea JSON, prueba expresiones regulares y decodifica JWT en tu equipo. AirToolkit solo se conecta a la red cuando envías una solicitud a una API.",
    downloadWindows: "Descargar el instalador",
    getFromStore: "Descargar AirToolkit desde Microsoft Store",
    viewGithub: "Notas de la versión",
    grabMsi: "Instalador MSI",
    previewLabel: "Vista previa de la aplicación",
    expandPreview: "Ver la captura a tamaño completo",
    terminalComment1: "# bloquear todo el tráfico saliente",
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
        body: "38 herramientas organizadas en cinco categorías, con búsqueda. Todo se ejecuta localmente en la misma ventana.",
      },
      {
        title: "Verifícalo tú mismo",
        body: "Bloquea la aplicación en el firewall y sigue trabajando — todas las herramientas excepto el probador de solicitudes API siguen funcionando con normalidad.",
      },
    ],
    browseTools: "→ explorar todas las herramientas",
  },
  home: {
    facts: [
      { value: "38", label: "herramientas en una app" },
      { value: "5", label: "categorías" },
      { value: "0", label: "llamadas de red por su cuenta" },
      { value: "≈ 8,7 MB", label: "app nativa, no Electron" },
      { value: "MIT", label: "gratis y de código abierto" },
    ],
    toolbox: {
      eyebrow: "La caja de herramientas",
      heading: "Todo aquello para lo que normalmente abrirías un sitio web.",
      body: "38 utilidades en cinco categorías, en una sola ventana, con búsqueda. Nada que configurar por herramienta y nada descargado en tiempo de ejecución.",
      more: "+{n} más",
      cta: "Ver las 38 herramientas",
    },
    spotlight: {
      eyebrow: "Sensible por naturaleza",
      heading: "Hecho para los datos que no puedes pegar en un sitio web.",
      body: "Tokens, claves privadas, archivos .env y logs de producción son justo lo que no deberías darle a una herramienta en línea. En AirToolkit se procesan en tu dispositivo y se quedan ahí.",
    },
    proof: {
      eyebrow: "Verificable",
      heading: "No te fíes solo de nuestra palabra.",
      body: "«Cero llamadas de red» es algo que puedes comprobar tú mismo, desde el código fuente hasta el sistema operativo.",
      methods: [
        {
          title: "Auditoría estática del código",
          body: "Busca todas las API de red en el código fuente. La única coincidencia debe ser el Probador de solicitudes API.",
        },
        {
          title: "Bloqueo a nivel del sistema",
          body: "Bloquea el tráfico saliente de la app en el Firewall de Windows y sigue trabajando. Solo se ve afectado el Probador de solicitudes API.",
        },
      ],
      exceptionComment: "la única excepción documentada",
      noMatches: "sin coincidencias",
      cta: "Ver la verificación completa",
    },
    install: {
      eyebrow: "Instalación",
      heading: "Tres formas de instalar. Elige la que encaje con tu equipo.",
      body: "Las tres instalan la misma aplicación. Ninguna necesita cuenta ni clave de licencia.",
      recommended: "Recomendado",
      options: [
        {
          title: "Microsoft Store",
          body: "La forma más fácil. Firmada por Microsoft e instalada en un clic.",
          cta: "Obtener AirToolkit en Microsoft Store",
        },
        {
          title: "Instalador (.exe)",
          body: "Para equipos sin acceso a la Store. Descárgalo una vez y cópialo al equipo sin conexión.",
          cta: "Descargar .exe",
        },
        {
          title: "Paquete MSI",
          body: "Para equipos de TI que despliegan con directivas de grupo o SCCM.",
          cta: "Descargar .msi",
        },
      ],
      requirements: "Windows 10 (versión 1809) o posterior, 64 bits. Gratis y de código abierto con licencia MIT.",
    },
    faqPreview: { heading: "Preguntas y respuestas", cta: "Leer todas las preguntas" },
    finalCta: {
      heading: "Instálalo una vez. Olvídate de la red para siempre.",
      body: "38 herramientas para desarrolladores que siguen funcionando cuando internet no. Gratis, de código abierto y en Microsoft Store.",
    },
  },
  toolsShowcase: {
    heading: "38 herramientas, una sola app",
    subheading:
      "Todo se ejecuta localmente, en la misma ventana, sin configuración por herramienta. Busca en la barra lateral de la app, o explora por categoría aquí.",
    categories: {
      "Formatters & Text": "Formateadores y texto",
      Generators: "Generadores",
      Security: "Seguridad",
      "Network & Config": "Red y configuración",
      "Converters & Media": "Conversores y medios",
    },
    categoryDescriptions: {
      "Formatters & Text":
        "Formatea, convierte, compara y limpia texto y datos estructurados.",
      "Generators":
        "Genera hashes, identificadores, datos de prueba, códigos QR y juegos de iconos.",
      "Security":
        "Inspecciona tokens y certificados, y crea claves, sin pegar secretos en un sitio web.",
      "Network & Config":
        "Trabaja con solicitudes HTTP, URL, subredes, programaciones y archivos de entorno.",
      "Converters & Media":
        "Convierte timestamps, números y colores, y mira dentro de imágenes y archivos binarios.",
    },
    jumpTo: "ir a",
    toolCount: "{n} herramientas",
    whyOfflineLabel: "por qué sin conexión",
    networkBadge: "usa la red · bajo demanda",
    tools,
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
          "Windows, construido con Tauri. Se creó específicamente para VM de Windows bloqueadas, que son el objetivo principal hoy en día. Instálalo desde Microsoft Store o descarga el instalador desde GitHub para equipos sin conexión.",
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
      "Seguí resolviendo esto de la misma manera: instalar una aplicación de escritorio real, una vez, y no volver a pensar en la red. AirToolkit es esa aplicación, construida correctamente en lugar de improvisada cada vez — 38 herramientas que cubren el trabajo utilitario diario, funcionando completamente en local, con la garantía de cero llamadas de red tratada como una restricción de ingeniería real en lugar de un eslogan.",
      "Es también el mismo instinto detrás de NeuroKey, un gestor de contraseñas sin conexión que construí anteriormente — sin nube, sin servidor intermedio, tus datos nunca salen de tu dispositivo. AirToolkit aplica ese mismo principio a las herramientas que los desarrolladores usan cada día.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "más información",
    aboutDeveloper: "sobre el desarrollador →",
    sourceGithub: "código fuente en github →",
  },
  privacy: {
    tag: "# privacidad",
    heading: "Política de privacidad",
    updated: "Última actualización: 19 de noviembre de 2026",
    intro: "AirToolkit no recopila, almacena ni transmite ninguna información personal. No hay cuentas, telemetría, analíticas, informes de errores ni actualizaciones automáticas. Esta página explica exactamente qué se queda en tu dispositivo y los pocos casos en que se mueven datos.",
    sections: [
      {
        title: "Qué guarda la aplicación",
        body: "AirToolkit guarda dos cosas en tu ordenador: tu elección de tema claro/oscuro y el texto que escribes en el Scratchpad. Ambos se guardan localmente y nunca salen de tu dispositivo. En la versión de Microsoft Store, desinstalar la aplicación los elimina.",
      },
      {
        title: "Tus archivos",
        body: "AirToolkit solo lee los archivos que tú abres y solo escribe archivos donde tú decides guardarlos. Su contenido se procesa en tu dispositivo y nunca se sube a ningún sitio.",
      },
      {
        title: "Acceso a la red",
        body: "AirToolkit no hace llamadas de red por su cuenta. La única excepción es el API Request Tester: al pulsar enviar, envía exactamente la petición que escribiste a la dirección que indicaste. Esa petición va directamente de tu ordenador a esa dirección; nunca se nos envía a nosotros ni a nadie más.",
      },
      {
        title: "Microsoft Store",
        body: "Si instalas AirToolkit desde Microsoft Store, Microsoft gestiona la descarga y la licencia según la Declaración de privacidad de Microsoft. Microsoft puede compartir con nosotros estadísticas agregadas y anónimas, como el número de instalaciones o de fallos. No permiten identificarte.",
      },
      {
        title: "Este sitio web",
        body: "Este sitio no tiene analíticas, rastreo ni publicidad, y sus fuentes se sirven desde el propio sitio. Solo guarda el idioma que elijas en una cookie y un indicador temporal que evita repetir la animación de inicio durante tu visita. Como cualquier servidor web, el nuestro puede guardar registros técnicos estándar (dirección IP, páginas solicitadas) por seguridad y para mantener el sitio en funcionamiento.",
      },
      {
        title: "Menores",
        body: "AirToolkit no recopila información personal de nadie, incluidos los menores de 13 años.",
      },
      {
        title: "Cambios",
        body: "Si esta política cambia, la nueva versión se publicará en esta página con una fecha actualizada.",
      },
    ],
    contactLead: "¿Preguntas sobre privacidad?",
    contactLink: "abrir un issue en github →",
  },
};

export default dict;
