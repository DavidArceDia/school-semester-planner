import { courseArray } from "./index.js";
export { Task };

const Task = (taskName, taskDueDate, taskWeight, taskMark, taskPriority) => {
  const getTaskName = () => taskName;
  const getTaskDueDate = () => taskDueDate;
  const getTaskWeight = () => taskWeight;
  const getTaskMark = () => taskMark;
  const getTaskPriority = () => taskPriority;

  return {
    getTaskName,
    getTaskDueDate,
    getTaskWeight,
    getTaskMark,
    getTaskPriority,
  };
};

//const addTaskListeners(taskCheckBox, )
/*
Your ‘todos’ are going to be objects that you’ll want to 
dynamically create, which means either using factories or 
constructors/classes to generate them.

### Task Properties

- Name
- Due Date
- Weight
- Mark

- Priority
- Edit, Delete



*/
