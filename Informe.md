# Informe del Proyecto: To-Do List

## 1. Descripción del Proyecto

**Objetivo:**  
Desarrollar una página web que permita a los usuarios gestionar tareas . El objetivo principal fue ofrecer una forma simple de agregar, editar y eliminar, también ordenar tareas según su prioridad o su fecha de creación o modificación.

**Requisitos funcionales:**
- Agregar tareas y asignar su prioridad (1-5).
- Editar tareas.
- Eliminar tareas.
- Ordenar tareas por prioridad o fecha de creación - fecha de modificación.


**Alcance:**  
El proyecto fue desarrollado como una página web utilizando HTML, CSS y JavaScript. Los Datos no son almacenados.



## 2. Planificación y Diseño

**Estrategia utilizada:**  
 Se comenzó con la estructura básica de HTML, se implementó la lógica principal con JavaScript, y luego se aplicaron estilos CSS para mejorar la interfaz de usuario y hacerla más amigable e intuitiva para el Usuario.

**Justificación de decisiones:**
- se eligió usar tecnologías web básicas para asegurar compatibilidad, simplicidad y enfoque en  la lógica de programación.
- El diseño se centró en la usabilidad, usando `flexbox` para la disposición de elementos, y estilos `hover` para mejorar la interacción.

**Recursos disponibles:**
- **Tiempo estimado:** 4 horas
- **Personal:** 2 programadores
- **Herramientas:** Visual Studio Code, navegador web, Git y GitHub



## 3. Implementación

**Proceso de desarrollo:**
- creamos una estructura HTML con campos de entrada y botones.
- En JavaScript, programamos las funcionalidades principales: agregar, editar, eliminar y ordenar tareas.
- aplicamos estilos visuales con CSS para lograr una presentación clara, atractiva,coherente y homogenea.
- Utilizamos GitHub para trabajo colaborativo.

**Retos encontrados y soluciones:**
- **Error al hacer `git push`**: se produjo un rechazo por conflicto con la rama remota.  
  - **Solución:** se ejecutó `git pull origin main` para sincronizar, luego se resolvieron los conflictos y se hizo `git push` exitosamente.
- **Estilo poco intuitivo al inicio**:  
  - **Solución:** se rediseñó el formulario usando `flexbox` y se aplicaron mejoras visuales como botones con `hover` y transiciones.
- **Botón desalineado**:  
  - **Solución:** se reestructuró el formulario con `display: flex` y `gap`.


## 4. Análisis

### Eficiencia

- **Estimación original:** 4 horas, 2 personas
- **Resultado real:** funcionalidad completa lograda en el tiempo estimado
- **Evaluación:** El uso de tiempo y recursos fue óptimo. Se completó una solución funcional sin necesidad de herramientas adicionales ni retrasos.

### Parámetro de comparación:
- Tiempo: 4 horas
- Personal: 2 programadores

### Eficacia

- Se cumplieron todos los objetivos planteados.
- La página permite gestionar tareas con las funcionalidades requeridas.
- Se logró mediante una estructura simple, código modular y trabajo en equipo.

### Productividad

- Aprox. 200 líneas de código desarrolladas →  
  **50 líneas por persona/hora**
- consideramos Buena proporción considerando lógica, estructura y estilo.


### Comparación con alternativas

- Podríamos haber usado una librería como React o boostrap, pero habría incrementado la complejidad sin aportar valor significativo para al resultado.
- El uso de `localStorage` habría permitido persistencia, pero se excluyó por mantener el proyecto simple y enfocado.
- Para los recursos disponibles, la solución fue adecuada y eficiente.


## Conclusión

Logramos elaborar el proyecto en forma exitosa, cumpliendo todos los requisitos funcionales dentro del plazo y los recursos previstos.Tomamos decisiones técnicas adecuadas para el nivel del proyecto, aplicamos una estrategia de trabajo clara, resolviendo problemas . Se logró un equilibrio entre funcionalidad, usabilidad y simplicidad técnica.

