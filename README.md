# CeliChain
Proyecto para crear una red de blockchain y una criptomoneda asociada.

## Levantar el proyecto

```
npm install
```

Para levantar el proyecto ejecutar el script nodemon con node

```
npm run nodemon
```

Para ver los errores de transpilación del código usamos el script que hemos llamado lint

```
npm run lint
```

Para lanzar el testing con jest

```
npm run test
```

Para lanzar el testing con jest en modo watcher

```
npm run test:watch
```

## Red P2P
Una vez tenemos la parte de sockets levantada para levantar otra estancia del servidor seteamos las variables de env con otros valores y levantamos el servidor. Si estamos en powershell podemos hacer:

```
$env:P2P_PORT=5001; $env:HTTP_PORT=3001; $env:PEERS="ws:localhost:5000"; npm run start
```

Cambiando los puertos podemos levantar todas las instancias del servidor que queramos. Añadiendo en la var PEERS más ws:localhost:puerto separados por , nos conectamos a los nodos previamente levantados.
