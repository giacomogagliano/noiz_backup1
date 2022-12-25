- [x] TODO understand why the `fs` module doesn't work when
      imported in `ui`.
  - [ ] move the `readAndParse` method in `database/FS` package
- [ ] TODO find a way to embed a `Chart` element in an `md`
      document. Possible ways:
  - [ ] use `mdx`
  - [ ] use html id property and `getElementById` from the DOM
  - [ ] use a custom tag with settings for the elemet to be put
        in the upper section of the md file

/////

- colors
  - [ ] [#163](https://github.com/Zion-PTC/noiz-network-state/issues/163)
- HTML
  - Next
    - [ ] getStatic [#133](https://github.com/Zion-PTC/noiz-network-state/issues/133)
  - React
    - [ ] classes
      - [ ] ItemPage [#25](https://github.com/Zion-PTC/noiz-network-state/issues/25)
        - [#132](https://github.com/Zion-PTC/noiz-network-state/issues/132)
      - [ ] [#122](https://github.com/Zion-PTC/noiz-network-state/issues/122)
      - [ ] navbar [#131](https://github.com/Zion-PTC/noiz-network-state/issues/131)
      - [ ] loadingpage [#134](https://github.com/Zion-PTC/noiz-network-state/issues/134)
      - [ ] Menu [#200](https://github.com/Zion-PTC/noiz-network-state/issues/200)
      - app
        - [ ] noizApp [#137](https://github.com/Zion-PTC/noiz-network-state/issues/137)
    - pages
      - [ ] ProfilePage [#135](https://github.com/Zion-PTC/noiz-network-state/issues/135)
        - [ ] [#136](https://github.com/Zion-PTC/noiz-network-state/issues/136)
      - testArea [#166](https://github.com/Zion-PTC/noiz-network-state/issues/166)
      -
    - lib
      - global
        - BaseNoiz [#198](https://github.com/Zion-PTC/noiz-network-state/issues/198)
      - hooks
        - [ ] mdParser [#165](https://github.com/Zion-PTC/noiz-network-state/issues/165)
      - [ ] getSignerAddress [#138](https://github.com/Zion-PTC/noiz-network-state/issues/138)
      - [ ] handleNetworkChange [#140](https://github.com/Zion-PTC/noiz-network-state/issues/140)
      - [ ] listAccountsCallbackFactory [#141](https://github.com/Zion-PTC/noiz-network-state/issues/141)
- unknown
  - [ ] TODO create gotek propaganda presale app
    - [ ] sviluppo
      - [ ] react
        - [ ] scegliere metodo di visualizzazione chart
        - [ ] creare pagina interazione contratto
          - [x] creare classe React
          - [ ] collegare contratto
        - [ ] creare pagina con lista track
        - [ ] fare stile della pagina presentazione
          - [x] importare md
          - [ ] caricare md su ipfs
          - [ ] importare md da ipfs
          - [ ] aggiungere link verso presale
        - [ ] fare stile pagina interazione
        - [ ] creare collage con immagini
      - [ ] blockchain
        - [x] creare contratto per pagamento pre-vendita
        - [ ] fare test contratto
    - preparazione
      - [ ] choose files to release
      - [ ] create CID
      - [ ] pin files on my own node
      - [ ] pin files on andrea node
      - [ ] pin files on nikos node
    - [ ] export modules from `ui`
    - [ ] create a app in `root`
    - [ ] create image for docker
    - [ ] test the application on k8s
    - [ ] deploy application on
      - [ ] andrea's master
      - [ ] niko's worker

////

- [ ] rinominare Label in LabelledInput
  - [ ] creare cartella dentro

# app

- [ ] classes [#143](https://github.com/Zion-PTC/noiz-network-state/issues/143)
  - [#144](https://github.com/Zion-PTC/noiz-network-state/issues/144)
  - [#145](https://github.com/Zion-PTC/noiz-network-state/issues/145)
  - [#146](https://github.com/Zion-PTC/noiz-network-state/issues/146)

## enhancements

- [ ] TODO create a document class in /React/classes
      This class shall contain different flavours of
      `_document.tsx` files for `Next` applications.
- [ ] TODO create an app class in /React/classes
      This class shall contain several flavors of
      `_application.tsx` files for `Next` apps.
- [ ] TODO #25 @ariannatnl trovare un modo per fare restare al
      centro l'immagine, e che prenda sempre le propozioni che
      la rendano sempre visibile.
- [ ] TODO #198 @giacomogagliano update BaseNoiz
  - [ ] create a version which doesnt use the state
  - [ ] create a version which uses state
- [ ] TODO #200 @giacomogagliano @ariannatnl creare menu
  - [ ] menu
  - [ ] dropdown
- [ ] TODO @giacomogagliano creare una classe theme che contenga
      entrambi i theme selezionabili
