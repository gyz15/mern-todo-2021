// @desc Edit or delete todo object from object array in state
// @used_in ["../reducers/todoReducer"]
export default function editObjInArr(obj, listOfObj, isDelete) {
  let newTodoArr = [...listOfObj];
  if (!isDelete) {
    const todoObjIndex = newTodoArr.indexOf(
      newTodoArr.find(
        (newTodoObj) => newTodoObj._id.toString() === obj._id.toString()
      )
    );
    // If user tries to edit a non-existing object, return original array and do not carry out edit
    if (todoObjIndex !== -1) {
      newTodoArr[todoObjIndex] = obj;
    } else {
      return newTodoArr;
    }
  } else {
    // If user tries to delete a non-existing object, it will not be found here
    newTodoArr = newTodoArr.filter(
      (todoObj) => todoObj._id.toString() !== obj._id.toString()
    );
  }

  return newTodoArr;
}
