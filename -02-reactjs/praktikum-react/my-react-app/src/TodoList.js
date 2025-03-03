import React, { useState } from 'react';

// Komponen untuk menampilkan satu item tugas dengan tombol hapus
function TodoItem({ task, onDelete }) {
    return (
      <li style={{ display: 'list-item', listStyleType: 'disc', marginBottom: '5px' }}>
        <span style={{ display: 'inline-block', minWidth: '200px' }}>{task}</span>
        <button onClick={onDelete} style={{ marginLeft: '20px', color: 'red' }}>Hapus</button>
      </li>
    );
  }

// Komponen utama TodoList
function TodoList() {
  const [tasks, setTasks] = useState(["Belajar React", "Mengerjakan PBL", "Research project IOT"]);
  const [newTask, setNewTask] = useState("");

  // Fungsi untuk menambah tugas ke daftar
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Fungsi untuk menghapus tugas dari daftar
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Tambahkan tugas baru"
      />
      <button onClick={addTask}>Tambah</button>
    </div>
  );
}

export default TodoList;