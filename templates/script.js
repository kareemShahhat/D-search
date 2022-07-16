/*
async function get(){
    const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSMClb5uTCvd15vY0WwitkgxtP0kaY-k&cx=b9ce6dfe1ad8f1c52&q=facebook')
    const data = await response.json();
    // console.log(data);
    console.log(data.items[9].link)
}

get()
*/

let content = document.getElementById("content");
let btn = document.getElementById("btn");
btn.onclick =function(){
  let text_box = document.getElementById("texts").value;

  async function get(){
    const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSMClb5uTCvd15vY0WwitkgxtP0kaY-k&cx=b9ce6dfe1ad8f1c52&q='+text_box)
    const data = await response.json();
    console.log(data);
    /*console.log(data);
    console.log(data.items[9].link)*/
    /*for (let i = 0; i < data.items.length; i++) {
      content.append( 
        document.innerText="---------| "+"link : " +data.items[i].link + " |----------| " ,
        document.innerHTML= data.items[i].title + "<br>"
        
      )*/
      let count = 1
        content.innerHTML="";
      for (let i = 0; i < data.items.length; i++) {
        
      /* content.append( 
          // document.innerText= "<h3> link : " , data.items[i].link , "\n" ,
          // document.innerHTML= data.items[i].title , "<br>",
          content.insertAdjacentHTML("afterend","<div class='itm'> <h3> <a href=" + data.items[i].link +"'>" + data.items[i].link+ "</a></h3>"),
          content.insertAdjacentHTML("afterend","<h3>" + data.items[i].title +"</h3></div>")
          
      )*/
        
        content.innerHTML += "<div class='itm wow fadeInUp'><span>"+count+"</span> <h3> <a href=" + data.items[i].link +" target='_blank'>" + data.items[i].link+ "</a></h3> <h3> "+ data.items[i].title +"</h3> </div>",
        // content.innerHTML += "<h3>" + data.items[i].title +"</h3> </div>"
        count++;
      console.log(data.items.length);
    }

    }

    get()
}












// https://www.googleapis.com/customsearch/v1?key={YOUR_API_KEY}&cx={CUSTOM_SEARCH_ENGINE_ID}&q={KEYWORD}

/*
const myInitCallback = function() {
    if (document.readyState == 'complete') {
      // Document is ready when Search Element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render(
          {
            div: "test",
            tag: 'search'
           });
    } else {
      // Document is not ready yet, when Search Element is initialized.
      google.setOnLoadCallback(function() {
         // Render an element with both search box and search results in div with id 'test'.
          google.search.cse.element.render(
              {
                div: "test",
                tag: 'search'
              });
      }, true);
    }
  };
  
  // Insert it before the Search Element code snippet so the global properties like parsetags and callback
  // are available when cse.js runs.
  window.__gcse = {
    parsetags: 'explicit',
    initializationCallback: myInitCallback
  };

//   window.__gcse['searchCallbacks']['web']['starting'] = function(gname, query) {...};

  const myWebSearchStartingCallback = (gname, query) => {
    const hour = new Date().getHours();
    return query + (hour < 12 ? ' morning' : ' afternoon');
  };
  window.myImageSearchStartingCallbackName = myWebSearchStartingCallback;

  window.__gcse || (window.__gcse = {});
  window.__gcse.searchCallbacks = {
    image: {
      starting: 'myImageSearchStartingCallbackName',
    },
    web: {
      starting: myWebSearchStartingCallback,
    },
  };


*/





