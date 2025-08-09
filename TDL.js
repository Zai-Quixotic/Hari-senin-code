   document.addEventListener('DOMContentLoaded', () => {
            const taskInput = document.getElementById('task-input');
            const prioritySelect = document.getElementById('priority-select');
            const addTaskBtn = document.getElementById('add-task-btn');
            const pendingTasksList = document.getElementById('pending-tasks');
            const completedTasksList = document.getElementById('completed-tasks');

            const liveTimeEl = document.getElementById('live-time');

        
            const updateTime = () => {
                const now = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const dateString = now.toLocaleDateString('id-ID', options);
                const timeString = now.toLocaleTimeString('id-ID');
                liveTimeEl.textContent = `${dateString}, ${timeString}`;
            };
            
            setInterval(updateTime, 1000); 

            // --- FUNGSI MANAJEMEN TUGAS ---
            const saveTasks = () => {
                const tasks = [];
                document.querySelectorAll('#pending-tasks li, #completed-tasks li').forEach(li => {
                    tasks.push({
                        text: li.querySelector('.task-content').textContent,
                        isDone: li.parentElement.id === 'completed-tasks',
                        priority: li.dataset.priority
                    });
                });
                localStorage.setItem('tasks', JSON.stringify(tasks));
            };

            const createTaskElement = (task) => {
                const li = document.createElement('li');
                li.dataset.priority = task.priority;

                // 1. Checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.isDone;
                checkbox.addEventListener('change', () => {
                    li.classList.toggle('task-done');
                    if (checkbox.checked) {
                        completedTasksList.appendChild(li);
                    } else {
                        pendingTasksList.appendChild(li);
                    }
                    saveTasks();
                });

                // 2. Detail Tugas (Teks + Prioritas)
                const taskDetails = document.createElement('div');
                taskDetails.className = 'task-details';

                const taskContent = document.createElement('div');
                taskContent.className = 'task-content';
                taskContent.textContent = task.text;

                const priorityTag = document.createElement('span');
                priorityTag.className = `priority-tag priority-${task.priority}`;
                priorityTag.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

                taskDetails.appendChild(taskContent);
                taskDetails.appendChild(priorityTag);

                // 3. Tombol Hapus
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = '×';
                deleteBtn.addEventListener('click', () => {
                    li.remove();
                    saveTasks();
                });

                li.appendChild(checkbox);
                li.appendChild(taskDetails);
                li.appendChild(deleteBtn);

                if (task.isDone) {
                    li.classList.add('task-done');
                    completedTasksList.appendChild(li);
                } else {
                    pendingTasksList.appendChild(li);
                }
            };
            
            const loadTasks = () => {
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.forEach(task => createTaskElement(task));
            };

            const addTask = () => {
                const taskText = taskInput.value.trim();
                const priority = prioritySelect.value;
                if (taskText) {
                    createTaskElement({ text: taskText, isDone: false, priority: priority });
                    taskInput.value = '';
                    saveTasks();
                } else {
                    alert('Silakan tulis tugas terlebih dahulu!');
                }
            };
            
            addTaskBtn.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) { // Tekan Enter untuk submit, Shift+Enter untuk baris baru
                    e.preventDefault(); // Mencegah baris baru saat menekan Enter
                    addTask();
                }
            });

            // --- INISIALISASI APLIKASI ---
            setupProfile();
            updateTime();
            loadTasks();
        });
           // 1. Ambil semua elemen HTML yang diperlukan
        const namaTampilan = document.getElementById('profile-name');
        const jabatanTampilan = document.getElementById('profile-job');
        const tombolEdit = document.getElementById('edit-button');

        // Fungsi untuk memuat data dari localStorage saat halaman dibuka
        function muatData() {
            const namaTersimpan = localStorage.getItem('nama');
            const jabatanTersimpan = localStorage.getItem('jabatan');

            if (namaTersimpan) {
                namaTampilan.textContent = namaTersimpan;
            }
            if (jabatanTersimpan) {
                jabatanTampilan.textContent = jabatanTersimpan;
            }
        }

        // 2. Tambahkan event listener ke tombol "Edit"
        tombolEdit.addEventListener('click', () => {
            // Minta input baru dari pengguna menggunakan prompt
            const namaBaru = prompt("Masukkan nama baru:", namaTampilan.textContent);
            const jabatanBaru = prompt("Masukkan jabatan baru:", jabatanTampilan.textContent);

            // Perbarui tampilan jika pengguna memasukkan data
            if (namaBaru !== null) { // Hanya perbarui jika pengguna tidak menekan "Cancel"
                namaTampilan.textContent = namaBaru;
                localStorage.setItem('nama', namaBaru); // Simpan ke localStorage
            }
            if (jabatanBaru !== null) { // Hanya perbarui jika pengguna tidak menekan "Cancel"
                jabatanTampilan.textContent = jabatanBaru;
                localStorage.setItem('jabatan', jabatanBaru); // Simpan ke localStorage
            }
        });

        // 3. Panggil fungsi muatData() saat halaman pertama kali dimuat
        muatData();