# Code

## Node

- [ ] provare a prendere stdout durante esecuzione di
      express
- [ ] seguire esempio tutorial dal titolo: **Working with
      stdout and stdin of a child process in Node.js**
- [ ] provare a creare un child process che riceva input
      dal terminale.
- [ ] capire event emitter seguendo tutorial:
  - **Using Event Emitters in Node.js**

## index.js

### API

- mostraTutorials

# CI / CD

Una CI/CD è composta da una serie di azioni che vengono
chiamate: `pipeline`. Per integrare un CI/CD ci sono
molti strumenti a disposizione

| nome    | on-premise (server) | CLI  | cloud | Subscription |
| ------- | ------------------- | ---- | ----- | ------------ |
| Jenkins | true                | true | false | undefined    |
| Gitlab  | true                | true | true  | true         |

# Next

- [ ] todo list
- [ ] capire come mostrare oggetti di una classe

# Rehype

- [x] capire come mettere le tabelle
- [ ] capire come usare sanitize

# Mdx

## Fonte

- https://mdxjs.com/docs/getting-started/#integrations
- https://mdxjs.com/packages/loader/

# Yaml

## Fonte

- https://eemeli.org/yaml/#createnode-options

- [ ] creare Yaml per
  - [ ] learn
    - [ ] turorial
  - [ ] finance
    - [ ] equipment

# Kubernetes & Minikube [Tutorial](https://www.youtube.com/watch?v=X48VuDVv0do&t=2830s)

## Sezioni del video

Queste sono le sezioni del video che contengono delle parti
da mettere in pratica.

1. Minikube and kubectl Local Setup.
2. Main `kubectl` commands.
3. k8s yaml configuration.
4. MongoDB and MongoExpress.
5. Namespaces.
6. Ingress.
7. Helm.
8. Persista data.
9. stateful apps.
10. k8s services explained.

- Introduzione
  - pod: container abstraction layer
  - service: pods abstraction (to persis IP of the service)
  - ingress: to route incoming requests
  - config map: to store environmental variables
    - database urls
  - secret: sensitive environmental variables
  - volume: external storage (HD)
  - deployment:
    - replicas: copies of pods
    - statefulset (harder=>easier hosted on external
      database )
  - required applications
    - on worker nodes
      - container
      - kubelet
      - kube proxy
    - on master
      - API server: handle request to the cluster and info
        from the cluster.
      - scheduler: choose the worker node on which deploy.
      - controller manager: actually starts scheduled services.
      - etcd: key-value store of the cluster state.

## Pratica

- Minikube and kubectl Local Setup.
  - [x] hyperkit or docker (for minkube virtualization)
- Main `kubectl` commands.
  - [x] crea nginx deployment
    > praticamente per configuarare un deployment bisogna
    > creare un yaml file che deve essere chiamato dal
    > server al momento della creazione del servizio.
    > ARRIVATO QUI https://youtu.be/X48VuDVv0do?t=5009
  - [x] setup mongo deployment
- k8s yaml configuration.
- MongoDB and MongoExpress.
- Namespaces.
- Ingress.
  - [ ] enable addons
    ```bash
    $ minikube addons enable ingress
    ```
  - [ ] creare una rule per ingress per la k8s dashboard
    - [ ] creare un yaml file
      ```
      apiVersion: networking.k8s.io/v1beta1
      kind: Ingress
      metadata:
        name: dashboard-ingress
        namespace: kubernetes-dashboard
      spec:
        rules:
        - host: k8sdash.networkstate.xyz
          http:
            paths:
            - backend:
                serviceName: kubernetes-dashboard
                servicePort: 80
      ```
    - [ ] somethin
      ```bash
      $ kubectl apply -f dashboard-ingress.yaml
      ```
- Helm.
- Persista data.
- stateful apps.
- k8s services explained-

# IPFS

## OrbitDb
