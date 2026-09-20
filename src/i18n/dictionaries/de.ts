import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirToolkit — 39 Entwickler-Tools, null Netzwerkaufrufe",
    siteDescription:
      "Eine Offline-First-Toolbox für Entwickler auf isolierten und gesperrten Windows-Rechnern. Keine Telemetrie, keine automatischen Updates, niemals nach Hause telefonieren.",
    toolsTitle: "Tools — AirToolkit",
    toolsDescription:
      "Durchsuchen Sie alle 39 in AirToolkit enthaltenen Tools, von JSON-Formatierung bis Zertifikatserstellung, nach Kategorie geordnet.",
    securityTitle: "Sicherheit & Verifizierung — AirToolkit",
    securityDescription:
      "Wie die Behauptung von AirToolkit über null Netzwerkaufrufe überprüft wird: ein statisches Code-Audit und ein Firewall-/VM-Test auf Betriebssystemebene, beide selbst reproduzierbar.",
    faqTitle: "FAQ — AirToolkit",
    faqDescription:
      "Antworten zur Offline-Garantie von AirToolkit, den unterstützten Plattformen und der Open-Source-Verfügbarkeit.",
    aboutTitle: "Über uns — AirToolkit",
    aboutDescription:
      "Warum AirToolkit existiert: entwickelt von einem Sicherheitsingenieur, der Offline-Entwicklertools für gesperrte VMs brauchte und keine fand, die es wirklich waren.",
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
  },
  hero: {
    badge: "keine Telemetrie · keine Auto-Updates · keine Netzwerkaufrufe",
    title: "39 Entwickler-Tools. Null Netzwerkaufrufe.",
    body: "AirToolkit bündelt die Werkzeuge, die Sie täglich brauchen — JSON-Formatierung, Regex-Tests, Hashing, JWT-Dekodierung und mehr — in einer einzigen Desktop-Anwendung, die von sich aus niemals einen Netzwerkaufruf tätigt. Keine Telemetrie, keine automatischen Updates, niemals nach Hause telefonieren.",
    downloadWindows: "für windows herunterladen",
    viewGithub: "auf github ansehen",
    deployNote: "Bereitstellung über Group Policy oder SCCM?",
    grabMsi: "die .msi holen",
    msiSuffix: "stattdessen",
    terminalComment1: "# gesamten ausgehenden Datenverkehr blockieren",
    terminalComment2: "# App funktioniert weiterhin normal",
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
        body: "39 Tools in fünf Kategorien organisiert, mit Suche. Alles läuft lokal im selben Fenster.",
      },
      {
        title: "Selbst überprüfen",
        body: "Blockieren Sie die App an der Firewall und arbeiten Sie weiter — jedes Tool außer dem API Request Tester funktioniert weiterhin normal.",
      },
    ],
    browseTools: "→ alle Tools durchsuchen",
  },
  toolsShowcase: {
    heading: "39 Tools, eine App",
    subheading:
      "Alles läuft lokal, im selben Fenster, ohne Einrichtung pro Tool. Nutzen Sie die Suche in der Seitenleiste der App oder durchsuchen Sie hier nach Kategorie.",
    categories: {
      "Formatters & Text": "Formatierer & Text",
      Generators: "Generatoren",
      Security: "Sicherheit",
      "Network & Config": "Netzwerk & Konfiguration",
      "Converters & Media": "Konverter & Medien",
    },
    tools: {
      jsonFormatter: {
        label: "JSON-Formatter",
        description: "JSON formatieren, minifizieren und validieren.",
      },
      xmlCsvFormatter: {
        label: "XML- / CSV-Formatter",
        description: "XML formatieren und CSV als Tabelle anzeigen.",
      },
      sqlFormatter: {
        label: "SQL-Formatter",
        description: "Minifiziertes SQL in lesbare, eingerückte Ausgabe umwandeln.",
      },
      markdownPreviewer: {
        label: "Markdown-Vorschau",
        description: "Live gerendertes Markdown beim Tippen.",
      },
      jsonYamlToml: {
        label: "JSON ↔ YAML / TOML",
        description: "Konvertierung zwischen JSON, YAML und TOML.",
      },
      regexTester: {
        label: "Regex-Tester",
        description:
          "Treffer-Hervorhebung, Erfassungsgruppen und eine Muster-Spickzettel.",
      },
      diffTool: {
        label: "Diff-Tool",
        description: "Zeilenweiser Vergleich zweier Textblöcke.",
      },
      caseConverter: {
        label: "Case-Konverter",
        description: "camelCase, snake_case, kebab-case und mehr.",
      },
      textUtilities: {
        label: "Text-Werkzeuge",
        description:
          "Sortieren, Duplikate entfernen, Leerzeichen normalisieren, Wörter und Zeilen zählen.",
      },
      encodeDecode: {
        label: "Kodieren / Dekodieren",
        description: "Base64, URL-Kodierung und HTML-Entitäten.",
      },
      logParserGrep: {
        label: "Log-Parser / Grep",
        description:
          "Mehrzeilige Logs nach Muster filtern, mit Ansicht der häufigsten Zeilen.",
      },
      stringEscapeUnescape: {
        label: "String Escape / Unescape",
        description: "JSON-, Shell-, SQL- und Regex-Escaping an einem Ort.",
      },
      jsonDiff: {
        label: "JSON-Diff",
        description:
          "Struktureller Diff nach Schlüssel/Wert — ignoriert Umsortierung und Formatierung.",
      },
      jsonSchemaValidator: {
        label: "JSON-Schema-Validator",
        description: "Ein JSON-Dokument gegen ein JSON-Schema validieren.",
      },
      scratchpad: {
        label: "Notizblock",
        description:
          "Ein lokaler Mehrfach-Notizblock, der Ihren Rechner nie verlässt.",
      },
      hashUuidGenerator: {
        label: "Hash-/UUID-Generator",
        description: "MD5-, SHA-1/256/512- und UUID-v4-Erzeugung.",
      },
      fakeDataGenerator: {
        label: "Testdaten-Generator",
        description:
          "Namen, E-Mails, Adressen und mehr zum Befüllen von Testdaten.",
      },
      qrCodeGenerator: {
        label: "QR-Code-Generator",
        description: "Text oder URL zu einem QR-Code, als PNG exportierbar.",
      },
      faviconGenerator: {
        label: "Favicon-Generator",
        description:
          "Ein Bild rein, ein vollständiger Satz Favicon-Größen und eine .ico raus.",
      },
      jwtDecoder: {
        label: "JWT-Decoder",
        description: "Header, Payload und Signatur-Claims untersuchen.",
      },
      x509CertificateDecoder: {
        label: "X.509-Zertifikat-Decoder",
        description:
          "Aussteller, Subjekt, Gültigkeit und SANs aus einem eingefügten PEM-Zertifikat.",
      },
      passwordStrengthChecker: {
        label: "Passwortstärke-Prüfer",
        description:
          "Entropie- und Knackzeit-Schätzungen, plus ein Generator für starke Passwörter.",
      },
      certificateCsrGenerator: {
        label: "Zertifikat-/CSR-Generator",
        description:
          "Ein selbstsigniertes Zertifikat oder einen CSR erzeugen — der private Schlüssel verlässt nie Ihr Gerät.",
      },
      apiRequestTester: {
        label: "API Request Tester",
        description:
          "HTTP-Anfragen bei Bedarf zusammenstellen und senden — die einzige bewusste Ausnahme von null Netzwerkaufrufen.",
      },
      urlParserBuilder: {
        label: "URL-Parser / -Builder",
        description: "Eine URL in Felder zerlegen oder von Grund auf neu erstellen.",
      },
      subnetCidrCalculator: {
        label: "Subnetz-/CIDR-Rechner",
        description:
          "Netzwerkadresse, Broadcast und nutzbarer Host-Bereich aus einer IP + CIDR.",
      },
      cronExplainer: {
        label: "Cron-Erklärer",
        description:
          "Menschenlesbare Erklärung eines Cron-Ausdrucks, plus nächste Ausführungszeiten.",
      },
      dotenvDiffValidator: {
        label: "dotenv-Diff & Validator",
        description:
          "Zwei .env-Dateien auf fehlende, zusätzliche oder abweichende Schlüssel vergleichen.",
      },
      networkPortReference: {
        label: "Netzwerkport-Referenz",
        description: "Durchsuchbare Übersicht gängiger Ports und was auf ihnen läuft.",
      },
      curlRequestBuilder: {
        label: "cURL ↔ Request-Builder",
        description:
          "Einen cURL-Befehl in seine Bestandteile zerlegen oder aus einer Anfrage generieren.",
      },
      systemInfo: {
        label: "Systeminformationen",
        description: "Plattform, Architektur, Hostname und Gebietsschema — lokal ausgelesen.",
      },
      timestampConverter: {
        label: "Timestamp-Konverter",
        description:
          "Unix-Timestamps in Daten und zurück, in Sekunden oder Millisekunden.",
      },
      numberBaseConverter: {
        label: "Zahlensystem-Konverter",
        description: "Umrechnung zwischen binär, oktal, dezimal und hexadezimal.",
      },
      colorTools: {
        label: "Farbwerkzeuge",
        description: "HEX-, RGB-, HSL- und CMYK-Umrechnung mit visuellem Picker.",
      },
      colorPaletteExtractor: {
        label: "Farbpaletten-Extraktor",
        description: "Dominante Farben aus einem Bild per k-Means-Clustering.",
      },
      qrCodeReader: {
        label: "QR-Code-Leser",
        description: "Ein QR-Code-Bild zurück in Text dekodieren.",
      },
      hexBinaryFileInspector: {
        label: "Hex-/Binärdatei-Inspektor",
        description:
          "Hex-Dump und Magic-Byte-Dateitypenerkennung für beliebige Dateien.",
      },
      base64FileEncoder: {
        label: "Base64-Datei-Encoder",
        description:
          "Beliebige Datei in Base64 oder einen Data-URI kodieren und zurück dekodieren.",
      },
    },
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
          "Windows, gebaut mit Tauri. Es wurde speziell für gesperrte Windows-VMs entwickelt, die heute das primäre Ziel sind.",
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
      "Ich habe das immer auf dieselbe Weise gelöst: eine echte Desktop-Anwendung einmal installieren und nie wieder ans Netzwerk denken. AirToolkit ist diese Anwendung, sauber gebaut statt jedes Mal improvisiert — 39 Tools, die die alltägliche Utility-Arbeit abdecken, vollständig lokal laufend, wobei die Garantie „null Netzwerkaufrufe“ als echte technische Anforderung behandelt wird, nicht als Slogan.",
      "Es ist auch derselbe Instinkt hinter NeuroKey, einem Offline-Passwort-Manager, den ich zuvor gebaut habe — keine Cloud, kein Server dazwischen, Ihre Daten verlassen nie Ihr Gerät. AirToolkit wendet dasselbe Prinzip auf die Tools an, die Entwickler jeden Tag nutzen.",
    ],
    neuroKeyName: "NeuroKey",
    knowMore: "mehr erfahren",
    aboutDeveloper: "über den Entwickler →",
    sourceGithub: "Quellcode auf github →",
  },
};

export default dict;
