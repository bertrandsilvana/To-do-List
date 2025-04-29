let tareas = [];
let taskId = 0;

const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const sortOption = document.getElementById('sortOption');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = document.getElementById('taskText').value;
  const prioridad = parseInt(document.getElementById('taskPriority').value);
  const now = new Date().toISOString();

  tareas.push({
    id: taskId++,
    texto,
    prioridad,
    fecha_creacion: now,
    fecha_modificacion: now
  });

  form.reset();
  renderTasks();
});

sortOption.addEventListener('change', renderTasks);

function renderTasks() {
  let tareasOrdenadas = [...tareas];

  if (sortOption.value === 'prioridad') {
    tareasOrdenadas.sort((a, b) => a.prioridad - b.prioridad);
  } else if (sortOption.value === 'modificacion') {
    tareasOrdenadas.sort((a, b) => new Date(a.fecha_modificacion) - new Date(b.fecha_modificacion));
  }

  taskList.innerHTML = '';
  tareasOrdenadas.forEach((tarea) => {
    const div = document.createElement('div');
    div.className = 'task';

    div.innerHTML = `
      <span><strong>Tarea:</strong> ${tarea.texto}</span>
      <span><strong>Prioridad:</strong> ${tarea.prioridad}</span>
      <span><strong>Creada:</strong> ${new Date(tarea.fecha_creacion).toLocaleString()}</span>
      <span><strong>Modificada:</strong> ${new Date(tarea.fecha_modificacion).toLocaleString()}</span>
      <div class="controls">
        <button onclick="editarTarea(${tarea.id})">Editar</button>
        <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
      </div>
    `;

    taskList.appendChild(div);
  });
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  renderTasks();
}

function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  const nuevoTexto = prompt("Editar tarea:", tarea.texto);
  if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
    const nuevaPrioridad = parseInt(prompt("Editar prioridad (1-5):", tarea.prioridad));
    if (!isNaN(nuevaPrioridad) && nuevaPrioridad >= 1 && nuevaPrioridad <= 5) {
      tarea.texto = nuevoTexto;
      tarea.prioridad = nuevaPrioridad;
      tarea.fecha_modificacion = new Date().toISOString();
      renderTasks();
    } else {
      alert("Prioridad inválida.");
    }
  }
}

