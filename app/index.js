// import yargs from "yargs"; //ES6
const yargs = require("yargs");
const fs = require('fs'); //file system (build in nodejs)
const {readAllTask, createTask, readDeTailsTask, updateTask, deleteTask} = require('./model/task'); 
// Create command test

// node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// CRUD

// Create Command - node app/index.js create --title="learn Nodejs" --description="So easy"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = createTask(title, description);
    console.log("Create Success: ", newTask);
  },
});

// Read-all Command - node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log("TaskJSON: ", result);
  },
});

// Read-details Command - node app/index.js read-details --id="123"
yargs.command({
  command: "read-details",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const task = readDeTailsTask(id);
    if(task){
      console.log("Task: ",task);
    }
    else {
      console.log("Not Found!");
    }
  },
});

// Update Command - node app/index.js update --id="123" --title="Learn NodeJS" --description="So easy"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },

    title: {
      type: "string",
    },

    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const task = updateTask(id, title, description);
    if(task) {
      console.log("Task Update", task);
    }
    else {
      console.log("Not Found!");
    }
  },
});

// Delete Command - node app/index.js delete --id="123"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const {id} = args;
    const task = deleteTask(id);
    if(task) {
      console.log("Delete Task: ",task);
    }
    else {
      console.log("Not Found!");
    }
  },
});

// Save as Command Update
yargs.parse();
