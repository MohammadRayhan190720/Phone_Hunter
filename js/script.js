const loadAllPhones = async(status,searchText) =>{

  document.getElementById("spinner").style.display = "none";

  //fetch data
  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data.data))

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=iphone`
  );
  const data = await res.json();
  console.log(data)

  if (status){
    displayAllPhones(data.data);
    
  }else{

    displayAllPhones(data.data.slice(0,6));
  }

}

const displayAllPhones = (phones) =>{
  const phonesContainer = document.getElementById("phones-container")

  phones.forEach(phone => {
  const div = document.createElement("div");
  div.classList = "card bg-base-100";
  div.innerHTML = `
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>

  `;
  phonesContainer.appendChild(div);
  
});
  
    
  }
  
  
    
  

    





const handleShowAll = () => {
  loadAllPhones(true);
  
};





const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";

  const searchText = document.getElementById("search-box").value;

  setTimeout(() => {
    loadAllPhones(false,searchText);
    
  }, 3000);

};

loadAllPhones(false, "iphone");

