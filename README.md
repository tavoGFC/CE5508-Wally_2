# CE5508-Proyecto-Casa-Inteligente: Wally 🚀

El código mostrado acontinuación formar parte de curso: CE5508 - SOA41D: Arquitectura Orientanda a Servicios Aplicada a Sistemas Emergentes.

\_ _The code shown above is part of the course: CE5508 - SOA41D: Service Oriented Architecture Applied to Emerging Systems._ \_

El proyecto consiste en crear un dispositivo independiente e inteligente utilizando Internet de las Cosas, que forma parte de un conjunto más grande para crear en total un Casa Autónoma o Inteligente. Este en específico es un Basurero Inteligente denominado **Wally**.

\_ _The project consists of creating an independent and intelligent device using the Internet of Things, which is part of a larger set to create an Autonomous or Intelligent House altogether. This in specific is an Intelligent Waste Bin called **Wally**._ \_

# Wally 🤖

Acá sólo se muestra el lado del 'software' del proyecto. Para ver y comprender el lado del 'hardware' por favor contactar a los autores.

## Pre-requisitos 📋

Las herramientas usadas para las proyecto fueron:

- NodeJS: Entorno de ejecución del servidor.
- NPM: Manejador de paquetes de NodeJS.
- HapiJS: 'Framework' respectivo para crear el servidor.
- React-Native: Biblioteca principal para el desarrollo de la aplicación en Android y iOS.
- Expo y ExpoCLI: 'Framework' cliente para el desarrolloy simulación de la apliación.
- MQTT Cloud: Broker 'online' para la conexión entre el dispositvo y el la aplicación. Se requiere una cuenta.
- MongoAtlas: Versión en la nube de la base de datos NoSQL MongoDB. Se requiere una cuenta.

### Instalación 🔧

A la hora de crear el proyecto se hicieron los siguientes pasos. Hay un único folder que contiene tres principales carpetas: 'code_app', 'code_server' y 'code_arduino'.

```
mkdir folderPrincipal
cd folderPrincipal
```

Para la aplicación:

```
mkdir code_app
cd code_app
expo init Wally
cd Wally
npm start o expo start
```

Para la el servidor:

```
cd ..
mkdir code_server
cd code_server
mkdir server_hapijs
cd server_hapijs
npm init -y (nombrar y configurar el proyecto después en el package.json)
node start
```

## Ejecutar el Programa ⚙️

Al descargar este repositorio es importante aclarar que las carpteas 'node_modules' que se encuentran en 'code_app' y 'code_server' están siendo ignoradas. Por lo que antes de la ejección es importante ubcicarse en cada folder e instalar los módulos correspondientes. De la siguiente manera:

```
cd ..
cd code_server
npm install o npm i
cd ..
cd code_app/Wally
npm install o npm i
```

```
cd ..
cd code_server/server_hapijs
npm start
```

```
cd ..
cd code_app/Wally
expo start o npm start
```

## Deployment 📦

Para ejecutar ambos programas se necesitan dos terminales apartes ya que ambos programas están corriendo en el 'localhost' de la computadora. Cada puerto puede variar.

## Versión📌

v1: Todo el código mostrado en el repositorio corresponde a la primera versión del proyecto.

Futuras versiones tendrán una estructura, acomodo y guías correspondientes.

## Authors ✒️

- **Gustavo Fallas** - _Programdor, Diseñador y Constructor_ - [Git Personal](https://github.com/tavoGFC)
- **Randy Martínez** - _Programdor, Diseñador y Constructor_ - [Git Personal](https://github.com/randyma01)
