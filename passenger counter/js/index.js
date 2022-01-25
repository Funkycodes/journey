  let count = 0;
  let saveEl = document.getElementById("save-el");
  // let saveEl = document.getElementById("save-el");
  function incrementCount(){
    count++;
    console.log(count);
    document.getElementById("counter").textContent=count;
  }
  function reset(){
    count = 0;
    document.getElementById("counter").textContent=count;
  }
  function save(){
    let prev = count + "-" ;
    saveEl.textContent += prev;
    reset();
  }
