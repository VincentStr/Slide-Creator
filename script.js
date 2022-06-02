let pageCoutner = 0;

let container = document.createElement("div")

const setupFunc = () =>{
  pageCoutner = 0;
  document.getElementById("inputField").innerHTML = "";
  const numPage = document.getElementById("numPage").value;
    for(let i = 1; i <= numPage; i++){
        pageCoutner ++;
        createItem();
    }
    
  //  document.getElementById("inputField").innerHTML = container
}

const createItem = () =>{
  const divItem = document.createElement('div')
  divItem.setAttribute("class", "grid-itemPage")
  divItem.setAttribute("id", "itemPage" + pageCoutner)

  const itemNum = document.createElement('h2');
  itemNum.innerHTML = pageCoutner

 
  const inputURL = document.createElement('input');
  inputURL.setAttribute("type", "text");
  inputURL.setAttribute("placeholder", "URL");
  inputURL.setAttribute("id", "URL" + pageCoutner )

  const inputALT = document.createElement('input');
  inputALT.setAttribute("type", "text")
  inputALT.setAttribute("placeholder", "ALT")
  inputALT.setAttribute("id", "ALT" + pageCoutner)


  divItem.append(itemNum,inputURL,inputALT)
  document.getElementById("inputField").append(divItem)

}

const removePage = () =>{
  try{
    const removeItem = document.getElementById("itemPage" + pageCoutner)
    document.getElementById("inputField").removeChild(removeItem)
    pageCoutner--;
    document.getElementById("numPage").value = pageCoutner
  } catch(error){
    alert("No Item To Remove!")
  }
}
const addPage = () =>{
   pageCoutner++;
   createItem()
   document.getElementById("numPage").value = pageCoutner

}
const createFunc = () =>{
    let pages = ""
    for(let i = 1; i <= pageCoutner; i++){
      let alt = document.getElementById("ALT" + i).value
      let url = document.getElementById("URL" + i).value

      pages += `<div class="mySlides fade">
      <div class="numbertext">`+i + "/" + pageCoutner + `</div>
      <img src="`+url +`"  alt=" `+alt +`" style="width: 100%;" />
      </div>`


    }

    let ins = `<div class="slideshow-container"><!-- Full-width images with number and caption text -->
 
    `+ pages + `
    
    <!-- Next and previous buttons --> <a class="prev" onclick="plusSlides(-1)">❮</a> <a class="next" onclick="plusSlides(1)">❯</a></div>
    <br /> <!-- The dots/circles -->
    <div style="text-align: center;"></div>
    <style><!--
    * {box-sizing:border-box}
      
      /* Slideshow container */
      .slideshow-container {
        max-width: 1400px;
        position: relative;
        margin: auto;

     
      }
      
      /* Hide the images by default */
      .slideshow-container .mySlides {
        display: none;
     
      }
      
      /* Next & previous buttons */
      .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 10px;
        color: rgb(233, 233, 233);
        font-weight: bold;
        font-size: 38px;
        transition: 0.6s ease;
        user-select: none;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        margin: 4px;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(20px);
      }
      
      /* Position the "next button" to the right */
      .next {
        right: 0;
      }
      
      /* On hover, add a black background color with a little bit see-through */
      .prev:hover, .next:hover {
        background-color: rgba(104, 104, 104, 0.8);
      }
      button{
      outline:none;
      }
      /* Caption text */
      
      /* Number text (1/3 etc) */
      .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(20px);
        font-family:Arial, Helvetica, sans-serif
      }
      
    
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1s;
        animation-name: fade;
        animation-duration: 1s;
      }
      
      @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
      }
      
      @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
      }
    --></style>
    <script>// <![CDATA[
    var slideIndex = 1;
      showSlides(slideIndex);
      
    
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
      }
    // ]]></script>`

    
    navigator.clipboard.writeText(ins);
}