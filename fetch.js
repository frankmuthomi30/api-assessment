
let planner = document.querySelector(".display-todos");
fetch ("  https://dummyjson.com/todos ")
.then(function(activities){

    activities.json()
.then(function(display){
  display.todos.forEach(function (todos){
    
    planner.innerHTML+= `
    <div>
    <h2>${todos.todo}</h2>
    <p>${todos.completed}</p>
    <div>
    `
    
  });
})


.catch (function(error)
{
  console.log("item not passed to Json");
})
})
.catch(function(error)
{
  console.log("error")

})
