// Cookie-Banner-Logik
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    const rejectCookies = document.getElementById('reject-cookies');

    // Prüfe, ob die Elemente gefunden wurden (Debugging)
    if (!cookieBanner || !acceptCookies || !rejectCookies) {
        console.error('Ein oder mehrere Cookie-Banner-Elemente nicht gefunden:', {
            cookieBanner, acceptCookies, rejectCookies
        });
        return;
    }

    console.log('Cookie-Banner-Elemente erfolgreich geladen, cookieConsent:', localStorage.getItem('cookieConsent'));

    // Prüfe, ob der Nutzer schon eine Entscheidung getroffen hat
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
        cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.classList.add('d-none'); // Verstecke den Banner, wenn bereits entschieden
    }

    // Event-Listener für Akzeptieren
    const acceptHandler = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('d-none');
        console.log('Cookies akzeptiert, Display-Wert nach Klick:', window.getComputedStyle(cookieBanner).display);
    };

    // Event-Listener für Ablehnen
    const rejectHandler = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.classList.add('d-none');
        console.log('Cookies abgelehnt, Display-Wert nach Klick:', window.getComputedStyle(cookieBanner).display);
    };

    // Entferne bestehende Event-Listener, um Duplikation zu vermeiden
    acceptCookies.removeEventListener('click', acceptHandler);
    rejectCookies.removeEventListener('click', rejectHandler);

    // Füge Event-Listener hinzu
    acceptCookies.addEventListener('click', acceptHandler);
    rejectCookies.addEventListener('click', rejectHandler);
});