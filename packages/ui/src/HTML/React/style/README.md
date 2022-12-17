Stavo pensando di mettere gli elementi base di html
all'interno di una cartella (index) dal nome `HTMLElements`,
questa cartella dovrebbe stare in `/style`.
Gli elementi che mettiamo dentro possiamo anche non farli
con versione, almeno per l'inizio, cioè non cè bisogno di
creare una cartella con dentro il file come facciamo di
solito. una volta fatto il `.noiz.sh` puoi direttamente
creare i file.

i file che sono all'interno della cartella style dovrebbero
poter essere cancellati. per due motivi:

- usano dei type che non stiamo piu usando o che non sono
  ben esportati.
- sono un po fatti alla cazzo

dobbiamo trovare un modo per usarli.

penso che si debba innanzitutto definire lo styled element
cosi:

```ts
const Div = styled.div``;
```

e, sopra a questo file, dovremme metterci l'interfaccia in
questo modo:

```ts
interface Div {}

const Div = styled.div`
  height: 100%;
`;
```

visto che questi elementi dovrebbero pter essere usati in
altri posti dobbiamo trovare un modo di usarli.
Direi che potresti cominciare facendo il file e lasciarlo
neutro, poi via via che ci servono li mettiamo.

facciamo una lista degli elementi che riteniamo piu
importanti visto che comuque sono un centinaio...

poi dobbiamo creare una pagina per testarli.
al momento abbiamo una cartella `pages/classes` in cui
inseriamo le classi.
direi che potremmo fare una cartella `pages/styles` e li
dentro metterci una cartella `HTMLElements` .. che ne dici??

e poi ogni elemento avra la sua pagina, possiamo farlo in
due modi

- [ ] creare una cartella e al suo interno metterci un file
      `index.tsx`
- [ ] creare un file con il nome dell'elemento tipo
      `div.tsx` con la lettera minuscola visto che è un link
      `url`.

vedi tu in che maniera preferisci ..

l'importante è che per ogni elemento che fai in style fai
una prova nell'applicazione.

# Content

This folder contains plain html elements
(div, p, input, button..) with types defining the
css related properties and ways to access them.

1. It contains `.tsx` files which define the css properties
   and how they can be manipulated by passing props down
   from the
   client application.
2. It contains a `Types` folder in which we define the props
   passed down to the element.
3. It contains variations for each elements so that an easy
   configured version can be called from client applications.

## Naming conventions.

- ## CSS Attributes order

```tsx
const Div = styled.div`
  grid-area: name;
  diplay: grid;
  overflow: auto;
`;
```
