# Kufsteiner Reinigung – TODO

Übersicht, was noch zu erledigen ist, bevor die Seite „online ready“ ist.

---

## 1. Stammdaten & Inhalte prüfen

- [ ] **Firmendaten final eintragen**
  - [ ] Firmenname (genau wie im Firmenbuch)
  - [ ] Adresse
  - [ ] Telefonnummer(n)
  - [ ] Allgemeine E-Mail-Adresse (z. B. info@… / kontakt@…)
- [ ] **Texte auf SR & DE final gegenlesen**
  - [ ] Rechtschreibung / Grammatik
  - [ ] Einheitliche Schreibweise von „Kufsteiner Denkmal-, Fassaden- und Gebäudereinigung GmbH“
  - [ ] Jahreszahlen (Gründungsjahr, „seit 2005/2006“ etc.) prüfen

---

## 2. Impressum

- [ ] **Impressum-Daten korrekt eintragen (DE & SR)**
  - [ ] Firmenbuchnummer
  - [ ] Firmenbuchgericht
  - [ ] UID-Nummer
  - [ ] Geschäftsführung
  - [ ] Gewerbeberechtigung / Unternehmensgegenstand
  - [ ] Kammerzugehörigkeit
- [ ] Verlinkung:
  - [ ] Footer-Link „Impressum“ zeigt auf die richtige Datei (DE, SR, später EN)
  - [ ] Sprache in `lang=""` Attribut anpassen (z. B. `lang="sr"`)

---

## 3. Datenschutzerklärung

- [ ] **Datenschutzerklärung final prüfen (DE & SR)**
  - [ ] Kontaktdaten identisch mit Impressum
  - [ ] Verweis auf **österreichische** Datenschutzbehörde korrekt
  - [ ] Alle eingesetzten Dienste auch wirklich verwendet?  
        (z. B. Google Analytics nur drin lassen, wenn wirklich eingebunden)
- [ ] Cookie-Hinweise passen:
  - [ ] Text im Cookie-Banner zur Datenschutzerklärung passend
  - [ ] Link im Banner zeigt auf die korrekte `datenschutz.html` (DE & SR)

---

## 4. Sprachversionen & Verlinkungen

- [x] **SR-Version**
  - [x] Topbar + Navbar: alle Links zeigen auf SR-Dateien (index, about, service, contact, impressum, datenschutz, danke, usw.)
  - [x] Language-Switcher:  
        - `SR` → `index.html`  
        - `DE` → `de/index.html`  
        - `EN` → `en/index.html`
- [x] **DE-Version (im `/de` Ordner)**
  -[x] Alle internen Links zeigen auf `/de/...` (nicht versehentlich SR-Pfade)
  - [x] Links in Dropdown („Leistungen“) springen zu richtigen IDs auf `de/service.html`
  - [x] Bilder und `src`-Pfade prüfen (ggf. `../img/...` vs `img/...`)
- [x] **EN-Version (Ordner `/en`)**
  - [x] `en/index.html` erstellen (Basis: DE/SR, aber englische Texte)
  - [x] `en/about.html`
  - [x] `en/service.html`
  - [x] `en/contact.html`
  - [x] ggf. `en/impressum.html` / `en/privacy.html` (oder nur DE/SR rechtlich, aber dann klar kennzeichnen)
  - [x] Language-Switcher überall korrekt: SR ↔ DE ↔ EN

---

## 5. Formulare & Mailversand

- [x] **Kontaktformular & Buchungsformular testen**
  - [x] `sendMail(event)` in `cookie-mailer.js` mit richtiger Ziel-Adresse konfigurieren
  - [x] Erfolgsseite (z. B. `danke.html`) wird korrekt aufgerufen
  - [x] Fehlermeldungen bei ungültigen Eingaben anzeigen (z. B. leere Felder / fehlerhafte E-Mail)
- [x] Spam-Schutz:
  - [x] Evtl. Honeypot-Feld oder simple Anti-Bot-Logik
  - [x] Absender-/Betreff-Format im Mailer prüfen

---

## 6. SEO (nicht CEO 😉)

- [x] **Meta-Daten**
  - [x] `<title>`-Tags pro Seite optimieren (SR, DE, EN)
  - [x] `<meta name="description">` sinnvoll & eindeutig pro Seite
  - [x] Keywords grob passend (keine Keyword-Spam, aber relevante Begriffe:
        „Gebäudereinigung Kufstein“, „Fassadenreinigung“, „Unterhaltsreinigung“, „Trockeneisstrahlen“ usw.)
- [x] **Heading-Struktur**
  - [ ] Pro Seite nur **eine** `<h1>`
  - [ ] Sinnvolle `<h2>`, `<h3>`-Struktur
- [ ] **Open Graph & Social**
  - [ ] `og:title`, `og:description`, `og:image` für Startseite setzen
  - [ ] Favicon passt (trusty.png etc.)

---

## 7. Technisches (sitemap, robots, 404)

- [x] **`sitemap.xml` erstellen**
  - [x] Alle SR-Seiten eintragen
  - [x] Alle DE-Seiten eintragen
  - [x] Alle EN-Seiten eintragen
- [x] **`robots.txt` erstellen**
  - [x] `User-agent: *`
  - [x] `Allow: /`
  - [x] `Sitemap: https://deine-domain.xy/sitemap.xml`
- [x] **404-Seite**
  - [x] `404.html` gestalten (auf SR, DE, EN oder neutral)
  - [x] Link zurück zur Startseite(n)
  - [x] Einfacher Text: „Seite nicht gefunden“ etc.

---

## 8. Performance & Technik-Feinschliff

- [x] Bilder checken:
  - [x] Möglichst `.webp` nutzen (ist schon teilweise drin – Rest nachziehen)
  - [x] Bildgrößen optimieren (keine 5 MB Monster)
  - [ ] `alt`-Texte überall vorhanden (SEO + Barrierefreiheit)
- [ ] Lazy Loading (optional nice-to-have)
  - [ ] `<img loading="lazy" ...>` bei Bildern, die nicht „above the fold“ sind
- [ ] Video:
  - [ ] `booking.mp4 / .webm` Größe prüfen
  - [ ] Fallback-Bild vorhanden (ist schon drin, ggf. eigenes Branding-Bild)

---

## 9. Tracking / Analytics (optional)

- [ ] Falls **Google Analytics** oder anderes Tracking wirklich verwendet wird:
  - [ ] Script ordnungsgemäß einbinden (ggf. über Cookie-Consent)
  - [ ] Datenschutzerklärung anpassen
  - [ ] IP-Anonymisierung aktiv

---

## 10. Finaler Pre-Launch Check

- [ ] Alle Seiten mit echter Domain testen (nicht nur lokal)
- [x] Hauptnavigation testen (SR, DE, EN)
- [ ] Footer-Links testen (Impressum, Datenschutz, Kontakt)
- [ ] Formulare auf allen Sprachen testen
- [ ] Responsiveness checken (Mobile, Tablet, Desktop)
- [ ] Konsolen-Fehler im Browser prüfen (JS, 404-Bilder, Fonts usw.)

---

Wenn du später was abhaken willst, einfach hier in der Datei `- [ ]` zu `- [x]` ändern.  
So hast du eine schöne Übersicht, was schon done ist und was noch offen ist. 💪
