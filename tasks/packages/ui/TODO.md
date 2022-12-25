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
      - contract
        - [ ] TODO create gotek propaganda presale app
          - [ ] sviluppo
            - solidity
              - [x] contratto fake USDC
                - [x] mettere 6 decimali
              - [ ] contratto erc20 per pagamento
                - [x] fare test su remix
                - [x] compile
                - [x] aggiungere Propaganda presale a NoizContractFactories
                - [x] dispiegare su hardhat network
                - [x] pulsante dispiega usdc
                - [x] pulsante attach usdc
                - [x] pulsante mina usdc
                - [x] pulsante dispiega propaganda
                - [x] setup listeners
                  - [x] listen purchase
                  - [x] listen usdc allowance
                - [ ] dispiegare su goerli network
                  - [ ] far fare test a
                    - [ ] alieno
                    - [ ] arianna
                    - [ ] jorge
                - [ ] dispiegare su mumbay
                  - [ ] fare test con
                    - [ ] luiz
                    - [ ] nate
                    - [ ] nobane
                - [ ] dispiegare su polygon
            - UI
              - [x] recuperare la supply dalla blockchain
              - [x] address dell'owner del contratto
              - [x] prezzo del token
              - [x] azione buy
              - [ ] pagina presentazione propaganda
                - [ ] far funzionare MD
                - [ ] grafico nella pagina
                - [ ] react
                  - [ ] scegliere metodo di visualizzazione chart
                  - [ ] creare pagina interazione contratto
                    - [x] creare classe React
                    - [x] collegare contratto
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
      - smart contract
        - [ ] aggiungere errore se non si è connesso il contratto
        - next steps
          - [ ] creare dei componenti che rappresentino la chiamata ad una funzione in particolare di un contratto
            - [ ] getter
              - [x] esportare funzione
              - [x] rendere del tutto generico
              - [ ] sistemare il lazy loader
                - [x] creare un elemto che non aspetta
                - [ ] fare in modo che non rirenderizzi ad ogni cambiamento
                      della pagina principale
            - [ ] setter
              - [x] esportare funzione
              - [ ] rendere del tutto generico
          - [ ] aggiungere metodi per quando cambia il signer
            - [x] testare se necessario
            - controllare se è necessario
            - [ ] è necessario => operare
            - [ ] non è necessario => non fare nulla
            - [x] situazione non chiara, cè un errore nella console
                  della blockchain che puo essere dovuto al fatto del mancato
                  switch in un qualche momento della tx
        - problems
          - cè un problema con la blockchain, viene effettuata una chiamata con il signer iniziale, o almeno sembra, e la console riporta
            questo errore.
            ```
            Error: Transaction reverted without a reason string
                at <UnrecognizedContract>.<unknown> (0x338f4f701bf4d4175ace7d79c27d71cd998f12dc)
                at runMicrotasks (<anonymous>)
                at processTicksAndRejections (node:internal/process/task_queues:96:5)
            ```
    - lib
      - global
        - BaseNoiz [#198](https://github.com/Zion-PTC/noiz-network-state/issues/198)
      - hooks
        - [ ] mdParser [#165](https://github.com/Zion-PTC/noiz-network-state/issues/165)
      - [ ] getSignerAddress [#138](https://github.com/Zion-PTC/noiz-network-state/issues/138)
      - [ ] handleNetworkChange [#140](https://github.com/Zion-PTC/noiz-network-state/issues/140)
      - [ ] listAccountsCallbackFactory [#141](https://github.com/Zion-PTC/noiz-network-state/issues/141)

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
