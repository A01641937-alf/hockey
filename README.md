README.md

Se trata de una API sencilla desarrollada en Node.js y Express que posibilita la ejecución de operaciones CRUD elementales en una base de datos MySQL. Ofrece puntos finales para obtener, crear, actualizar y eliminar datos (como la foto los jugadores, sus nombres, su dorsal y el ultimo equipo en el que jugaron) de la base de datos.



Para su instalacion sigua los siguientes pasos:

1.- Instale Node.js y npm en su máquina local.

2.- Clone el repositorio en su máquina local usando git clone https://github.com/A01641937-alf/hockey.

3.- Instale las dependencias del proyecto ejecutando npm install.

Configuración del Sql:

1.- Inicia MySQL en tu XAMPP e ingresa a una base de datos.

2.- Ejecuta el codigo sql en un tu base de datos para crear la tabla.

3.- En server/index modifica: 


<img width="189" alt="image" src="https://github.com/A01641937-alf/hockey/assets/88739339/2b9bf422-0cfa-411c-8725-01cccc6d5e5b">



Nota: Reemplace los valores los tuyos propios.


Para ejecutarlo sigua los siguientes pasos:

1.- Habra el repositorio clonado en su editor de codigo fuente.

2.- Habra una nueva terminal y dirigase a server usando [cd server] en la terminal.

3.- Inicie el servidor ejecutando [npm start].

4.- Habra una nueva terminal y dirigase a client usando [cd client] en la terminal.

5.- vuelva a usar [npm start].

6.- El servidor ahora debería estar ejecutándose en http://localhost:3001.

Como funciona:




<img width="309" alt="image" src="https://github.com/A01641937-alf/hockey/assets/88739339/60d34433-259a-4260-a49a-81f9d35a04b3">




Devuelve todas las columnas de la base de datos, estas son: id, nombre, dorsal, Ult-equipo.


<img width="309" alt="image" src="https://github.com/A01641937-alf/hockey/assets/88739339/c1705fde-2b15-412f-8693-da72f07c8642">



Elimina toda la fila corespondiente al id.


<img width="515" alt="image" src="https://github.com/A01641937-alf/hockey/assets/88739339/13a34d1f-d2f6-4ff5-af85-1588e15ffbed">




Se actualiza un registro ya existente, este puede ser de cualquiera de sus columnas.


<img width="501" alt="image" src="https://github.com/A01641937-alf/hockey/assets/88739339/7eea2c24-44a8-4fe0-b73d-0ec144db30a9">



Agrega un nuevo Registro con todas sus columnas que son: id, nombre, dorsal, Ult-equipo.
Nota: id es autoincremental.




Diagrama de componentes:





![image](https://github.com/A01641937-alf/hockey/assets/88739339/58be0dc0-a35f-44ec-9f16-255c56e2618b)

