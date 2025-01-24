import { View } from "@nativescript/core";
import * as React from "react";
import { useState } from "react";
// import { View, TextField, Button, Label, ListView } from "react-nativescript";

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  return (
    <flexboxLayout style={{ padding: 20,flexDirection:'column' }}>
        <textView>Hello</textView>
        <textField
        text={task}
        hint="Enter a new task"
        onTextChange={(e) => setTask(e.value)}
        style={{ marginBottom: 10 }}
      />
      <button text="Add Task" onTap={addTask} style={{ marginBottom: 20 }} />
      {tasks.map((tsk,index)=>{
        return (
            <>
            <label
              text={tsk.text}
              style={{
                textDecoration: tsk.completed ? "line-through" : "none",
                color:!tsk.completed?'black':'gray',
                fontSize: 18,
              }}
              onTap={() => toggleComplete(index)}
            />
            
            </>
        )
      })}
      {/* <label text="To-Do List" style={{ fontSize: 24, marginBottom: 20 }} />

      <textField
        text={task}
        hint="Enter a new task"
        onTextChange={(e) => setTask(e.value)}
        style={{ marginBottom: 10 }}
      />

      <button text="Add Task" onTap={addTask} style={{ marginBottom: 20 }} />

      <listView
        items={tasks}>
        {tasks.map((item, index) => (
          <flexboxLayout key={index} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <label
              text={item.text}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                fontSize: 18,
              }}
            />
            <button
              text={item.completed ? "Undo" : "Complete"}
              onTap={() => toggleComplete(index)}
            />
          </flexboxLayout>
        ))}
      </listView> */}
    </flexboxLayout>
  );
};

export default TodoList;
