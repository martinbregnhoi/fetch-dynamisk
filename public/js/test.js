
//let numbers = [10,20,15,55,33]
async function hentData(){
    const response = await fetch("https://kea-alt-del.dk/t7/api/products");
    const produkter = await response.json();
    visTal(produkter);
    console.log(produkter);
    
}
function visTal(produkter){
produkter.forEach(produkt => {
    const temp = document.querySelector("template").cloneNode(true).content;

temp.querySelector("li").textContent = produkt.productdisplayname +", "+produkt.brandname;
    document.querySelector("main").appendChild(temp);
});
}
hentData();