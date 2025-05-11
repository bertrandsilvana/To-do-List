let tasks = [];  // Aquí guardaremos las tareas

   
    function renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';  
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');

            const creationDate = new Date(task.creationDate).toLocaleString();
            const modificationDate = task.modificationDate ? new Date(task.modificationDate).toLocaleString() : 'N/A';

            taskItem.innerHTML = `
                <div>
                    <span><strong>Descripción:</strong> ${task.description}</span>
                    <span><strong>Prioridad:</strong> ${task.priority}</span>
                    <span><strong>Creación:</strong> ${creationDate}</span>
                    <span><strong>Modificación:</strong> ${modificationDate}</span>
                </div>
                <div>
                    <button class="edit" onclick="editTask(${task.id})">Editar</button>
                    <button class="delete" onclick="deleteTask(${task.id})">Eliminar</button>
                </div>
            `;

            taskList.appendChild(taskItem);
        });
    }

   
    document.getElementById('addTaskBtn').addEventListener('click', () => {
        const description = document.getElementById('taskDescription').value;
        const priority = parseInt(document.getElementById('taskPriority').value);

        if (!description || priority < 1 || priority > 5) {
            alert('Por favor, ingrese una descripción válida y una prioridad entre 1 y 5.');
            return;
        }

        const newTask = {
            id: Date.now(),  // Usamos el timestamp como ID único
            description,
            priority,
            creationDate: new Date(),
            modificationDate: null,
        };

        tasks.push(newTask);
        renderTasks();
        clearForm();
    });

   
    function editTask(id) {
        const task = tasks.find(t => t.id === id);
        const newDescription = prompt('Editar descripción:', task.description);
        const newPriority = parseInt(prompt('Editar prioridad (1-5):', task.priority));

        if (newDescription !== null && newPriority >= 1 && newPriority <= 5) {
            task.description = newDescription;
            task.priority = newPriority;
            task.modificationDate = new Date();
            renderTasks();
        }
    }

   
    function deleteTask(id) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }

  
    document.getElementById('sortTasks').addEventListener('change', (e) => {
        const sortBy = e.target.value;

        if (sortBy === 'priority') {
            tasks.sort((a, b) => a.priority - b.priority);
        } else if (sortBy === 'creationDate') {
            tasks.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
        } else if (sortBy === 'modificationDate') {
            tasks.sort((a, b) => (a.modificationDate ? new Date(a.modificationDate) : 0) - (b.modificationDate ? new Date(b.modificationDate) : 0));
        }

        renderTasks();
    });

   
    function clearForm() {
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskPriority').value = '';
    }

    renderTasks();
   
