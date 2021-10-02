const btn = document.querySelector("#btnSubmit");


btn.addEventListener("click", (event) => {
     event.preventDefault()
    const p1 = document.querySelector("#p1").value;
    const p2 = document.querySelector("#p2").value;
    const p3 = document.querySelector("#p3").value;
    console.log(p1, p2, p3)
    if (p1 == 22 && p2 == "05:00" && p3 == 8.8) {
        return window.location.href = "/final.html";
    }
  
   return  alert("Ups!! Te equivocaste en una respuesta, verifica que escribiste correctamente")
})




