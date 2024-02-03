const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
  
const hiddenelement=document.querySelectorAll('.hinder')
hiddenelement.forEach((el)=>observer.observe(el))

const enhance2=id=>{
  const element = document.getElementsByClassName(id)
  console.log(element)
  const ele=Array.from(element)
  ele.forEach(elemen=>{
  //  console.log(elemen)
  text=elemen.innerText.split("")
  elemen.innerText=""
   text.forEach(letter => {
       const span=document.createElement("div")
       span.className="letter2"
       span.innerText=letter

       elemen.appendChild(span)
       
   });

})
}

// enhance2("hg") 

let blob=document.getElementById("blob")
// console.log(blob)
window.onpointermove=e=>{
    const {clientX,clientY}=e
    blob.animate({
        left:`${clientX}px`,
        top:`${clientY}px`},{duration:1000,fill:"forwards"})
}