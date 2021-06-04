import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle.length !== 0) {
      setTasks(oldtasks => [
        ...oldtasks,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false
        }
      ])
    }
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {
    const doneTasks = tasks.map(task => {
      if(id === task.id){
        task.done = !task.done;
      }

      return task;
    })

    setTasks(doneTasks);
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id)

    setTasks(newTasks)

    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}