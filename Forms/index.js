    // when submit is clicked, show the value for each form field
    let Submitbutton = document.getElementById("Submitbutton");
    Submitbutton.addEventListener("click", function (event) {
        // console.log(forexample)
        let x = document.getElementById("name");
        console.log(x)
        console.log(x.value)
        // console.log("name");
        let z = document.getElementById("email");
        console.log(z)
        console.log(z.value)
        //console.log("email");
        let e = document.getElementById("age")
        console.log(e)
        console.log(e.value)
        //console.log("age");
        let y = document.getElementById("date");
        console.log(y)
        console.log(y.value)
        //console.log("date")
        let i = document.getElementById("phone");
        console.log(i)
        console.log(i.value)
        //console.log("phone");
        let v = document.getElementById("bio");
        console.log(v)
        console.log(v.value)
        //console.log("bio");
        let r = document.getElementById("password");
        console.log(r)
        console.log(r.value)
        //console.log("password");
        event.preventDefault();
        
    });
     document.getElementById("div").style.border = "thick solid #0000FF";
     