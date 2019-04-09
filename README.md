# CE5508-Proyecto-Casa-Inteligente: Wally

El código mostrado acontinuación formar parte de curso: CE5508 - SOA41D: Arquitectura Orientanda a Servicios Aplicada a Sistemas Emergentes.

\_ _The code shown above is part of the course: CE5508 - SOA41D: Service Oriented Architecture Applied to Emerging Systems._ \_

El proyecto consiste en crear un dispositivo independiente e inteligente utilizando Internet de las Cosas, que forma parte de un conjunto más grande para crear en total un Casa Autónoma o Inteligente. Este en específico es un Basurero Inteligente denominado **Wally**.

\_ _The project consists of creating an independent and intelligent device using the Internet of Things, which is part of a larger set to create an Autonomous or Intelligent House altogether. This in specific is an Intelligent Waste Bin called **Wally**._ \_

# Wally

Acá sólo se muestra el lado del 'software' del proyecto. Para ver y comprender el lado del 'hardware' por favor contactar a los autores.

## Pre-requisitos

Las herramientas usadas para las proyecto fueron:

- NodeJS: Entorno de ejecución servidor.
- NPM: Manejador de paquetes de NodeJS.
- HapiJS: 'Framework' respectivo para crear el servidor.
- React-Native: Biblioteca principal para el desarrollo de la aplicación en Android y iOS.
- Expo y ExpoCLI: 'Framework': 'Framework' cliente para el desarrolloy simulación de la apliación.
- MQTT Cloud: Broker 'online' para la conexión entre el dispositvo y el la aplicación. Se requiere una cuenta.
- MongoAtlas: Versión en la nube de la base de datos NoSQL MongoDB. Se requiere una cuenta.

### Instalación

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
npm init -y (nombrar y configurar el proyecto después en el package.json a su gusto)
node start
```

## Ejecutar el Programa

Al descargar este repositorio es importante aclarar que las carpteas 'node_modules' de las carpetas 'code_app' y 'code_server' están siendo ignoradas. Por lo que antes de la ejección es importante ubcicarse en cada folder e instalar los módulos correspondientes. De la siguiente manera:

```
cd ..
cd code_server
npm install o npm i
cd ..
cd code_app
npm install o npm i
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
