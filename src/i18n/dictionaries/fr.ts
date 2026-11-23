import type { Dictionary } from "../types";
import tools from "../tools/fr";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 38 outils dev, zéro appel réseau",
    siteDescription:
      "Une boîte à outils pour développeurs entièrement hors ligne, conçue pour les machines Windows isolées ou verrouillées. Pas de télémétrie, pas de mise à jour automatique, jamais de connexion au serveur.",
    toolsTitle: "Outils — AirToolkit",
    toolsDescription:
      "Parcourez les 38 outils inclus dans AirToolkit, du formatage JSON à la génération de certificats, classés par catégorie.",
    securityTitle: "Sécurité et vérification — AirToolkit",
    securityDescription:
      "Comment la promesse « zéro appel réseau » d'AirToolkit est vérifiée : un audit statique du code et un test pare-feu/VM au niveau du système, tous deux reproductibles par vous-même.",
    faqTitle: "FAQ — AirToolkit",
    faqDescription:
      "Réponses sur la garantie hors ligne d'AirToolkit, les plateformes prises en charge et la disponibilité open source.",
    aboutTitle: "À propos — AirToolkit",
    aboutDescription:
      "Pourquoi AirToolkit existe : conçu par un ingénieur sécurité qui avait besoin d'outils dev hors ligne pour des VM verrouillées, et qui n'en a trouvé aucun qui le soit vraiment.",
    privacyTitle: "Politique de confidentialité — AirToolkit",
    privacyDescription:
      "AirToolkit ne collecte aucune information personnelle : pas de compte, pas de télémétrie, pas d'analytics. Ce qui reste sur votre appareil, et les rares cas où des données circulent.",
  },
  boot: {
    lines: [
      "$ initialisation d'airtoolkit...",
      "$ vérification des interfaces réseau... aucune requise",
      "$ chargement de 38 outils en local",
      "$ zéro appel réseau détecté ✓",
    ],
    ready: "prêt.",
  },
  nav: {
    tools: "outils",
    security: "sécurité",
    faq: "faq",
    about: "à propos",
    download: "télécharger",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  footer: {
    github: "github",
    privacy: "confidentialité",
  },
  hero: {
    badge: "aucune télémétrie · aucune mise à jour auto · aucun appel réseau",
    title: "38 outils dev. Zéro appel réseau.",
    body: "AirToolkit regroupe les utilitaires que vous utilisez au quotidien — formatage JSON, test de regex, hachage, décodage JWT, et bien plus — dans une seule application de bureau qui ne fait jamais d'appel réseau de son propre chef. Pas de télémétrie, pas de mise à jour automatique, jamais de connexion au serveur.",
    downloadWindows: "télécharger pour windows",
    getFromStore: "Obtenir sur le Microsoft Store",
    viewGithub: "notes de version",
    deployNote: "déploiement via Group Policy ou SCCM ?",
    grabMsi: "récupérez le .msi",
    msiSuffix: "à la place",
    terminalComment1: "# bloquer tout le trafic sortant",
    terminalComment2: "# l'application continue de fonctionner normalement",
  },
  whyOffline: {
    heading: "Pourquoi le hors ligne compte",
    subheading: "Ceci répond à un vrai besoin, pas à une liste de fonctionnalités.",
    points: [
      {
        num: "01",
        title: "Les VM verrouillées ne peuvent pas accéder à un outil web",
        body: "Les machines à accès Internet restreint sont courantes dans les entreprises axées sur la sécurité et le contrôle d'accès. Y ouvrir un formateur JSON ou un testeur de regex basé sur navigateur n'est tout simplement pas une option.",
      },
      {
        num: "02",
        title: "Les outils web « hors ligne » ne le sont généralement pas",
        body: "La plupart des sites qui se disent compatibles hors ligne chargent encore des analytics, des polices via CDN ou des vérifications de mise à jour — qui échouent bruyamment, ou se connectent silencieusement dès qu'ils sont bloqués.",
      },
      {
        num: "03",
        title: "Aucune dépendance réseau, point final",
        body: "AirToolkit ne fait aucun appel réseau de son propre chef : pas de télémétrie, pas de mise à jour automatique, jamais de connexion au serveur. La seule exception — le testeur de requêtes API — est optionnelle et documentée.",
      },
    ],
    seeVerification: "→ voir comment c'est vérifié",
  },
  howItWorks: {
    heading: "Comment ça marche",
    steps: [
      {
        title: "Téléchargez et installez",
        body: "Récupérez l'installeur Windows — aucun compte, aucune clé de licence, aucune connexion Internet requise pour l'exécuter.",
      },
      {
        title: "Choisissez un outil dans la barre latérale",
        body: "38 outils répartis en cinq catégories, avec recherche. Tout s'exécute localement dans la même fenêtre.",
      },
      {
        title: "Vérifiez-le vous-même",
        body: "Bloquez l'application au niveau du pare-feu et continuez à travailler — tous les outils sauf le testeur de requêtes API continuent de fonctionner normalement.",
      },
    ],
    browseTools: "→ parcourir tous les outils",
  },
  toolsShowcase: {
    heading: "38 outils, une seule application",
    subheading:
      "Tout s'exécute localement, dans la même fenêtre, sans configuration par outil. Utilisez la recherche dans la barre latérale de l'application, ou parcourez par catégorie ici.",
    categories: {
      "Formatters & Text": "Formatage et texte",
      Generators: "Générateurs",
      Security: "Sécurité",
      "Network & Config": "Réseau et configuration",
      "Converters & Media": "Convertisseurs et médias",
    },
    categoryDescriptions: {
      "Formatters & Text":
        "Mettez en forme, convertissez, comparez et nettoyez du texte et des données structurées.",
      "Generators":
        "Produisez des hash, des identifiants, des données de test, des QR codes et des jeux d'icônes.",
      "Security":
        "Inspectez jetons et certificats, et créez des clés, sans coller de secrets dans un site web.",
      "Network & Config":
        "Travaillez avec des requêtes HTTP, des URL, des sous-réseaux, des planifications et des fichiers d'environnement.",
      "Converters & Media":
        "Convertissez timestamps, nombres et couleurs, et regardez à l'intérieur des images et des fichiers binaires.",
    },
    jumpTo: "aller à",
    toolCount: "{n} outils",
    whyOfflineLabel: "pourquoi hors ligne",
    networkBadge: "utilise le réseau · à la demande",
    tools,
  },
  verification: {
    heading: "Vérifiable, pas seulement affirmé",
    subheading:
      "« Zéro appel réseau » est une affirmation vérifiable, pas un argument marketing. Voici exactement comment c'est vérifié — reproduisez-le vous-même si vous ne voulez pas nous croire sur parole.",
    checks: [
      {
        title: "Audit statique du code",
        body: "Grep sur l'intégralité du code source pour fetch/XMLHttpRequest/WebSocket et les primitives réseau côté Rust. Seul le testeur de requêtes API doit correspondre — exécuté à chaque changement.",
      },
      {
        title: "Blocage pare-feu au niveau du système",
        body: "Bloquer tout le trafic sortant du binaire packagé au niveau du pare-feu Windows et confirmer que tous les autres outils continuent de fonctionner pleinement.",
      },
      {
        title: "VM isolée du réseau",
        body: "Pour une garantie plus forte, exécutez la même build sans aucune carte réseau virtuelle plutôt que de dépendre d'une règle de pare-feu.",
      },
    ],
    terminalComment: "la seule exception documentée",
    terminalExceptionComment: "la seule exception documentée",
    terminalSuccess: "✓ tous les autres outils continuent de fonctionner normalement",
    statusLabel: "État actuel :",
    statusBody:
      "l'audit statique ci-dessus a été exécuté sur l'intégralité du code sans correspondance inattendue. L'exécution pare-feu/VM est une étape manuelle sur une build de release signée — pas encore effectuée. Considérez toute affirmation hors ligne comme non vérifiée tant que cette ligne n'est pas mise à jour.",
  },
  faq: {
    heading: "Questions fréquentes",
    questions: [
      {
        question: "AirToolkit ne fait-il vraiment aucun appel réseau ?",
        answer:
          "Oui, avec une exception documentée : le testeur de requêtes API, dont l'unique but est d'envoyer une requête que vous composez à la demande. Tous les autres outils ne touchent jamais au réseau. Consultez la page Sécurité pour savoir exactement comment c'est vérifié.",
      },
      {
        question: "Ai-je besoin d'une connexion Internet pour l'installer ou l'exécuter ?",
        answer:
          "Non. Une fois l'installeur en votre possession, l'installation et tous les outils fonctionnent entièrement hors ligne — aucun compte, aucun serveur de licence, aucune vérification de mise à jour.",
      },
      {
        question: "Quelles plateformes sont prises en charge ?",
        answer:
          "Windows, construit avec Tauri. Il a été conçu spécifiquement pour les VM Windows verrouillées, qui sont la cible principale aujourd'hui. Installez-le depuis le Microsoft Store, ou téléchargez l'installeur sur GitHub pour les machines hors ligne.",
      },
      {
        question: "Est-ce open source ?",
        answer:
          "Oui — le code source complet est sur GitHub. Vous êtes libre de le lire, de l'auditer ou de le compiler vous-même plutôt que de faire confiance à un binaire packagé.",
      },
      {
        question: "Pourquoi ne pas simplement utiliser des outils basés sur navigateur ?",
        answer:
          "La plupart des sites d'outils dev basés sur navigateur sont inaccessibles sur des machines à accès Internet restreint, et beaucoup de ceux qui prétendent fonctionner hors ligne chargent encore des analytics ou des polices via CDN qui échouent (ou se connectent silencieusement) dès qu'ils sont bloqués.",
      },
    ],
  },
  about: {
    tag: "# à propos",
    heading: "Créé par quelqu'un qui en avait besoin en premier",
    paragraphs: [
      "Je m'appelle Ayoub, ingénieur logiciel travaillant sur des systèmes de sécurité et de contrôle d'accès pour une entreprise B2B. Une partie de ce travail consiste à passer beaucoup de temps dans des VM à accès Internet restreint — des machines délibérément coupées du monde extérieur, car c'est tout l'intérêt des systèmes qui y tournent.",
      "Le problème, c'est que la plupart des outils de développement supposent que vous n'êtes jamais qu'à un onglet d'Internet. Besoin de formater du JSON, tester une regex, décoder un JWT ? Sur une machine normale, c'est à une recherche près. Sur une VM verrouillée, ce n'est pas le cas — et les sites d'outils « hors ligne » qui prétendent fonctionner quand même chargent souvent encore des analytics ou des polices via CDN qui échouent bruyamment, ou se connectent silencieusement, dès qu'ils sont bloqués.",
      "J'ai toujours résolu ce problème de la même manière : installer une vraie application de bureau, une fois, et ne plus jamais penser au réseau. AirToolkit est cette application, construite proprement plutôt qu'improvisée à chaque fois — 38 outils qui couvrent le travail utilitaire quotidien, fonctionnant entièrement en local, avec la garantie zéro appel réseau traitée comme une véritable contrainte d'ingénierie plutôt qu'un slogan.",
      "C'est aussi le même instinct derrière NeuroKey, un gestionnaire de mots de passe hors ligne que j'ai créé auparavant — pas de cloud, pas de serveur intermédiaire, vos données ne quittent jamais votre appareil. AirToolkit applique ce même principe aux outils que les développeurs utilisent chaque jour.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "en savoir plus",
    aboutDeveloper: "à propos du développeur →",
    sourceGithub: "code source sur github →",
  },
  privacy: {
    tag: "# confidentialité",
    heading: "Politique de confidentialité",
    updated: "Dernière mise à jour : 19 novembre 2026",
    intro: "AirToolkit ne collecte, ne stocke ni ne transmet aucune information personnelle. Pas de compte, pas de télémétrie, pas d'analytics, pas de rapport de plantage, pas de mise à jour automatique. Cette page explique exactement ce qui reste sur votre appareil, et les rares cas où des données circulent.",
    sections: [
      {
        title: "Ce que l'application enregistre",
        body: "AirToolkit conserve deux choses sur votre ordinateur : votre choix de thème clair/sombre et le texte saisi dans le Scratchpad. Les deux sont enregistrés localement par l'application et ne quittent jamais votre appareil. Avec la version Microsoft Store, la désinstallation les supprime.",
      },
      {
        title: "Vos fichiers",
        body: "AirToolkit lit uniquement les fichiers que vous ouvrez vous-même et n'écrit des fichiers qu'à l'emplacement que vous choisissez. Leur contenu est traité sur votre appareil et n'est jamais envoyé ailleurs.",
      },
      {
        title: "Accès réseau",
        body: "AirToolkit n'effectue aucun appel réseau de sa propre initiative. La seule exception est l'API Request Tester : lorsque vous appuyez sur envoyer, il envoie exactement la requête que vous avez écrite à l'adresse que vous avez saisie. Cette requête part directement de votre ordinateur vers cette adresse ; elle ne nous est jamais envoyée, ni à personne d'autre.",
      },
      {
        title: "Microsoft Store",
        body: "Si vous installez AirToolkit depuis le Microsoft Store, Microsoft gère le téléchargement et la licence conformément à la Déclaration de confidentialité Microsoft. Microsoft peut partager avec nous des statistiques agrégées et anonymes, comme le nombre d'installations ou de plantages. Elles ne permettent pas de vous identifier.",
      },
      {
        title: "Ce site web",
        body: "Ce site n'utilise ni analytics, ni traçage, ni publicité, et ses polices sont servies par le site lui-même. Il enregistre uniquement votre choix de langue dans un cookie, et un indicateur temporaire qui évite de rejouer l'animation d'introduction pendant votre visite. Comme tout serveur web, le nôtre peut conserver des journaux techniques standard (adresse IP, pages demandées) pour la sécurité et le bon fonctionnement du site.",
      },
      {
        title: "Enfants",
        body: "AirToolkit ne collecte aucune information personnelle, y compris auprès des enfants de moins de 13 ans.",
      },
      {
        title: "Modifications",
        body: "Si cette politique change, la nouvelle version sera publiée sur cette page avec une date mise à jour.",
      },
    ],
    contactLead: "Une question sur la confidentialité ?",
    contactLink: "ouvrir une issue sur github →",
  },
};

export default dict;
