const loadAllPhones = async(status) =>{

  document.getElementById("spinner").style.display = "none";

  //fetch data
  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data.data))

  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
  const data = await res.json();

  if (status){
    displayAllPhones(data.data);
    
  }else{

    displayAllPhones(data.data.slice(0,6));
  }

}

const displayAllPhones = (phones) =>{
  console.log(phones)
}


const handleShowAll = () => {
  loadAllPhones(true);
  
};





const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";

  setTimeout(() => {
    loadAllPhones();
    
  }, 3000);

};