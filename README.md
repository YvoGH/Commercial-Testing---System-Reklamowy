# Commercial-Testing---System-Reklamowy

Z ogromną przyjemnością! Posiadanie czystego i zrozumiałego pliku README.md to absolutny znak rozpoznawczy dojrzałych projektów i profesjonalnych inżynierów. Dzięki niemu każdy nowy programista lub tester, który dołączy do zespołu, będzie mógł w 5 minut skonfigurować środowisko i odpalić testy, bez zasypywania Cię pytaniami.

Oto gotowy, sformatowany w Markdownie szablon. Skopiuj poniższy blok i zapisz go jako plik README.md wewnątrz folderu testy_playwright (lub w głównym katalogu frontendu, w zależności od preferencji zespołu).

System Reklamowy - Testy Automatyczne E2E 🚀
Zestaw testów End-to-End dla interfejsu systemu reklamowego. Projekt oparty jest na frameworku Playwright z wykorzystaniem języka TypeScript oraz wzorca projektowego Page Object Model (POM).

📁 Struktura Projektu
testy_playwright/pages/: Klasy POM ("instrukcje obsługi" stron). Znajdują się tu definicje lokatorów (Wielka Litera jako Typ) i metody biznesowe (np. LoginPage.ts).

testy_playwright/e2e/: Właściwe pliki scenariuszy testowych (*.spec.ts). Skupiają się wyłącznie na logice testowej i asercjach.

playwright.config.ts: Centralna konfiguracja frameworka, zawierająca m.in. ustawienia globalnego baseURL, viewportu (1920x1080) i integrację z paczką dotenv.

⚙️ Konfiguracja Środowiska (Wymagane!)
Ze względów bezpieczeństwa dane logowania nie są trzymane w repozytorium (plik ukryty przez .gitignore). Aby uruchomić testy na swoim środowisku lokalnym:

Utwórz plik o nazwie .env w głównym katalogu projektu (obok playwright.config.ts).

Wklej do niego poniższe zmienne i uzupełnij prawdziwymi danymi:

Fragment kodu
PLAYWRIGHT_BASE_URL=http://localhost:3000
PLAYWRIGHT_TEST_LOGIN=twoj_login_domenowy
PLAYWRIGHT_TEST_PASS=twoje_haslo
🚀 Uruchamianie Testów
Do pracy lokalnej oraz debugowania zaleca się korzystanie z wbudowanego interfejsu graficznego (UI Mode). Zapewnia on dostęp do osi czasu, DOM snapshotów oraz logów sieciowych.

Uruchomienie wszystkich testów w trybie UI:
npx playwright test --ui

Uruchomienie konkretnego pliku w trybie UI:
npx playwright test nazwa_pliku.spec.ts --ui

Uruchomienie testów w tle (Headless - domyślnie dla CI/CD):
npx playwright test

🧠 Główne Zasady i Dobre Praktyki
Zasada DRY i baseURL: Nawigując po aplikacji w plikach .spec.ts, używamy wyłącznie ścieżek względnych (np. await page.goto('/login')). Domena wstrzykiwana jest automatycznie.

Złoty Standard Lokatorów: Preferujemy namierzanie elementów zgodnie z zasadami dostępności (WCAG), używając getByRole() oraz getByLabel(). Unikamy szukania po generycznych klasach CSS, o ile nie jest to absolutnie konieczne.

Zawężanie Zakresu (Scoping): Szukając elementów w tabelach lub modalach, zawsze najpierw łapiemy kontener (np. wiersz, modal), a następnie szukamy w jego wnętrzu (np. modal.getByRole(...)). Zapobiega to błędom Strict Mode Violation.

Hermetyzacja Akcji: Wszelkie powtarzalne ciągi zdarzeń (jak wypełnianie formularzy logowania) zamykamy w metodach biznesowych klas POM.

Czy taki plik dokumentacji wyczerpuje najważniejsze informacje startowe dla nowego testera, czy chcesz, abym dodał tam jeszcze sekcję o instalacji zależności (npm install)?
