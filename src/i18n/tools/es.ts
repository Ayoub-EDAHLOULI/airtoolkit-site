import type { ToolsDict } from "../types";

const tools: ToolsDict = {
  // Formatters & Text
  jsonFormatter: {
    label: "Formateador JSON",
    description: "Formatea o minifica JSON y ve al instante si no es válido.",
    features: [
      "Sangría de 2 o 4 espacios, o minificado en una sola línea",
      "Errores de análisis señalados: el JSON roto se detecta de inmediato",
      "Entrada y salida lado a lado, con copia en un clic",
    ],
    whyOffline:
      "Las respuestas de API y los archivos de configuración suelen contener tokens o datos de clientes que no deberían ir a un formateador en línea.",
  },
  xmlCsvFormatter: {
    label: "Formateador XML / CSV",
    description: "Formatea XML y convierte CSV en una tabla legible.",
    features: [
      "XML: formatear o minificar",
      "CSV: elige el delimitador y ve las filas como tabla",
      "Copia el resultado",
    ],
    whyOffline:
      "Las exportaciones de datos y las configuraciones XML antiguas se revisan en la misma máquina que las generó.",
  },
  sqlFormatter: {
    label: "Formateador SQL",
    description: "Convierte una consulta minificada en SQL legible e indentado.",
    features: [
      "Dialectos: PostgreSQL, MySQL, SQLite, SQL Server (T-SQL) y SQL estándar",
      "Palabras clave: tal como están, MAYÚSCULAS o minúsculas",
      "Resultado en vivo, con copia",
    ],
    whyOffline:
      "Las consultas de producción revelan nombres de tablas y datos. Aquí se quedan en tu máquina.",
  },
  markdownPreviewer: {
    label: "Vista previa de Markdown",
    description: "Vista previa en vivo de Markdown mientras escribes, renderizada de forma segura.",
    features: [
      "Markdown al estilo GitHub: tablas, listas de tareas, bloques de código",
      "El HTML renderizado se sanea antes de mostrarse",
      "Copia el HTML generado",
    ],
    whyOffline:
      "Previsualiza README y documentación sin extensiones de navegador ni editores en línea.",
  },
  jsonYamlToml: {
    label: "JSON ↔ YAML / TOML",
    description: "Convierte entre JSON, YAML y TOML, en cualquier dirección.",
    features: [
      "Formato de origen y de destino elegidos por separado",
      "Útil para manifiestos de Kubernetes, archivos de CI y configs de Cargo / pyproject",
      "Copia el resultado convertido",
    ],
    whyOffline:
      "Las configuraciones de infraestructura suelen incluir nombres de host internos y secretos.",
  },
  regexTester: {
    label: "Probador de regex",
    description: "Prueba expresiones regulares con resaltado de coincidencias en vivo.",
    features: [
      "Flags: g, i, m, s (dotAll) y u (unicode)",
      "Coincidencias resaltadas en el texto, con su posición y grupos de captura",
      "Chuleta integrada con 16 elementos comunes",
    ],
    whyOffline: "Una herramienta que todos necesitan y que normalmente solo existe como sitio web.",
  },
  diffTool: {
    label: "Herramienta de diff",
    description: "Ve las diferencias línea por línea entre dos textos.",
    features: [
      "Texto original y modificado lado a lado",
      "Líneas añadidas y eliminadas resaltadas",
    ],
    whyOffline:
      "Compara versiones de configuración en un servidor sin copiarlas a ningún otro sitio.",
  },
  caseConverter: {
    label: "Convertidor de mayúsculas/minúsculas",
    description: "Convierte texto a 9 estilos de nombres a la vez.",
    features: [
      "MAYÚSCULAS, minúsculas, Tipo Título, Tipo oración",
      "camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE",
      "Todos los estilos juntos, cada uno con su botón de copia",
    ],
    whyOffline: "Renombra rápidamente variables, columnas y claves de entorno.",
  },
  textUtilities: {
    label: "Utilidades de texto",
    description: "Cuenta y limpia texto.",
    features: [
      "Conteo en vivo: caracteres (con y sin espacios), palabras, líneas",
      "Ordena líneas A→Z o Z→A y elimina duplicados",
      "Compacta espacios y convierte finales de línea a LF o CRLF",
    ],
    whyOffline:
      "Limpia listas y logs en el sitio, incluidos los finales de línea entre archivos de Windows y Linux.",
  },
  encodeDecode: {
    label: "Codificar / Decodificar",
    description: "Codifica y decodifica Base64, codificación URL y entidades HTML.",
    features: [
      "Tres esquemas: Base64, codificación URL, entidades HTML",
      "Codificar o decodificar, con un botón para invertir la dirección",
      "Copia el resultado",
    ],
    whyOffline: "Decodificar un blob Base64 de un log es una tarea habitual y delicada.",
  },
  logParserGrep: {
    label: "Analizador de logs / Grep",
    description: "Filtra logs con una regex, como grep.",
    features: [
      "Filtro regex, con opción sin distinguir mayúsculas",
      "Coincidencia invertida, como grep -v",
      "Líneas encontradas, más las 5 más repetidas",
      "Copia todas las coincidencias",
    ],
    whyOffline:
      "Los logs son justo el tipo de datos que no debe salir de una máquina bloqueada.",
  },
  stringEscapeUnescape: {
    label: "Escapado de cadenas",
    description: "Escapa y desescapa cadenas para JSON, shell, SQL y regex.",
    features: [
      "Cuatro destinos: JSON, shell, SQL, regex",
      "Escapar o desescapar, con botón para invertir",
      "Copia el resultado",
    ],
    whyOffline: "Inserta valores en scripts y consultas de forma segura, sin adivinar.",
  },
  jsonDiff: {
    label: "Diff de JSON",
    description: "Compara dos documentos JSON por estructura, no por líneas.",
    features: [
      "Compara claves y valores: las claves reordenadas no cuentan como diferencia",
      "Lista los valores cambiados, añadidos y eliminados con su ruta",
      "Mensaje claro cuando los documentos son idénticos",
    ],
    whyOffline: "Compara respuestas de API o configuraciones de dos entornos.",
  },
  jsonSchemaValidator: {
    label: "Validador de JSON Schema",
    description: "Valida un documento JSON contra un JSON Schema.",
    features: [
      "Esquema y datos lado a lado",
      "Muestra todos los errores, no solo el primero",
      "Resultado claro: válido o no válido",
    ],
    whyOffline: "Comprueba payloads y configuraciones contra un contrato mientras desarrollas.",
  },
  scratchpad: {
    label: "Bloc de notas",
    description: "Un pequeño bloc con varias notas, guardado en tu equipo.",
    features: [
      "Crea, renombra y elimina notas",
      "Guardado automático, en local",
      "Nada se sincroniza ni se sube",
    ],
    whyOffline: "Ten a mano fragmentos y comandos en una máquina sin notas en la nube.",
  },

  // Generators
  hashUuidGenerator: {
    label: "Generador de hash / UUID",
    description: "Calcula hashes de texto y genera UUID.",
    features: [
      "MD5, SHA-1, SHA-256 y SHA-512 de la entrada, todos a la vez",
      "UUID aleatorios versión 4, en lote",
      "Copia un valor o todos",
    ],
    whyOffline:
      "Se necesitan sumas de verificación e identificadores constantemente, y la entrada puede ser sensible.",
  },
  fakeDataGenerator: {
    label: "Generador de datos falsos",
    description: "Genera registros de prueba realistas.",
    features: [
      "Campos: nombre, email, UUID, dirección, teléfono, empresa",
      "Elige cuántos registros generar",
      "Salida en JSON o CSV",
    ],
    whyOffline: "Llena bases de datos de prueba sin tocar datos reales de clientes.",
  },
  qrCodeGenerator: {
    label: "Generador de código QR",
    description: "Convierte un texto o una URL en un código QR.",
    features: [
      "Vista previa en vivo mientras escribes",
      "Guarda en PNG con el diálogo de Windows",
      "Copia la imagen como data URL",
    ],
    whyOffline: "Pasa una URL o una cadena Wi-Fi a un móvil sin generadores en línea.",
  },
  faviconGenerator: {
    label: "Generador de favicon",
    description: "Crea un juego completo de favicons a partir de una imagen.",
    features: [
      "8 tamaños PNG: 16, 32, 48, 64, 128, 180, 192 y 512 px",
      "Un favicon.ico multirresolución (16, 32 y 48 px)",
      "Guarda todos los PNG en una carpeta, o el .ico",
    ],
    whyOffline: "Los proyectos web en máquinas de compilación sin conexión también necesitan iconos.",
  },

  // Security
  jwtDecoder: {
    label: "Decodificador de JWT",
    description: "Decodifica la cabecera y el payload de un JSON Web Token.",
    features: [
      "Cabecera y payload como JSON formateado",
      "Claims exp, iat y nbf como fechas legibles",
      "Firma mostrada tal cual, indicando claramente que no se verifica",
    ],
    whyOffline:
      "Pegar un token real en un sitio web es un incidente de seguridad a punto de ocurrir.",
  },
  x509CertificateDecoder: {
    label: "Decodificador de certificados X.509",
    description: "Lee un certificado PEM y ve lo que contiene.",
    features: [
      "Sujeto, emisor y número de serie",
      "Fechas de validez, con los certificados caducados señalados",
      "Algoritmo de firma, indicador de CA y usos de clave",
      "Huellas SHA-1 y SHA-256",
    ],
    whyOffline: "Inspecciona certificados internos o de clientes sin subirlos.",
  },
  passwordStrengthChecker: {
    label: "Verificador de fortaleza de contraseñas",
    description: "Estima la fortaleza de una contraseña y obtén una mejor.",
    features: [
      "Entropía en bits y tiempo estimado de descifrado (ataque offline a ~10 mil millones de intentos/s)",
      "Detecta secuencias de teclado, caracteres repetidos y contraseñas comunes",
      "Genera una contraseña aleatoria robusta",
    ],
    whyOffline: "Comprobar una contraseña en un sitio web va contra su propio propósito.",
  },
  certificateCsrGenerator: {
    label: "Generador de certificado / CSR",
    description:
      "Crea un certificado autofirmado o una CSR, con las claves generadas en tu dispositivo.",
    features: [
      "Claves: RSA 2048, RSA 4096 o ECDSA P-256",
      "Campos del sujeto (CN, O, OU, L, ST, C), nombres alternativos (SAN) y validez",
      "Certificado o CSR, clave privada (PKCS#8) y clave pública, en PEM",
    ],
    whyOffline:
      "La clave privada se crea en tu dispositivo y nunca sale de él, a diferencia de los generadores de CSR en línea.",
  },

  // Network & Config
  apiRequestTester: {
    label: "Probador de solicitudes API",
    description:
      "Envía una solicitud HTTP que tú escribes y ve la respuesta. La única herramienta que usa la red.",
    features: [
      "Métodos: GET, POST, PUT, PATCH, DELETE, HEAD",
      "Editor de cabeceras y cuerpo de la solicitud",
      "Estado, tiempo y cuerpo de la respuesta, más una referencia de 42 códigos HTTP",
    ],
    whyOffline:
      "Solo envía cuando pulsas Enviar, a la dirección que escribiste. Pensado para probar servicios en una red interna.",
  },
  urlParserBuilder: {
    label: "Analizador / constructor de URL",
    description: "Divide una URL en partes, o construye una a partir de partes.",
    features: [
      "Pega una URL para rellenar protocolo, host, puerto, ruta y fragmento",
      "Edita los parámetros de consulta como lista clave/valor",
      "La URL reconstruida se actualiza en vivo, con copia",
    ],
    whyOffline: "Depura URL largas de redirección y callback con seguridad.",
  },
  subnetCidrCalculator: {
    label: "Calculadora de subred / CIDR",
    description: "Calcula los detalles de una subred IPv4 a partir de una dirección y un prefijo.",
    features: [
      "Dirección de red y de broadcast",
      "Máscara de subred y máscara wildcard",
      "Rango de hosts utilizables, número de hosts y total de direcciones",
    ],
    whyOffline: "La planificación de red se hace en esas mismas redes aisladas.",
  },
  cronExplainer: {
    label: "Explicador de cron",
    description: "Explica una expresión cron en lenguaje claro y lista sus próximas ejecuciones.",
    features: [
      "Descripción legible de la programación",
      "Las próximas 5 ejecuciones",
      "Expresiones de ejemplo para empezar",
    ],
    whyOffline: "Revisa las tareas programadas de los servidores antes de desplegarlas.",
  },
  dotenvDiffValidator: {
    label: "Diff y validador de dotenv",
    description: "Compara dos archivos .env y señala los problemas.",
    features: [
      "Claves que solo existen en uno de los archivos",
      "Claves con valores distintos",
      "Claves duplicadas dentro de cualquiera de los archivos",
    ],
    whyOffline:
      "Los archivos .env están llenos de secretos. Compararlos en línea nunca es aceptable.",
  },
  networkPortReference: {
    label: "Referencia de puertos de red",
    description: "Una lista consultable de puertos de red comunes.",
    features: [
      "64 puertos conocidos, con nombre del servicio y descripción",
      "Búsqueda por número de puerto, servicio o descripción",
    ],
    whyOffline: "El tipo de consulta que normalmente buscarías en la web.",
  },
  curlRequestBuilder: {
    label: "cURL ↔ Constructor de solicitudes",
    description: "Convierte un comando cURL en campos editables, y viceversa.",
    features: [
      "Pega un comando cURL (por ejemplo, copiado de las devtools) para rellenar método, URL, cabeceras y cuerpo",
      "Edita los campos y obtén el comando cURL regenerado",
    ],
    whyOffline: "Los comandos cURL copiados suelen incluir cookies y cabeceras de autenticación.",
  },
  systemInfo: {
    label: "Información del sistema",
    description: "Detalles de la máquina y de la app, leídos localmente.",
    features: [
      "Sistema, versión, arquitectura, nombre de host y configuración regional",
      "Resolución de pantalla, tamaño de ventana y user agent",
      "Versiones de AirToolkit y Tauri, con copia de todo",
    ],
    whyOffline: "Datos del entorno al instante para informes de errores desde VM bloqueadas.",
  },

  // Converters & Media
  timestampConverter: {
    label: "Convertidor de timestamp",
    description: "Convierte entre timestamps Unix y fechas.",
    features: [
      "Unix (segundos o milisegundos) a ISO 8601, hora local y UTC",
      "Fechas a Unix, desde ISO 8601 o formatos como \"Jan 17 2024\"",
      "Botón Ahora para la hora actual",
    ],
    whyOffline: "Leer timestamps en logs y tokens es una tarea diaria.",
  },
  numberBaseConverter: {
    label: "Convertidor de base numérica",
    description: "Convierte números entre binario, octal, decimal y hexadecimal.",
    features: [
      "Las cuatro bases se actualizan juntas al escribir en cualquiera",
      "Prefijos mostrados: 0b, 0o, 0x",
      "Copia cualquier base",
    ],
    whyOffline: "Para máscaras de bits, permisos y direcciones de memoria.",
  },
  colorTools: {
    label: "Herramientas de color",
    description: "Convierte colores entre HEX, RGB, HSL y CMYK.",
    features: [
      "Edita un formato y los demás se actualizan",
      "Selector de color y muestra",
      "Errores claros para valores no válidos",
    ],
    whyOffline: "Trabajo de diseño en máquinas sin software de diseño.",
  },
  colorPaletteExtractor: {
    label: "Extractor de paleta de colores",
    description: "Encuentra los 6 colores dominantes de una imagen.",
    features: [
      "Cada color con su proporción en la imagen",
      "Copia cada color en HEX",
      "Clustering k-means sobre una muestra de píxeles",
    ],
    whyOffline: "Las imágenes se procesan en tu dispositivo, nunca se suben.",
  },
  qrCodeReader: {
    label: "Lector de código QR",
    description: "Lee el texto de la imagen de un código QR.",
    features: [
      "Abre una imagen que contenga un código QR",
      "Texto decodificado, con copia",
    ],
    whyOffline: "Comprueba a dónde lleva un código QR antes de abrirlo.",
  },
  hexBinaryFileInspector: {
    label: "Inspector de archivos hex / binarios",
    description: "Ve los bytes de un archivo e identifica su tipo real.",
    features: [
      "Volcado hexadecimal con columna ASCII (primeros 16 KB)",
      "Detecta 23 tipos de archivo por sus bytes mágicos: PNG, PDF, ZIP, EXE/DLL, ELF, SQLite y más",
      "Reconoce archivos de texto plano",
    ],
    whyOffline:
      "Revisa archivos sospechosos o sin etiqueta sin subirlos a un escáner en línea.",
  },
  base64FileEncoder: {
    label: "Codificador de archivos Base64",
    description: "Convierte archivos a Base64 y viceversa.",
    features: [
      "Codifica cualquier archivo a Base64, o a data URI con su tipo MIME",
      "Decodifica Base64 o una data URI y guarda el archivo",
      "Copia el texto codificado",
    ],
    whyOffline:
      "Mueve archivos pequeños por canales solo de texto en sistemas restringidos.",
  },
};

export default tools;
