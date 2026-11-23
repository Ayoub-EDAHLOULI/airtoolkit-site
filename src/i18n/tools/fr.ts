import type { ToolsDict } from "../types";

const tools: ToolsDict = {
  // Formatters & Text
  jsonFormatter: {
    label: "Formateur JSON",
    description: "Mettez en forme ou minifiez du JSON, et voyez tout de suite s'il est invalide.",
    features: [
      "Indentation de 2 ou 4 espaces, ou minification sur une seule ligne",
      "Erreurs d'analyse signalées : le JSON cassé est repéré immédiatement",
      "Entrée et sortie côte à côte, copie en un clic",
    ],
    whyOffline:
      "Les réponses d'API et les fichiers de configuration contiennent souvent des jetons ou des données clients qui n'ont rien à faire dans un formateur en ligne.",
  },
  xmlCsvFormatter: {
    label: "Formateur XML / CSV",
    description: "Mettez en forme du XML et affichez un CSV sous forme de tableau lisible.",
    features: [
      "XML : mise en forme ou minification",
      "CSV : choix du séparateur et affichage des lignes en tableau",
      "Copie du résultat",
    ],
    whyOffline:
      "Les exports de données et les anciennes configurations XML se vérifient sur la machine qui les a produits.",
  },
  sqlFormatter: {
    label: "Formateur SQL",
    description: "Transformez une requête minifiée en SQL lisible et indenté.",
    features: [
      "Dialectes : PostgreSQL, MySQL, SQLite, SQL Server (T-SQL) et SQL standard",
      "Casse des mots-clés : inchangée, MAJUSCULES ou minuscules",
      "Résultat en direct, avec copie",
    ],
    whyOffline:
      "Les requêtes de production révèlent des noms de tables et des données. Ici, elles restent sur votre machine.",
  },
  markdownPreviewer: {
    label: "Aperçu Markdown",
    description: "Aperçu en direct du Markdown pendant la saisie, avec un rendu sécurisé.",
    features: [
      "Markdown façon GitHub : tableaux, listes de tâches, blocs de code",
      "Le HTML rendu est assaini avant affichage",
      "Copie du HTML généré",
    ],
    whyOffline:
      "Prévisualisez README et documentation sans extension de navigateur ni éditeur en ligne.",
  },
  jsonYamlToml: {
    label: "JSON ↔ YAML / TOML",
    description: "Convertissez entre JSON, YAML et TOML, dans tous les sens.",
    features: [
      "Formats source et cible choisis indépendamment",
      "Pratique pour les manifestes Kubernetes, les fichiers CI et les configs Cargo / pyproject",
      "Copie du résultat converti",
    ],
    whyOffline:
      "Les configurations d'infrastructure contiennent souvent des noms d'hôtes internes et des secrets.",
  },
  regexTester: {
    label: "Testeur de regex",
    description: "Testez des expressions régulières avec surlignage des correspondances en direct.",
    features: [
      "Drapeaux : g, i, m, s (dotAll) et u (unicode)",
      "Correspondances surlignées dans le texte, avec position et groupes de capture",
      "Aide-mémoire intégré de 16 éléments courants",
    ],
    whyOffline:
      "Un outil dont tout le monde a besoin, qui n'existe généralement que sous forme de site web.",
  },
  diffTool: {
    label: "Outil de diff",
    description: "Voyez les différences ligne par ligne entre deux textes.",
    features: [
      "Texte d'origine et texte modifié côte à côte",
      "Lignes ajoutées et supprimées surlignées",
    ],
    whyOffline:
      "Comparez des versions de configuration sur un serveur sans les copier ailleurs.",
  },
  caseConverter: {
    label: "Convertisseur de casse",
    description: "Convertissez un texte dans 9 conventions de nommage à la fois.",
    features: [
      "MAJUSCULES, minuscules, Titre, Phrase",
      "camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE",
      "Tous les styles affichés ensemble, chacun avec son bouton de copie",
    ],
    whyOffline: "Renommez rapidement variables, colonnes et clés d'environnement.",
  },
  textUtilities: {
    label: "Utilitaires texte",
    description: "Comptez et nettoyez du texte.",
    features: [
      "Comptage en direct : caractères (avec et sans espaces), mots, lignes",
      "Tri des lignes A→Z ou Z→A, suppression des doublons",
      "Réduction des espaces, conversion des fins de ligne en LF ou CRLF",
    ],
    whyOffline:
      "Nettoyez listes et logs sur place, y compris les fins de ligne entre fichiers Windows et Linux.",
  },
  encodeDecode: {
    label: "Encoder / Décoder",
    description: "Encodez et décodez du Base64, de l'encodage URL et des entités HTML.",
    features: [
      "Trois schémas : Base64, encodage URL, entités HTML",
      "Encodage ou décodage, avec un bouton pour inverser le sens",
      "Copie du résultat",
    ],
    whyOffline: "Décoder un blob Base64 trouvé dans un log est une tâche courante et sensible.",
  },
  logParserGrep: {
    label: "Analyseur de logs / Grep",
    description: "Filtrez des logs avec une regex, comme grep.",
    features: [
      "Filtre regex, avec option insensible à la casse",
      "Inversion de la correspondance, comme grep -v",
      "Lignes trouvées, plus les 5 les plus répétées",
      "Copie de toutes les correspondances",
    ],
    whyOffline:
      "Les logs sont exactement le type de données qui ne doit pas quitter une machine verrouillée.",
  },
  stringEscapeUnescape: {
    label: "Échappement de chaînes",
    description: "Échappez et déséchappez des chaînes pour JSON, shell, SQL et regex.",
    features: [
      "Quatre cibles : JSON, shell, SQL, regex",
      "Échappement ou déséchappement, avec bouton d'inversion",
      "Copie du résultat",
    ],
    whyOffline: "Insérez des valeurs dans des scripts et des requêtes en toute sécurité.",
  },
  jsonDiff: {
    label: "Diff JSON",
    description: "Comparez deux documents JSON par structure, pas ligne par ligne.",
    features: [
      "Compare clés et valeurs : des clés réordonnées ne comptent pas comme une différence",
      "Liste les valeurs modifiées, ajoutées et supprimées avec leur chemin",
      "Message clair quand les documents sont identiques",
    ],
    whyOffline: "Comparez des réponses d'API ou des configurations entre deux environnements.",
  },
  jsonSchemaValidator: {
    label: "Validateur de schéma JSON",
    description: "Validez un document JSON par rapport à un JSON Schema.",
    features: [
      "Schéma et données côte à côte",
      "Toutes les erreurs signalées, pas seulement la première",
      "Résultat clair : valide ou invalide",
    ],
    whyOffline: "Vérifiez payloads et configurations par rapport à un contrat pendant le développement.",
  },
  scratchpad: {
    label: "Bloc-notes",
    description: "Un petit bloc-notes à plusieurs notes, enregistré sur votre machine.",
    features: [
      "Création, renommage et suppression de notes",
      "Enregistrement automatique, en local",
      "Rien n'est synchronisé ni envoyé",
    ],
    whyOffline:
      "Gardez extraits et commandes sous la main sur une machine sans notes dans le cloud.",
  },

  // Generators
  hashUuidGenerator: {
    label: "Générateur de hash / UUID",
    description: "Calculez des hash de texte et générez des UUID.",
    features: [
      "MD5, SHA-1, SHA-256 et SHA-512 de l'entrée, en une fois",
      "UUID aléatoires version 4, en lot",
      "Copie d'une valeur ou de toutes",
    ],
    whyOffline:
      "On a sans cesse besoin de sommes de contrôle et d'identifiants, et l'entrée peut être sensible.",
  },
  fakeDataGenerator: {
    label: "Générateur de fausses données",
    description: "Générez des enregistrements de test réalistes.",
    features: [
      "Champs : nom, e-mail, UUID, adresse, téléphone, entreprise",
      "Nombre d'enregistrements au choix",
      "Sortie en JSON ou CSV",
    ],
    whyOffline: "Alimentez vos bases de test sans toucher aux vraies données clients.",
  },
  qrCodeGenerator: {
    label: "Générateur de QR code",
    description: "Transformez un texte ou une URL en QR code.",
    features: [
      "Aperçu en direct pendant la saisie",
      "Enregistrement en PNG via la boîte de dialogue Windows",
      "Copie de l'image en data URL",
    ],
    whyOffline:
      "Transmettez une URL ou un code Wi-Fi à un téléphone sans générateur en ligne.",
  },
  faviconGenerator: {
    label: "Générateur de favicon",
    description: "Créez un jeu complet de favicons à partir d'une seule image.",
    features: [
      "8 tailles PNG : 16, 32, 48, 64, 128, 180, 192 et 512 px",
      "Un favicon.ico multi-résolution (16, 32 et 48 px)",
      "Enregistrement de tous les PNG dans un dossier, ou du .ico",
    ],
    whyOffline: "Les projets web sur des machines de build hors ligne ont aussi besoin d'icônes.",
  },

  // Security
  jwtDecoder: {
    label: "Décodeur JWT",
    description: "Décodez l'en-tête et le payload d'un JSON Web Token.",
    features: [
      "En-tête et payload affichés en JSON formaté",
      "Claims exp, iat et nbf affichés sous forme de dates lisibles",
      "Signature affichée telle quelle, avec la mention claire qu'elle n'est pas vérifiée",
    ],
    whyOffline:
      "Coller un vrai jeton dans un site web, c'est un incident de sécurité qui n'attend que de se produire.",
  },
  x509CertificateDecoder: {
    label: "Décodeur de certificat X.509",
    description: "Lisez un certificat PEM et voyez ce qu'il contient.",
    features: [
      "Sujet, émetteur et numéro de série",
      "Dates de validité, certificats expirés signalés",
      "Algorithme de signature, indicateur CA et usages de clé",
      "Empreintes SHA-1 et SHA-256",
    ],
    whyOffline: "Inspectez des certificats internes ou clients sans les envoyer nulle part.",
  },
  passwordStrengthChecker: {
    label: "Vérificateur de force de mot de passe",
    description: "Estimez la robustesse d'un mot de passe, et obtenez-en un meilleur.",
    features: [
      "Entropie en bits et temps de cassage estimé (attaque hors ligne à ~10 milliards d'essais/s)",
      "Détecte les suites de clavier, les répétitions et les mots de passe courants",
      "Génère un mot de passe aléatoire robuste",
    ],
    whyOffline: "Tester un mot de passe sur un site web va à l'encontre du but recherché.",
  },
  certificateCsrGenerator: {
    label: "Générateur de certificat / CSR",
    description:
      "Créez un certificat auto-signé ou une CSR, avec des clés générées sur votre appareil.",
    features: [
      "Clés : RSA 2048, RSA 4096 ou ECDSA P-256",
      "Champs du sujet (CN, O, OU, L, ST, C), noms alternatifs (SAN) et durée de validité",
      "Certificat ou CSR, clé privée (PKCS#8) et clé publique, au format PEM",
    ],
    whyOffline:
      "La clé privée est créée sur votre appareil et ne le quitte jamais, contrairement aux générateurs de CSR en ligne.",
  },

  // Network & Config
  apiRequestTester: {
    label: "Testeur de requêtes API",
    description:
      "Envoyez une requête HTTP que vous écrivez et voyez la réponse. Le seul outil qui utilise le réseau.",
    features: [
      "Méthodes : GET, POST, PUT, PATCH, DELETE, HEAD",
      "Éditeur d'en-têtes et corps de requête",
      "Statut, temps de réponse et corps, plus une référence de 42 codes HTTP",
    ],
    whyOffline:
      "Il n'envoie rien tant que vous n'appuyez pas sur Envoyer, et seulement à l'adresse saisie. Conçu pour tester des services sur un réseau interne.",
  },
  urlParserBuilder: {
    label: "Analyseur / constructeur d'URL",
    description: "Découpez une URL en éléments, ou construisez-en une à partir d'éléments.",
    features: [
      "Collez une URL pour remplir protocole, hôte, port, chemin et fragment",
      "Paramètres de requête modifiables sous forme de liste clé/valeur",
      "L'URL reconstruite se met à jour en direct, avec copie",
    ],
    whyOffline: "Déboguez de longues URL de redirection ou de callback en toute sécurité.",
  },
  subnetCidrCalculator: {
    label: "Calculateur de sous-réseau / CIDR",
    description: "Calculez les détails d'un sous-réseau IPv4 à partir d'une adresse et d'un préfixe.",
    features: [
      "Adresse réseau et adresse de broadcast",
      "Masque de sous-réseau et masque générique (wildcard)",
      "Plage d'hôtes utilisables, nombre d'hôtes et total d'adresses",
    ],
    whyOffline: "La planification réseau se fait sur ces mêmes réseaux isolés.",
  },
  cronExplainer: {
    label: "Explicateur de cron",
    description: "Expliquez une expression cron en langage clair et listez ses prochaines exécutions.",
    features: [
      "Description lisible de la planification",
      "Les 5 prochaines exécutions",
      "Exemples d'expressions pour démarrer",
    ],
    whyOffline: "Vérifiez les tâches planifiées des serveurs avant de les déployer.",
  },
  dotenvDiffValidator: {
    label: "Diff et validateur dotenv",
    description: "Comparez deux fichiers .env et repérez les problèmes.",
    features: [
      "Clés présentes dans un seul des deux fichiers",
      "Clés dont les valeurs diffèrent",
      "Clés en double dans l'un ou l'autre fichier",
    ],
    whyOffline:
      "Les fichiers .env sont remplis de secrets. Les comparer en ligne n'est jamais acceptable.",
  },
  networkPortReference: {
    label: "Référence des ports réseau",
    description: "Une liste consultable des ports réseau courants.",
    features: [
      "64 ports bien connus, avec nom du service et description",
      "Recherche par numéro de port, service ou description",
    ],
    whyOffline: "Le genre de recherche qu'on fait d'habitude sur le web.",
  },
  curlRequestBuilder: {
    label: "cURL ↔ Constructeur de requêtes",
    description: "Transformez une commande cURL en champs modifiables, et inversement.",
    features: [
      "Collez une commande cURL (copiée depuis les devtools, par exemple) pour remplir méthode, URL, en-têtes et corps",
      "Modifiez les champs et obtenez la commande cURL régénérée",
    ],
    whyOffline: "Les commandes cURL copiées contiennent généralement des cookies et des en-têtes d'authentification.",
  },
  systemInfo: {
    label: "Informations système",
    description: "Les détails de la machine et de l'application, lus localement.",
    features: [
      "Système, version, architecture, nom d'hôte et paramètres régionaux",
      "Résolution d'écran, taille de fenêtre et user agent",
      "Versions d'AirToolkit et de Tauri, avec copie de l'ensemble",
    ],
    whyOffline: "Des infos d'environnement rapides pour les rapports de bug depuis des VM verrouillées.",
  },

  // Converters & Media
  timestampConverter: {
    label: "Convertisseur de timestamp",
    description: "Convertissez entre timestamps Unix et dates.",
    features: [
      "Unix (secondes ou millisecondes) vers ISO 8601, heure locale et UTC",
      "Dates vers Unix, depuis ISO 8601 ou des formats comme « Jan 17 2024 »",
      "Bouton Maintenant pour l'heure actuelle",
    ],
    whyOffline: "Lire les timestamps des logs et des jetons est une tâche quotidienne.",
  },
  numberBaseConverter: {
    label: "Convertisseur de base numérique",
    description: "Convertissez des nombres entre binaire, octal, décimal et hexadécimal.",
    features: [
      "Les quatre bases se mettent à jour ensemble, quelle que soit celle que vous modifiez",
      "Préfixes affichés : 0b, 0o, 0x",
      "Copie de n'importe quelle base",
    ],
    whyOffline: "Pour les masques de bits, les permissions et les adresses mémoire.",
  },
  colorTools: {
    label: "Outils de couleur",
    description: "Convertissez des couleurs entre HEX, RGB, HSL et CMJN.",
    features: [
      "Modifiez un format, les autres se mettent à jour",
      "Sélecteur de couleur et aperçu",
      "Erreurs claires pour les valeurs invalides",
    ],
    whyOffline: "Du travail de design sur des machines sans logiciel de design.",
  },
  colorPaletteExtractor: {
    label: "Extracteur de palette de couleurs",
    description: "Trouvez les 6 couleurs dominantes d'une image.",
    features: [
      "Chaque couleur avec sa part dans l'image",
      "Copie de chaque couleur en HEX",
      "Clustering k-means sur un échantillon de pixels",
    ],
    whyOffline: "Les images sont traitées sur votre appareil, jamais envoyées.",
  },
  qrCodeReader: {
    label: "Lecteur de QR code",
    description: "Lisez le texte contenu dans l'image d'un QR code.",
    features: [
      "Ouvrez une image contenant un QR code",
      "Texte décodé affiché, avec copie",
    ],
    whyOffline: "Vérifiez où mène un QR code avant de l'ouvrir.",
  },
  hexBinaryFileInspector: {
    label: "Inspecteur de fichier hex / binaire",
    description: "Voyez les octets d'un fichier et identifiez son vrai type.",
    features: [
      "Dump hexadécimal avec colonne ASCII (16 premiers Ko)",
      "Détecte 23 types de fichiers par leurs octets magiques : PNG, PDF, ZIP, EXE/DLL, ELF, SQLite et plus",
      "Reconnaît les fichiers texte",
    ],
    whyOffline:
      "Vérifiez des fichiers suspects ou sans extension sans les envoyer à un scanner en ligne.",
  },
  base64FileEncoder: {
    label: "Encodeur de fichier Base64",
    description: "Convertissez des fichiers en Base64, et inversement.",
    features: [
      "Encodez n'importe quel fichier en Base64, ou en data URI avec son type MIME",
      "Décodez du Base64 ou une data URI et enregistrez le fichier",
      "Copie du texte encodé",
    ],
    whyOffline:
      "Faites passer de petits fichiers par des canaux texte uniquement sur des systèmes restreints.",
  },
};

export default tools;
