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

- [ ] **SR-Version**
  - [ ] Topbar + Navbar: alle Links zeigen auf SR-Dateien (index, about, service, contact, impressum, datenschutz, danke, usw.)
  - [ ] Language-Switcher:  
        - `SR` → `index.html`  
        - `DE` → `de/index.html`  
        - `EN` → `en/index.html`
- [ ] **DE-Version (im `/de` Ordner)**
  - [ ] Alle internen Links zeigen auf `/de/...` (nicht versehentlich SR-Pfade)
  - [ ] Links in Dropdown („Leistungen“) springen zu richtigen IDs auf `de/service.html`
  - [ ] Bilder und `src`-Pfade prüfen (ggf. `../img/...` vs `img/...`)
- [ ] **EN-Version (Ordner `/en`)**
  - [ ] `en/index.html` erstellen (Basis: DE/SR, aber englische Texte)
  - [ ] `en/about.html`
  - [ ] `en/service.html`
  - [ ] `en/contact.html`
  - [ ] ggf. `en/impressum.html` / `en/privacy.html` (oder nur DE/SR rechtlich, aber dann klar kennzeichnen)
  - [ ] Language-Switcher überall korrekt: SR ↔ DE ↔ EN

---

## 5. Formulare & Mailversand

- [ ] **Kontaktformular & Buchungsformular testen**
  - [ ] `sendMail(event)` in `cookie-mailer.js` mit richtiger Ziel-Adresse konfigurieren
  - [ ] Erfolgsseite (z. B. `danke.html`) wird korrekt aufgerufen
  - [ ] Fehlermeldungen bei ungültigen Eingaben anzeigen (z. B. leere Felder / fehlerhafte E-Mail)
- [ ] Spam-Schutz:
  - [ ] Evtl. Honeypot-Feld oder simple Anti-Bot-Logik
  - [ ] Absender-/Betreff-Format im Mailer prüfen

---

## 6. SEO (nicht CEO 😉)

- [ ] **Meta-Daten**
  - [ ] `<title>`-Tags pro Seite optimieren (SR, DE, EN)
  - [ ] `<meta name="description">` sinnvoll & eindeutig pro Seite
  - [ ] Keywords grob passend (keine Keyword-Spam, aber relevante Begriffe:
        „Gebäudereinigung Kufstein“, „Fassadenreinigung“, „Unterhaltsreinigung“, „Trockeneisstrahlen“ usw.)
- [ ] **Heading-Struktur**
  - [ ] Pro Seite nur **eine** `<h1>`
  - [ ] Sinnvolle `<h2>`, `<h3>`-Struktur
- [ ] **Open Graph & Social**
  - [ ] `og:title`, `og:description`, `og:image` für Startseite setzen
  - [ ] Favicon passt (trusty.png etc.)

---

## 7. Technisches (sitemap, robots, 404)

- [ ] **`sitemap.xml` erstellen**
  - [ ] Alle SR-Seiten eintragen
  - [ ] Alle DE-Seiten eintragen
  - [ ] Alle EN-Seiten eintragen
- [ ] **`robots.txt` erstellen**
  - [ ] `User-agent: *`
  - [ ] `Allow: /`
  - [ ] `Sitemap: https://deine-domain.xy/sitemap.xml`
- [ ] **404-Seite**
  - [ ] `404.html` gestalten (auf SR, DE, EN oder neutral)
  - [ ] Link zurück zur Startseite(n)
  - [ ] Einfacher Text: „Seite nicht gefunden“ etc.

---

## 8. Performance & Technik-Feinschliff

- [ ] Bilder checken:
  - [ ] Möglichst `.webp` nutzen (ist schon teilweise drin – Rest nachziehen)
  - [ ] Bildgrößen optimieren (keine 5 MB Monster)
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
- [ ] Hauptnavigation testen (SR, DE, EN)
- [ ] Footer-Links testen (Impressum, Datenschutz, Kontakt)
- [ ] Formulare auf allen Sprachen testen
- [ ] Responsiveness checken (Mobile, Tablet, Desktop)
- [ ] Konsolen-Fehler im Browser prüfen (JS, 404-Bilder, Fonts usw.)

---

Wenn du später was abhaken willst, einfach hier in der Datei `- [ ]` zu `- [x]` ändern.  
So hast du eine schöne Übersicht, was schon done ist und was noch offen ist. 💪
