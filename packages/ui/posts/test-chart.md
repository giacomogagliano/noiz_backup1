---
title: "test chart in md"
date: "2022-12-26"
chart:
  - id: 1
    label: "Tokenomics"
    labels:
      [
        ["Promozione", 10],
        ["Investors", 5],
        ["Programmazione", 10],
        ["Stampa", 20],
        ["Artisti", 55],
      ]
  - id: 2
    label: "Suppl"
    labels:
      [
        ["Promozione", 1],
        ["Testimonials", 1],
        ["Progettazione", 1],
        ["Delivery", 2],
        ["Artisti", 4],
      ]
---

# Scopo

Trovare un metodo per renderizzare una chart da un file md.

# Svolgimento

Inanzitutto creare un contenuto nel file `md`, cioè quello
che sto scrivendo qui.

Ad un certo punto nel documento potremmo

- creare un elemento con un id specifico che venga
  riconosciuto dal nostro codice

- inserire nei metadati del file md (quelli parsati da
  `grayMatter` per intenderci)

## Come funziona un md

In un file `.md` è possibile creare dei `tag` _HTML_. Ad
esempio è possibile mettere un link:

<a href="/">link</a>

Oppure importare un immagine

<img
src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/04/Weed-Terms-Gear-Patrol-Lead-Full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=640:*"
height="200px"></img> alla quale possiamo dare le dimensioni
desiderate.

## Obiettivo

Creare un element con un id specifico all'interno del quale
renderizzare il contenuto previsto dal tipo di md inviato al
componente.

In questo caso ipotiziamo di cercare di renderizzare una
pagine di tipo `tokenomics`, ovvero, all'interno della quale
è necessario inserire una chart.

# Div con id="chart"

Possiamo ad esempio creare un div con `id=chart-<id>`
in questo modo

```md
...

<div id=chart-<id>></div>
...
```

> è importante che il tag del div venga chiuso perchè altrimenti
> il rendere del contenuto del file `.md` si blocca

ed al suo interno renderizzarci qualche cosa manipolando il
`dom` all'interno del metodo `componentDidUpdate`.

> all'interno del metodo `componentDidUpdate` siamo sicuri
> che il dom sia 'montato', quindi possiamo accedere agli
> elementi presenti

<div id="chart-1"></div>

## Oggetto data di una pagina MdTokenomics

Una pagina come quella che stiamo renderizzando in questo esempio devono avere
questo aspetto:

```ts
interface MdTokenomicGreyMatterData {
  title: string;
  date: string;
  chart: {
    id: number;
    label: string;
    labels: [string, number][];
  }[];
}
```

Ovvero puo contenere piu chart. Ogni chart per essere renderizzata ha bisogno di un
corrispettivo `<div id=chart-<id>>`, dove id deve corrispondere all'id della chart inserita
nella parte "`yaml`" del file md.

> Qui sotto nel file `.md` ho inserito questo codice:
>
> ```html
> <div id="chart-2"></div>
> ```

<div id="chart-2"></div>
