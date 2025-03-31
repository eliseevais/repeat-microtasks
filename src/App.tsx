import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type TodolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

  let [filter, setFilter] = useState<FilterValuesType>("all");

  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });


  function removeTask(todolistId: string, id: string) {
    let filteredTasks = tasks[todolistId].filter(t => t.id != id);
    setTasks({
      ...tasks,
      [todolistId]: filteredTasks
    });
  }

  function addTask(todolistId: string, title: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    let newTasks = [newTask, ...tasks[todolistId]];
    setTasks({
      ...tasks,
      [todolistId]: newTasks
    });
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
    let task = tasks[todolistID].find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }

    setTasks({
      ...tasks,
      [todolistID]: tasks[todolistID]
    });
  }

  function changeFilter(todolistId: string, value: FilterValuesType) {
    setTodolists(todolists.map((todolist: TodolistsType) => todolist.id === todolistId
      ? {...todolist,filter: value}
      : todolist
    ))
  }

  return (
    <div className="App">

      {todolists.map((todolist: TodolistsType) => {
        let tasksForTodolist = tasks[todolist.id];
        if (filter === "active") {
          tasksForTodolist = tasks[todolist.id].filter((t: TaskType) => t.isDone === false)
        }
        if (filter === "completed") {
          tasksForTodolist = tasks[todolist.id].filter(t => t.isDone === true);
        }

        return (
          <Todolist title={todolist.title}
                    todolistId={todolist.id}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={todolist.filter}
                    key={todolist.id}
          />
        )
      })}
    </div>
  );
}

export default App;
