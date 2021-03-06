var table = document.getElementById("table")
function app(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        loop(detail)
    })
}
var i;
    function loop(detail){
            for(i = 0; i < 10; i++){
                var tr = document.createElement("tr")
                var td1 = document.createElement("td")
                var id = document.createTextNode(detail[i].id)
                    td1.appendChild(id)
                    tr.appendChild(td1)
                
                var td2 = document.createElement("td")
                var title = document.createTextNode(detail[i].title)
                    td2.appendChild(title)
                    tr.appendChild(td2)
                
                var td3 = document.createElement("td")
                var body = document.createTextNode(detail[i].body)
                    td3.appendChild(body)
                    tr.appendChild(td3)
                
                var td4 = document.createElement("td")
                var button1 = document.createElement("button")
                    button1.className = "btn btn-lg btn-primary"
                    button1.innerText = "Comments"
                    button1.onclick = comment(i)
                        td4.appendChild(button1)
                        tr.appendChild(td4)
                
                table.appendChild(tr)
            }
        }    
        
        function comment(i){
            return function(){
                var a = i+1
                fetch("https://jsonplaceholder.typicode.com/comments?postId=" + a)
                .then(function(commentData){
                    return commentData.json()
                })
                .then(function(boddy){
                    console.log(boddy)

                    // getting comments in modal wale function ko call krwaya he
                    getComments(boddy)
                })
                
                // bootstrap se copy kia he
                $(document).ready(function(){
                    $(".btn").click(function(){
                        $("#myModal").modal('show');
                    });
                });
            }
        }
app()

// getting comments in modal
function getComments(boddy){
    var para = document.getElementById("para")
    para.innerText = ""
        for(var i = 0; i < boddy.length; i++){
            var p = document.createElement("p")
            var paraBody = document.createTextNode(boddy[i].body)
            p.appendChild(paraBody)
            para.appendChild(p)
        }
}

// Pagination Adding
function pegi2(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
    for(i = 10; i < 20; i++){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var id = document.createTextNode(detail[i].id)
            td1.appendChild(id)
            tr.appendChild(td1)
        
        var td2 = document.createElement("td")
        var title = document.createTextNode(detail[i].title)
            td2.appendChild(title)
            tr.appendChild(td2)
        
        var td3 = document.createElement("td")
        var body = document.createTextNode(detail[i].body)
            td3.appendChild(body)
            tr.appendChild(td3)
        
        var td4 = document.createElement("td")
        var button1 = document.createElement("button")
            button1.className = "btn btn-primary"
            button1.innerText = "Comments"
            button1.onclick = comment(i)
                td4.appendChild(button1)
                tr.appendChild(td4)
        
        table.appendChild(tr)
    }
    })
}

function pegi3(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
    for(i = 20; i < 30; i++){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var id = document.createTextNode(detail[i].id)
            td1.appendChild(id)
            tr.appendChild(td1)
        
        var td2 = document.createElement("td")
        var title = document.createTextNode(detail[i].title)
            td2.appendChild(title)
            tr.appendChild(td2)
        
        var td3 = document.createElement("td")
        var body = document.createTextNode(detail[i].body)
            td3.appendChild(body)
            tr.appendChild(td3)
        
        var td4 = document.createElement("td")
        var button1 = document.createElement("button")
            button1.className = "btn btn-primary"
            button1.innerText = "Comments"
            button1.onclick = comment(i)
                td4.appendChild(button1)
                tr.appendChild(td4)
        
        table.appendChild(tr)
    }
    })
}

function pegi4(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
    for(i = 30; i < 40; i++){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var id = document.createTextNode(detail[i].id)
            td1.appendChild(id)
            tr.appendChild(td1)
        
        var td2 = document.createElement("td")
        var title = document.createTextNode(detail[i].title)
            td2.appendChild(title)
            tr.appendChild(td2)
        
        var td3 = document.createElement("td")
        var body = document.createTextNode(detail[i].body)
            td3.appendChild(body)
            tr.appendChild(td3)
        
        var td4 = document.createElement("td")
        var button1 = document.createElement("button")
            button1.className = "btn btn-primary"
            button1.innerText = "Comments"
            button1.onclick = comment(i)
                td4.appendChild(button1)
                tr.appendChild(td4)
        
        table.appendChild(tr)
    }
    })
}

function pegi5(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
        for(i = 40; i < 50; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }
        })  
}


function pegi6(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
        for(i = 50; i < 60; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }        
    })
}

function pegi7(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        table.innerText = ""
        for(i = 60; i < 70; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }  
    })
}

function pegi8(){
    table.innerText = ""
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        for(i = 70; i < 80; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }      
    })
}

function pegi9(){
    table.innerText = ""
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        for(i = 80; i < 90; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }        
    })
}

function pegi10(){
    table.innerText = ""
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            return data.json()
    })

    .then(function(detail){
        for(i = 90; i < 100; i++){
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var id = document.createTextNode(detail[i].id)
                td1.appendChild(id)
                tr.appendChild(td1)
            
            var td2 = document.createElement("td")
            var title = document.createTextNode(detail[i].title)
                td2.appendChild(title)
                tr.appendChild(td2)
            
            var td3 = document.createElement("td")
            var body = document.createTextNode(detail[i].body)
                td3.appendChild(body)
                tr.appendChild(td3)
            
            var td4 = document.createElement("td")
            var button1 = document.createElement("button")
                button1.className = "btn btn-primary"
                button1.innerText = "Comments"
                button1.onclick = comment(i)
                    td4.appendChild(button1)
                    tr.appendChild(td4)
            
            table.appendChild(tr)
        }        
    })
}
