const loadAllPhones = async(status,searchText) =>{

  document.getElementById("spinner").style.display = "none";

  //fetch data
  // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
  // .then(res => res.json())
  // .then(data => console.log(data.data))

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText?searchText: "iphone"}`
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
    
    const {image,brand,phone_name,slug} = phone ;
  const div = document.createElement("div");
  div.classList = "card bg-base-100";
  div.innerHTML = `
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone_name}</h2>
    <p>${brand}</p>
    <div class="card-actions">
      <button onclick = "showDatails('${slug}')" class="btn btn-primary">Show Datails</button>
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

const loadDatails =async (slug) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
  const data = await res.json();
  console.log(data.data);
  
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = `
   <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold"></h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  `;

    my_modal_5.showModal();

  
 
}




loadAllPhones(false, "iphone");



