import type { ToolsDict } from "../types";

const tools: ToolsDict = {
  // Formatters & Text
  jsonFormatter: {
    label: "JSON-Formatter",
    description: "JSON formatieren oder minifizieren und sofort sehen, ob es ungültig ist.",
    features: [
      "Einrückung mit 2 oder 4 Leerzeichen, oder Minifizierung auf eine Zeile",
      "Parse-Fehler werden angezeigt, kaputtes JSON fällt sofort auf",
      "Eingabe und Ausgabe nebeneinander, Kopieren mit einem Klick",
    ],
    whyOffline:
      "API-Antworten und Konfigurationsdateien enthalten oft Tokens oder Kundendaten, die nicht in einen Online-Formatter gehören.",
  },
  xmlCsvFormatter: {
    label: "XML- / CSV-Formatter",
    description: "XML formatieren und CSV als lesbare Tabelle anzeigen.",
    features: [
      "XML: formatieren oder minifizieren",
      "CSV: Trennzeichen wählen und Zeilen als Tabelle ansehen",
      "Ergebnis kopieren",
    ],
    whyOffline:
      "Datenexporte und ältere XML-Konfigurationen lassen sich direkt auf dem Rechner prüfen, der sie erzeugt hat.",
  },
  sqlFormatter: {
    label: "SQL-Formatter",
    description: "Aus einer minifizierten Abfrage lesbares, eingerücktes SQL machen.",
    features: [
      "Dialekte: PostgreSQL, MySQL, SQLite, SQL Server (T-SQL) und Standard-SQL",
      "Schlüsselwörter: unverändert, GROSS oder klein",
      "Live-Ausgabe mit Kopierfunktion",
    ],
    whyOffline:
      "Produktionsabfragen verraten Tabellennamen und Daten. Hier bleiben sie auf Ihrem Rechner.",
  },
  markdownPreviewer: {
    label: "Markdown-Vorschau",
    description: "Live-Vorschau von Markdown beim Tippen, sicher gerendert.",
    features: [
      "GitHub-Flavored Markdown: Tabellen, Aufgabenlisten, Codeblöcke",
      "Das gerenderte HTML wird vor der Anzeige bereinigt",
      "Erzeugtes HTML kopieren",
    ],
    whyOffline:
      "READMEs und Dokumentation ansehen, ohne Browser-Erweiterung oder Online-Editor.",
  },
  jsonYamlToml: {
    label: "JSON ↔ YAML / TOML",
    description: "Zwischen JSON, YAML und TOML konvertieren, in jede Richtung.",
    features: [
      "Quell- und Zielformat unabhängig wählbar",
      "Praktisch für Kubernetes-Manifeste, CI-Dateien und Cargo- / pyproject-Konfigurationen",
      "Konvertiertes Ergebnis kopieren",
    ],
    whyOffline:
      "Infrastruktur-Konfigurationen enthalten oft interne Hostnamen und Secrets.",
  },
  regexTester: {
    label: "Regex-Tester",
    description: "Reguläre Ausdrücke mit Live-Hervorhebung der Treffer testen.",
    features: [
      "Flags: g, i, m, s (dotAll) und u (Unicode)",
      "Treffer im Text hervorgehoben, mit Position und Capture-Gruppen",
      "Integrierter Spickzettel mit 16 gängigen Elementen",
    ],
    whyOffline: "Ein Werkzeug, das jeder braucht und das es meist nur als Website gibt.",
  },
  diffTool: {
    label: "Diff-Tool",
    description: "Die Unterschiede zwischen zwei Texten Zeile für Zeile sehen.",
    features: [
      "Original und geänderter Text nebeneinander",
      "Hinzugefügte und entfernte Zeilen hervorgehoben",
    ],
    whyOffline:
      "Konfigurationsstände auf einem Server vergleichen, ohne sie anderswohin zu kopieren.",
  },
  caseConverter: {
    label: "Case-Konverter",
    description: "Text in 9 Schreibweisen gleichzeitig umwandeln.",
    features: [
      "GROSSBUCHSTABEN, kleinbuchstaben, Title Case, Satzanfang groß",
      "camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE",
      "Alle Varianten zusammen, jede mit eigenem Kopier-Button",
    ],
    whyOffline: "Variablen, Spalten und Umgebungsschlüssel schnell umbenennen.",
  },
  textUtilities: {
    label: "Text-Werkzeuge",
    description: "Text zählen und aufräumen.",
    features: [
      "Live-Zählung: Zeichen (mit und ohne Leerzeichen), Wörter, Zeilen",
      "Zeilen A→Z oder Z→A sortieren und Duplikate entfernen",
      "Leerraum zusammenfassen, Zeilenenden in LF oder CRLF umwandeln",
    ],
    whyOffline:
      "Listen und Logs direkt bereinigen, inklusive Zeilenenden zwischen Windows- und Linux-Dateien.",
  },
  encodeDecode: {
    label: "Kodieren / Dekodieren",
    description: "Base64, URL-Kodierung und HTML-Entities kodieren und dekodieren.",
    features: [
      "Drei Verfahren: Base64, URL-Kodierung, HTML-Entities",
      "Kodieren oder dekodieren, mit Button zum Umkehren der Richtung",
      "Ergebnis kopieren",
    ],
    whyOffline: "Einen Base64-Blob aus einem Log zu dekodieren ist alltäglich und heikel.",
  },
  logParserGrep: {
    label: "Log-Parser / Grep",
    description: "Logs mit einer Regex filtern, wie mit grep.",
    features: [
      "Regex-Filter, optional ohne Groß-/Kleinschreibung",
      "Invertierte Suche, wie grep -v",
      "Gefundene Zeilen, dazu die 5 häufigsten",
      "Alle Treffer kopieren",
    ],
    whyOffline:
      "Logs sind genau die Art von Daten, die einen abgeschotteten Rechner nicht verlassen dürfen.",
  },
  stringEscapeUnescape: {
    label: "String Escape / Unescape",
    description: "Strings für JSON, Shell, SQL und Regex escapen und unescapen.",
    features: [
      "Vier Ziele: JSON, Shell, SQL, Regex",
      "Escapen oder unescapen, mit Umkehr-Button",
      "Ergebnis kopieren",
    ],
    whyOffline: "Werte sicher in Skripte und Abfragen einbetten, ohne Rätselraten.",
  },
  jsonDiff: {
    label: "JSON-Diff",
    description: "Zwei JSON-Dokumente nach Struktur vergleichen, nicht nach Zeilen.",
    features: [
      "Vergleicht Schlüssel und Werte: umsortierte Schlüssel zählen nicht als Unterschied",
      "Listet geänderte, hinzugefügte und entfernte Werte mit ihrem Pfad",
      "Klare Meldung, wenn die Dokumente identisch sind",
    ],
    whyOffline: "API-Antworten oder Konfigurationen aus zwei Umgebungen vergleichen.",
  },
  jsonSchemaValidator: {
    label: "JSON-Schema-Validator",
    description: "Ein JSON-Dokument gegen ein JSON Schema validieren.",
    features: [
      "Schema und Daten nebeneinander",
      "Meldet alle Fehler, nicht nur den ersten",
      "Eindeutiges Ergebnis: gültig oder ungültig",
    ],
    whyOffline: "Payloads und Konfigurationen schon bei der Entwicklung gegen einen Vertrag prüfen.",
  },
  scratchpad: {
    label: "Notizblock",
    description: "Ein kleiner Notizblock mit mehreren Notizen, gespeichert auf Ihrem Rechner.",
    features: [
      "Notizen anlegen, umbenennen und löschen",
      "Automatisch lokal gespeichert",
      "Nichts wird synchronisiert oder hochgeladen",
    ],
    whyOffline:
      "Snippets und Befehle griffbereit halten, auf einem Rechner ohne Cloud-Notizen.",
  },

  // Generators
  hashUuidGenerator: {
    label: "Hash-/UUID-Generator",
    description: "Hashes von Text berechnen und UUIDs erzeugen.",
    features: [
      "MD5, SHA-1, SHA-256 und SHA-512 der Eingabe, alle auf einmal",
      "Zufällige UUIDs der Version 4, auch in großer Zahl",
      "Einen Wert oder alle kopieren",
    ],
    whyOffline:
      "Prüfsummen und IDs braucht man ständig, und die Eingabe kann vertraulich sein.",
  },
  fakeDataGenerator: {
    label: "Testdaten-Generator",
    description: "Realistische Testdatensätze erzeugen.",
    features: [
      "Felder: Name, E-Mail, UUID, Adresse, Telefon, Firma",
      "Anzahl der Datensätze frei wählbar",
      "Ausgabe als JSON oder CSV",
    ],
    whyOffline: "Testdatenbanken befüllen, ohne echte Kundendaten anzufassen.",
  },
  qrCodeGenerator: {
    label: "QR-Code-Generator",
    description: "Text oder eine URL in einen QR-Code verwandeln.",
    features: [
      "Live-Vorschau beim Tippen",
      "Als PNG über den Windows-Speicherdialog sichern",
      "Bild als Data-URL kopieren",
    ],
    whyOffline: "Eine URL oder WLAN-Zugangsdaten ohne Online-Generator aufs Handy bringen.",
  },
  faviconGenerator: {
    label: "Favicon-Generator",
    description: "Aus einem Bild einen kompletten Favicon-Satz erzeugen.",
    features: [
      "8 PNG-Größen: 16, 32, 48, 64, 128, 180, 192 und 512 px",
      "Ein favicon.ico mit mehreren Auflösungen (16, 32 und 48 px)",
      "Alle PNGs in einen Ordner speichern, oder die .ico",
    ],
    whyOffline: "Auch Webprojekte auf Offline-Build-Rechnern brauchen Icons.",
  },

  // Security
  jwtDecoder: {
    label: "JWT-Decoder",
    description: "Header und Payload eines JSON Web Tokens dekodieren.",
    features: [
      "Header und Payload als formatiertes JSON",
      "Claims exp, iat und nbf als lesbare Datumsangaben",
      "Signatur unverändert angezeigt, mit dem klaren Hinweis, dass sie nicht geprüft wird",
    ],
    whyOffline:
      "Ein echtes Token in eine Website einzufügen ist ein Sicherheitsvorfall mit Ansage.",
  },
  x509CertificateDecoder: {
    label: "X.509-Zertifikat-Decoder",
    description: "Ein PEM-Zertifikat lesen und sehen, was drinsteckt.",
    features: [
      "Subject, Aussteller und Seriennummer",
      "Gültigkeitszeitraum, abgelaufene Zertifikate markiert",
      "Signaturalgorithmus, CA-Flag und Schlüsselverwendung",
      "SHA-1- und SHA-256-Fingerabdrücke",
    ],
    whyOffline: "Interne oder Kundenzertifikate prüfen, ohne sie hochzuladen.",
  },
  passwordStrengthChecker: {
    label: "Passwortstärke-Prüfer",
    description: "Die Stärke eines Passworts einschätzen und ein besseres bekommen.",
    features: [
      "Entropie in Bit und geschätzte Knackzeit (Offline-Angriff mit ~10 Mrd. Versuchen/s)",
      "Erkennt Tastaturfolgen, Wiederholungen und gängige Passwörter",
      "Erzeugt ein starkes Zufallspasswort",
    ],
    whyOffline: "Ein Passwort auf einer Website zu prüfen, verfehlt den Zweck.",
  },
  certificateCsrGenerator: {
    label: "Zertifikat-/CSR-Generator",
    description:
      "Ein selbstsigniertes Zertifikat oder einen CSR erstellen, mit lokal erzeugten Schlüsseln.",
    features: [
      "Schlüssel: RSA 2048, RSA 4096 oder ECDSA P-256",
      "Subject-Felder (CN, O, OU, L, ST, C), Subject Alternative Names und Gültigkeit",
      "Zertifikat oder CSR, privater Schlüssel (PKCS#8) und öffentlicher Schlüssel, als PEM",
    ],
    whyOffline:
      "Der private Schlüssel entsteht auf Ihrem Gerät und verlässt es nie, anders als bei Online-CSR-Generatoren.",
  },

  // Network & Config
  apiRequestTester: {
    label: "API Request Tester",
    description:
      "Einen selbst geschriebenen HTTP-Request senden und die Antwort sehen. Das einzige Tool, das das Netzwerk nutzt.",
    features: [
      "Methoden: GET, POST, PUT, PATCH, DELETE, HEAD",
      "Header-Editor und Request-Body",
      "Status, Antwortzeit und Body, dazu eine durchsuchbare Referenz mit 42 Statuscodes",
    ],
    whyOffline:
      "Es sendet nur, wenn Sie auf Senden klicken, und nur an die eingegebene Adresse. Gedacht zum Testen von Diensten im internen Netz.",
  },
  urlParserBuilder: {
    label: "URL-Parser / -Builder",
    description: "Eine URL in ihre Teile zerlegen oder aus Teilen zusammensetzen.",
    features: [
      "URL einfügen, um Protokoll, Host, Port, Pfad und Fragment zu füllen",
      "Query-Parameter als Schlüssel/Wert-Liste bearbeiten",
      "Die neu gebaute URL aktualisiert sich live, mit Kopierfunktion",
    ],
    whyOffline: "Lange Redirect- und Callback-URLs sicher debuggen.",
  },
  subnetCidrCalculator: {
    label: "Subnetz-/CIDR-Rechner",
    description: "IPv4-Subnetzdetails aus Adresse und Präfix berechnen.",
    features: [
      "Netz- und Broadcast-Adresse",
      "Subnetzmaske und Wildcard-Maske",
      "Nutzbarer Hostbereich, Anzahl Hosts und Gesamtzahl Adressen",
    ],
    whyOffline: "Netzplanung findet in genau diesen isolierten Netzen statt.",
  },
  cronExplainer: {
    label: "Cron-Erklärer",
    description: "Einen Cron-Ausdruck in Klartext erklären und die nächsten Ausführungen auflisten.",
    features: [
      "Verständliche Beschreibung des Zeitplans",
      "Die nächsten 5 Ausführungszeiten",
      "Beispielausdrücke zum Einstieg",
    ],
    whyOffline: "Geplante Jobs auf Servern prüfen, bevor man sie ausrollt.",
  },
  dotenvDiffValidator: {
    label: "dotenv-Diff & Validator",
    description: "Zwei .env-Dateien vergleichen und Probleme markieren.",
    features: [
      "Schlüssel, die nur in einer der Dateien vorkommen",
      "Schlüssel mit unterschiedlichen Werten",
      "Doppelte Schlüssel innerhalb einer Datei",
    ],
    whyOffline:
      ".env-Dateien stecken voller Secrets. Sie online zu vergleichen, ist nie akzeptabel.",
  },
  networkPortReference: {
    label: "Netzwerkport-Referenz",
    description: "Eine durchsuchbare Liste gängiger Netzwerkports.",
    features: [
      "64 bekannte Ports mit Dienstname und Beschreibung",
      "Suche nach Portnummer, Dienst oder Beschreibung",
    ],
    whyOffline: "Die Art von Nachschlagen, für die man sonst das Web bemüht.",
  },
  curlRequestBuilder: {
    label: "cURL ↔ Request-Builder",
    description: "Einen cURL-Befehl in bearbeitbare Felder zerlegen, und Felder zurück in cURL.",
    features: [
      "cURL-Befehl einfügen (z. B. aus den Devtools kopiert), um Methode, URL, Header und Body zu füllen",
      "Felder bearbeiten und den neu erzeugten cURL-Befehl erhalten",
    ],
    whyOffline: "Kopierte cURL-Befehle enthalten meist Cookies und Auth-Header.",
  },
  systemInfo: {
    label: "Systeminformationen",
    description: "Details zu Rechner und App, lokal ausgelesen.",
    features: [
      "Betriebssystem, Version, Architektur, Hostname und Gebietsschema",
      "Bildschirmauflösung, Fenstergröße und User-Agent",
      "Versionen von AirToolkit und Tauri, alles auf einmal kopierbar",
    ],
    whyOffline: "Schnelle Umgebungsdaten für Bugreports aus abgeschotteten VMs.",
  },

  // Converters & Media
  timestampConverter: {
    label: "Timestamp-Konverter",
    description: "Zwischen Unix-Timestamps und Datumsangaben umrechnen.",
    features: [
      "Unix (Sekunden oder Millisekunden) in ISO 8601, Ortszeit und UTC",
      "Datum zurück in Unix, aus ISO 8601 oder Formaten wie „Jan 17 2024“",
      "Jetzt-Button für die aktuelle Zeit",
    ],
    whyOffline: "Timestamps in Logs und Tokens zu lesen, gehört zum Alltag.",
  },
  numberBaseConverter: {
    label: "Zahlensystem-Konverter",
    description: "Zahlen zwischen Binär, Oktal, Dezimal und Hexadezimal umrechnen.",
    features: [
      "Alle vier Systeme aktualisieren sich gemeinsam, egal wo Sie tippen",
      "Präfixe angezeigt: 0b, 0o, 0x",
      "Jedes System kopierbar",
    ],
    whyOffline: "Für Bitmasken, Berechtigungen und Speicheradressen.",
  },
  colorTools: {
    label: "Farbwerkzeuge",
    description: "Farben zwischen HEX, RGB, HSL und CMYK umrechnen.",
    features: [
      "Ein Format bearbeiten, die anderen ziehen nach",
      "Farbwähler und Vorschaufeld",
      "Klare Fehlermeldungen bei ungültigen Werten",
    ],
    whyOffline: "Designarbeit auf Rechnern ohne Designsoftware.",
  },
  colorPaletteExtractor: {
    label: "Farbpaletten-Extraktor",
    description: "Die 6 dominanten Farben eines Bildes finden.",
    features: [
      "Jede Farbe mit ihrem Anteil am Bild",
      "Jede Farbe als HEX kopieren",
      "k-Means-Clustering über eine Pixelstichprobe",
    ],
    whyOffline: "Bilder werden auf Ihrem Gerät verarbeitet, nie hochgeladen.",
  },
  qrCodeReader: {
    label: "QR-Code-Leser",
    description: "Den Text aus einem QR-Code-Bild lesen.",
    features: [
      "Eine Bilddatei mit QR-Code öffnen",
      "Dekodierter Text mit Kopierfunktion",
    ],
    whyOffline: "Prüfen, wohin ein QR-Code führt, bevor man ihn öffnet.",
  },
  hexBinaryFileInspector: {
    label: "Hex-/Binärdatei-Inspektor",
    description: "Die Bytes einer Datei ansehen und ihren echten Typ erkennen.",
    features: [
      "Hex-Dump mit ASCII-Spalte (erste 16 KB)",
      "Erkennt 23 Dateitypen an ihren Magic Bytes: PNG, PDF, ZIP, EXE/DLL, ELF, SQLite und mehr",
      "Erkennt reine Textdateien",
    ],
    whyOffline:
      "Verdächtige oder unbeschriftete Dateien prüfen, ohne sie zu einem Online-Scanner hochzuladen.",
  },
  base64FileEncoder: {
    label: "Base64-Datei-Encoder",
    description: "Dateien in Base64 umwandeln und zurück.",
    features: [
      "Beliebige Datei in Base64 kodieren, oder als Data-URI mit MIME-Typ",
      "Base64 oder eine Data-URI dekodieren und die Datei speichern",
      "Kodierten Text kopieren",
    ],
    whyOffline:
      "Kleine Dateien über reine Textkanäle auf eingeschränkten Systemen übertragen.",
  },
};

export default tools;
