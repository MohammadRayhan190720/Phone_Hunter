const loadAllPhones = async() =>{

  document.getElementById("spinner").style.display = "none";

  //fetch data
  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data.data))

  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
  const data = await res.json();
  console.log(data.data);
}





const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";

  setTimeout(() => {
    loadAllPhones();
    
  }, 3000);

};