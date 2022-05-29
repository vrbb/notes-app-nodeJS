const chalk = require('chalk')

const tasks = {
  tasks: [
    {
      text: 'Grocery shooping',
      completed: true
    },
    {
      text: 'Clean yard',
      completed: false
    },
    {
      text: 'Film course',
      completed: false
    }
  ]
}

const getTasksToDo = () => {
  tasks.tasks.forEach( function (task) {
    if (task.completed){
      console.log(task.text + chalk.green(' OK'))
    } else {
      console.log(task.text)

    }
    
  });
}

getTasksToDo()