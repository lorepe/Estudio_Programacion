import {PlatziClass} from './main.mjs';

const clase67 = new PlatziClass({
    name: "Javascript orientada a objetos, basado en prototipos",
    videoID: "jjkjdhfjahsdlkfjhdsak"
});

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

/* 
Hola, mi aporte es el siguiente:
El uso de los módulos en JavaScript depende de las declaraciones Export e Import.

Para modular, solo basta que el archivo tenga la extensión .js, pero el motor V8 que es el que corre en los navegadores, recomienda usar la extensión .mjs

Esto es util porque queda claro cuál archivo es modulo y cual no.
Asegura que los archivos de modulo sean tratados como tal por la extensión Babel o Node.js
¿Como Exportar?
hay dos formas de exportar:

Colocar en frente de cada elemento la palabra export
Exportar en una sola declaración al final del archivo modulo las características que se quieren exportar, ejemplo:
export {PlatziClass, Student, LearningPaths};
¿Como Importar?
La importación obviamente se hace en el script que queremos usar dichos elementos.

import {PlatziClass, Student, LearningPaths} from '/ruta';
¿Como aplicar el modulo en HTML?

<script type="module" src="main.js"></script>
*/