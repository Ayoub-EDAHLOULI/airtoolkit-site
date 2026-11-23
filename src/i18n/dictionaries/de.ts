import type { Dictionary } from "../types";
import tools from "../tools/de";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 38 Entwickler-Tools, null Netzwerkaufrufe",
    siteDescription:
      "Eine Offline-First-Toolbox für Entwickler auf isolierten und gesperrten Windows-Rechnern. Keine Telemetrie, keine automatischen Updates, niemals nach Hause telefonieren.",
    toolsTitle: "Tools — AirToolkit",
    toolsDescription:
      "Durchsuchen Sie alle 38 in AirToolkit enthaltenen Tools, von JSON-Formatierung bis Zertifikatserstellung, nach Kategorie geordnet.",
    securityTitle: "Sicherheit & Verifizierung — AirToolkit",
    securityDescription:
      "Wie die Behauptung von AirToolkit über null Netzwerkaufrufe überprüft wird: ein statisches Code-Audit und ein Firewall-/VM-Test auf Betriebssystemebene, beide selbst reproduzierbar.",
    faqTitle: "FAQ — AirToolkit",
    faqDescription:
      "Antworten zur Offline-Garantie von AirToolkit, den unterstützten Plattformen und der Open-Source-Verfügbarkeit.",
    aboutTitle: "Über uns — AirToolkit",
    aboutDescription:
      "Warum AirToolkit existiert: entwickelt von einem Sicherheitsingenieur, der Offline-Entwicklertools für gesperrte VMs brauchte und keine fand, die es wirklich waren.",
    privacyTitle: "Datenschutzerklärung — AirToolkit",
    privacyDescription:
      "AirToolkit erhebt keine personenbezogenen Daten: keine Konten, keine Telemetrie, keine Analytics. Was auf Ihrem Gerät bleibt und in welchen wenigen Fällen Daten übertragen werden.",
  },
  nav: {
    tools: "tools",
    security: "sicherheit",
    faq: "faq",
    about: "über uns",
    download: "herunterladen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  footer: {
    github: "github",
    privacy: "datenschutz",
  },
  hero: {
    badge: "AirToolkit für Windows",
    title: "38 Entwickler-Tools.",
    titleAccent: "Ein Offline-Arbeitsplatz.",
    body: "Formatieren Sie JSON, testen Sie reguläre Ausdrücke und dekodieren Sie JWTs direkt auf Ihrem Rechner. AirToolkit greift nur dann auf das Netzwerk zu, wenn Sie eine API-Anfrage senden.",
    downloadWindows: "Installer herunterladen",
    getFromStore: "AirToolkit aus dem Microsoft Store herunterladen",
    viewGithub: "Versionshinweise",
    grabMsi: "MSI-Installer",
    previewLabel: "App-Vorschau",
    expandPreview: "Screenshot in voller Größe ansehen",
    terminalComment1: "# gesamten ausgehenden Datenverkehr blockieren",
  },
  whyOffline: {
    heading: "Warum Offline wichtig ist",
    subheading: "Das entstand aus einem echten Bedürfnis, nicht aus einer Feature-Liste.",
    points: [
      {
        num: "01",
        title: "Gesperrte VMs erreichen kein Browser-Tool",
        body: "Rechner mit eingeschränktem Internetzugang sind in sicherheits- und zugangskontrollorientierten Unternehmen üblich. Einen browserbasierten JSON-Formatter oder Regex-Tester aufzurufen ist dort schlicht keine Option.",
      },
      {
        num: "02",
        title: "\"Offline\"-Web-Tools sind es meist nicht",
        body: "Die meisten Seiten, die Offline-Freundlichkeit behaupten, laden weiterhin Analytics, Font-CDNs oder Update-Prüfungen — die lautstark fehlschlagen oder still nach Hause telefonieren, sobald sie blockiert werden.",
      },
      {
        num: "03",
        title: "Keine Netzwerkabhängigkeit, Punkt.",
        body: "AirToolkit tätigt von sich aus null Netzwerkaufrufe: keine Telemetrie, keine automatischen Updates, kein Nach-Hause-Telefonieren. Die eine Ausnahme — der API Request Tester — ist optional und dokumentiert.",
      },
    ],
    seeVerification: "→ sehen, wie das überprüft wird",
  },
  howItWorks: {
    heading: "So funktioniert's",
    steps: [
      {
        title: "Herunterladen und installieren",
        body: "Holen Sie sich den Windows-Installer — kein Konto, kein Lizenzschlüssel, keine Internetverbindung zum Ausführen erforderlich.",
      },
      {
        title: "Ein Tool aus der Seitenleiste wählen",
        body: "38 Tools in fünf Kategorien organisiert, mit Suche. Alles läuft lokal im selben Fenster.",
      },
      {
        title: "Selbst überprüfen",
        body: "Blockieren Sie die App an der Firewall und arbeiten Sie weiter — jedes Tool außer dem API Request Tester funktioniert weiterhin normal.",
      },
    ],
    browseTools: "→ alle Tools durchsuchen",
  },
  home: {
    facts: [
      { value: "38", label: "Tools in einer App" },
      { value: "5", label: "Kategorien" },
      { value: "0", label: "eigene Netzwerkaufrufe" },
      { value: "≈ 8,7 MB", label: "native App, kein Electron" },
      { value: "MIT", label: "kostenlos und Open Source" },
    ],
    toolbox: {
      eyebrow: "Der Werkzeugkasten",
      heading: "Alles, wofür Sie sonst eine Website öffnen würden.",
      body: "38 Werkzeuge in fünf Kategorien, in einem Fenster, mit Suche. Nichts pro Tool einzurichten, und nichts wird zur Laufzeit nachgeladen.",
      more: "+{n} weitere",
      cta: "Alle 38 Tools ansehen",
    },
    spotlight: {
      eyebrow: "Von Natur aus vertraulich",
      heading: "Gemacht für Daten, die nicht in eine Website gehören.",
      body: "Tokens, private Schlüssel, .env-Dateien und Produktionslogs sind genau das, was Sie keinem Online-Tool geben sollten. In AirToolkit werden sie auf Ihrem Gerät verarbeitet und bleiben dort.",
    },
    proof: {
      eyebrow: "Überprüfbar",
      heading: "Verlassen Sie sich nicht auf unser Wort.",
      body: "„Null Netzwerkaufrufe“ ist eine Aussage, die Sie selbst prüfen können, vom Quellcode bis zum Betriebssystem.",
      methods: [
        {
          title: "Statische Code-Prüfung",
          body: "Durchsuchen Sie den Quellcode nach allen Netzwerk-APIs. Der einzige Treffer sollte der API Request Tester sein.",
        },
        {
          title: "Sperre auf Betriebssystemebene",
          body: "Sperren Sie den ausgehenden Verkehr der App in der Windows-Firewall und arbeiten Sie weiter. Nur der API Request Tester ist betroffen.",
        },
      ],
      exceptionComment: "die eine dokumentierte Ausnahme",
      noMatches: "keine Treffer",
      cta: "Zur vollständigen Überprüfung",
    },
    install: {
      eyebrow: "Installation",
      heading: "Drei Wege zur Installation. Wählen Sie, was zu Ihrem Rechner passt.",
      body: "Alle drei installieren dieselbe App. Keiner braucht ein Konto oder einen Lizenzschlüssel.",
      recommended: "Empfohlen",
      options: [
        {
          title: "Microsoft Store",
          body: "Der einfachste Weg. Von Microsoft signiert und mit einem Klick installiert.",
          cta: "AirToolkit im Microsoft Store holen",
        },
        {
          title: "Installer (.exe)",
          body: "Für Rechner ohne Store-Zugang. Einmal herunterladen und auf den Offline-Rechner kopieren.",
          cta: ".exe herunterladen",
        },
        {
          title: "MSI-Paket",
          body: "Für IT-Teams, die per Gruppenrichtlinie oder SCCM verteilen.",
          cta: ".msi herunterladen",
        },
      ],
      requirements: "Windows 10 (Version 1809) oder neuer, 64 Bit. Kostenlos und Open Source unter der MIT-Lizenz.",
    },
    faqPreview: { heading: "Fragen und Antworten", cta: "Alle Fragen lesen" },
    finalCta: {
      heading: "Einmal installieren. Nie wieder ans Netzwerk denken.",
      body: "38 Entwickler-Tools, die weiterlaufen, wenn das Internet es nicht tut. Kostenlos, Open Source und im Microsoft Store.",
    },
  },
  toolsShowcase: {
    heading: "38 Tools, eine App",
    subheading:
      "Alles läuft lokal, im selben Fenster, ohne Einrichtung pro Tool. Nutzen Sie die Suche in der Seitenleiste der App oder durchsuchen Sie hier nach Kategorie.",
    categories: {
      "Formatters & Text": "Formatierer & Text",
      Generators: "Generatoren",
      Security: "Sicherheit",
      "Network & Config": "Netzwerk & Konfiguration",
      "Converters & Media": "Konverter & Medien",
    },
    categoryDescriptions: {
      "Formatters & Text":
        "Text und strukturierte Daten formatieren, konvertieren, vergleichen und aufräumen.",
      "Generators":
        "Hashes, IDs, Testdaten, QR-Codes und Icon-Sätze erzeugen.",
      "Security":
        "Tokens und Zertifikate prüfen und Schlüssel erstellen, ohne Secrets in eine Website einzufügen.",
      "Network & Config":
        "Mit HTTP-Requests, URLs, Subnetzen, Zeitplänen und Umgebungsdateien arbeiten.",
      "Converters & Media":
        "Timestamps, Zahlen und Farben umrechnen und in Bilder und Binärdateien hineinsehen.",
    },
    jumpTo: "springe zu",
    toolCount: "{n} Tools",
    whyOfflineLabel: "warum offline",
    networkBadge: "nutzt Netzwerk · auf Abruf",
    tools,
  },
  verification: {
    heading: "Überprüfbar, nicht nur behauptet",
    subheading:
      "„Null Netzwerkaufrufe“ ist eine überprüfbare Behauptung, keine Marketingfloskel. Hier ist genau, wie das überprüft wird — reproduzieren Sie es selbst, wenn Sie uns nicht einfach glauben wollen.",
    checks: [
      {
        title: "Statisches Code-Audit",
        body: "Grep über den gesamten Quellcode nach fetch/XMLHttpRequest/WebSocket und Rust-seitigen Netzwerk-Primitiven. Nur der API Request Tester sollte übereinstimmen — bei jeder Änderung ausgeführt.",
      },
      {
        title: "Firewall-Blockade auf Betriebssystemebene",
        body: "Gesamten ausgehenden Datenverkehr für die gepackte Binärdatei in der Windows-Firewall blockieren und bestätigen, dass jedes andere Tool weiterhin vollständig funktioniert.",
      },
      {
        title: "Netzwerkisolierte VM",
        body: "Für eine stärkere Garantie führen Sie denselben Build ganz ohne virtuellen Netzwerkadapter aus, statt sich auf eine Firewall-Regel zu verlassen.",
      },
    ],
    terminalComment: "die eine dokumentierte Ausnahme",
    terminalExceptionComment: "die eine dokumentierte Ausnahme",
    terminalSuccess: "✓ jedes andere Tool funktioniert weiterhin normal",
    statusLabel: "Aktueller Status:",
    statusBody:
      "das obige statische Audit wurde gegen die gesamte Codebasis ohne unerwartete Treffer ausgeführt. Der Firewall-/VM-Lauf ist ein manueller Schritt gegen einen signierten Release-Build — noch nicht durchgeführt. Betrachten Sie jede Offline-Behauptung als unverifiziert, bis diese Zeile aktualisiert wird.",
  },
  faq: {
    heading: "Häufig gestellte Fragen",
    questions: [
      {
        question: "Tätigt AirToolkit wirklich keine Netzwerkaufrufe?",
        answer:
          "Ja, mit einer dokumentierten Ausnahme: dem API Request Tester, dessen einziger Zweck es ist, eine von Ihnen bei Bedarf zusammengestellte Anfrage zu senden. Jedes andere Tool berührt niemals das Netzwerk. Siehe die Sicherheitsseite für die genaue Überprüfung.",
      },
      {
        question: "Benötige ich eine Internetverbindung zur Installation oder Ausführung?",
        answer:
          "Nein. Sobald Sie den Installer haben, funktionieren Einrichtung und jedes Tool vollständig offline — kein Konto, kein Lizenzserver, keine Update-Prüfung.",
      },
      {
        question: "Welche Plattformen werden unterstützt?",
        answer:
          "Windows, gebaut mit Tauri. Es wurde speziell für gesperrte Windows-VMs entwickelt, die heute das primäre Ziel sind. Installieren Sie es aus dem Microsoft Store oder laden Sie den Installer für Offline-Rechner von GitHub herunter.",
      },
      {
        question: "Ist es Open Source?",
        answer:
          "Ja — der vollständige Quellcode ist auf GitHub. Sie können ihn gerne lesen, prüfen oder selbst kompilieren, statt einer gepackten Binärdatei zu vertrauen.",
      },
      {
        question: "Warum nicht einfach browserbasierte Tools nutzen?",
        answer:
          "Die meisten browserbasierten Entwicklertool-Seiten sind auf Rechnern mit eingeschränktem Internetzugang nicht erreichbar, und viele, die behaupten offline zu funktionieren, laden weiterhin Analytics oder Font-CDNs, die fehlschlagen (oder still nach Hause telefonieren), sobald sie blockiert werden.",
      },
    ],
  },
  about: {
    tag: "# über uns",
    heading: "Gebaut von jemandem, der es zuerst brauchte",
    paragraphs: [
      "Ich bin Ayoub, Softwareingenieur, der an Sicherheits- und Zugangskontrollsystemen für ein B2B-Unternehmen arbeitet. Ein Teil dieser Arbeit bedeutet, viel Zeit in VMs mit eingeschränktem Internetzugang zu verbringen — Rechner, die absichtlich von der Außenwelt abgeschnitten sind, weil genau das der Sinn der darauf laufenden Systeme ist.",
      "Das Problem ist, dass die meisten Entwicklertools davon ausgehen, dass man nie mehr als einen Tab vom Internet entfernt ist. Müssen Sie JSON formatieren, eine Regex testen, ein JWT dekodieren? Auf einem normalen Rechner ist das eine Suche entfernt. Auf einer gesperrten VM ist es das nicht — und die „Offline“-Tool-Seiten, die trotzdem funktionieren wollen, laden oft weiterhin Analytics oder Font-CDNs, die lautstark fehlschlagen oder still nach Hause telefonieren, sobald sie blockiert werden.",
      "Ich habe das immer auf dieselbe Weise gelöst: eine echte Desktop-Anwendung einmal installieren und nie wieder ans Netzwerk denken. AirToolkit ist diese Anwendung, sauber gebaut statt jedes Mal improvisiert — 38 Tools, die die alltägliche Utility-Arbeit abdecken, vollständig lokal laufend, wobei die Garantie „null Netzwerkaufrufe“ als echte technische Anforderung behandelt wird, nicht als Slogan.",
      "Es ist auch derselbe Instinkt hinter NeuroKey, einem Offline-Passwort-Manager, den ich zuvor gebaut habe — keine Cloud, kein Server dazwischen, Ihre Daten verlassen nie Ihr Gerät. AirToolkit wendet dasselbe Prinzip auf die Tools an, die Entwickler jeden Tag nutzen.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "mehr erfahren",
    aboutDeveloper: "über den Entwickler →",
    sourceGithub: "Quellcode auf github →",
  },
  privacy: {
    tag: "# datenschutz",
    heading: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: 19. November 2026",
    intro: "AirToolkit erhebt, speichert und überträgt keinerlei personenbezogene Daten. Es gibt keine Konten, keine Telemetrie, keine Analytics, keine Absturzberichte und keine automatischen Updates. Diese Seite erklärt genau, was auf Ihrem Gerät bleibt und in welchen wenigen Fällen Daten übertragen werden.",
    sections: [
      {
        title: "Was die App speichert",
        body: "AirToolkit speichert zwei Dinge auf Ihrem Computer: Ihre Wahl zwischen hellem und dunklem Design und den Text, den Sie im Scratchpad eingeben. Beides wird lokal gespeichert und verlässt Ihr Gerät nie. Bei der Microsoft-Store-Version wird beides beim Deinstallieren entfernt.",
      },
      {
        title: "Ihre Dateien",
        body: "AirToolkit liest nur Dateien, die Sie selbst öffnen, und schreibt Dateien nur dorthin, wo Sie sie speichern. Ihr Inhalt wird auf Ihrem Gerät verarbeitet und nie hochgeladen.",
      },
      {
        title: "Netzwerkzugriff",
        body: "AirToolkit stellt von sich aus keine Netzwerkverbindungen her. Die einzige Ausnahme ist der API Request Tester: Wenn Sie auf Senden klicken, sendet er genau die Anfrage, die Sie geschrieben haben, an die Adresse, die Sie eingegeben haben. Diese Anfrage geht direkt von Ihrem Computer an diese Adresse; sie wird nie an uns oder an Dritte gesendet.",
      },
      {
        title: "Microsoft Store",
        body: "Wenn Sie AirToolkit aus dem Microsoft Store installieren, wickelt Microsoft Download und Lizenzierung gemäß der Microsoft-Datenschutzerklärung ab. Microsoft kann uns zusammengefasste, anonyme Statistiken zur Verfügung stellen, etwa Installations- oder Absturzzahlen. Daraus können wir Sie nicht identifizieren.",
      },
      {
        title: "Diese Website",
        body: "Diese Website verwendet keine Analytics, kein Tracking und keine Werbung, und ihre Schriftarten werden von der Website selbst ausgeliefert. Sie speichert nur Ihre Sprachwahl in einem Cookie sowie einen temporären Hinweis, damit die Startanimation während Ihres Besuchs nicht erneut abgespielt wird. Wie jeder Webserver kann unserer übliche technische Protokolle (etwa IP-Adresse und aufgerufene Seiten) für die Sicherheit und den Betrieb der Website speichern.",
      },
      {
        title: "Kinder",
        body: "AirToolkit erhebt von niemandem personenbezogene Daten, auch nicht von Kindern unter 13 Jahren.",
      },
      {
        title: "Änderungen",
        body: "Wenn sich diese Erklärung ändert, wird die neue Fassung mit aktualisiertem Datum auf dieser Seite veröffentlicht.",
      },
    ],
    contactLead: "Fragen zum Datenschutz?",
    contactLink: "issue auf github eröffnen →",
  },
};

export default dict;
