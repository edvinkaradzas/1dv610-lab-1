# Laboration 1 – Fortsätt programmera

Det här är ditt privata GitLab-repo för kursens första laborationsuppgift.

Fullständig uppgiftsbeskrivning, deadline, bedömningskriterier och regler finns på
[kurssidan för Laboration 1](https://coursepress.lnu.se/kurser/introduktion-till-mjukvarukvalitet/examinationsuppgifter/laboration-1/)
— det här repot är bara din arbetsyta, och innehåller inte en egen kopia av uppgiften.

## Kom igång

1. Skriv din kod lokalt och versionshantera den med Git. Använd det här repot som remote, eller
   välj GitHub istället (se kurssidan för hur du gör).
2. Committa och pusha löpande.
3. Komplettera `REFLECTION.md` i repots rotkatalog.
4. Ta en skärmdump eller spela in en video av ditt program, och posta den i kursens Zulip-kanal.
5. Skapa en MR från `main` till `lnu/submit`, och fyll i inlämningsrapporten.

## Filer i repot

- `REFLECTION.md` — din reflektion. Komplettera den innan du skapar din MR.

---

## Mitt program

En hälsning som svarar på rövarspråket. Namnet ramas in och översätts enligt regeln
att varje konsonant fördubblas med ett `o` emellan: `H` → `Hoh`, `d` → `dod`.
Vokalerna `a e i o u y å ä ö` lämnas orörda.

```
*************************
| Hohejoj, Edodvovinon! |
*************************
(på svenska: Hej, Edvin!)
```

### Kör

```bash
node bin/cli.js Edvin
```

Utan argument frågar programmet efter namnet:

```bash
node bin/cli.js
```

Går även att köra med `npm start`.

### Använd som modul

```js
import { createGreeting } from './src/greeter.js'

console.log(createGreeting('Anna'))
```

`createGreeting` returnerar en sträng och skriver inte ut något själv.

### Struktur

| Fil | Ansvar |
|---|---|
| `src/rovarspraket.js` | Översätter text till rövarspråket |
| `src/frame.js` | Ramar in en textrad |
| `src/greeter.js` | Sätter ihop hälsningen |
| `bin/cli.js` | Läser namnet och skriver ut |

`src/` innehåller rena funktioner utan sidoeffekter. `bin/cli.js` är det enda
stället som läser från kommandoraden och skriver till terminalen.

### Krav

Node.js 20 eller senare.

### GitHub

https://github.com/edvinkaradzas/1dv610-lab-1
