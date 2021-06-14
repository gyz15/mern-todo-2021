// Used in reducer to update object in an array
// TODO Find todo match with updateTodoId and update attribute || delete
// TODO handle error if findindex could find obj in state
// cannot direct compare as if deleted will have a {message:"success"} attribute
export default function editObjInArr(obj, listOfObj, isDelete) {
  let newTodoArr = [...listOfObj];
  if (!isDelete) {
    const todoObjIndex = newTodoArr.indexOf(
      newTodoArr.find(
        (newTodoObj) => newTodoObj._id.toString() === obj._id.toString()
      )
    );
    newTodoArr[todoObjIndex] = obj;
  } else {
    newTodoArr = newTodoArr.filter(
      (todoObj) => todoObj._id.toString() !== obj._id.toString()
    );
  }

  return newTodoArr;
}
