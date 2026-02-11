const user = [
    {
    name: "Rabi",
    phone: 3453434323,
    email: "rabi@gmail.com",
    role: "admin",
    bal: 1200
    },
    {
    name: "Ronal",
    phone: 3453434323,                 
    email: "ronal@gmail.com",
    role: "user",
    bal: 500
    },
    {
    name: "Sarju",
    phone: 3453434323,
    email: "sarju@gmail.com",
    role: "user",
    bal: 1223
    }
]

const container = document.getElementById("container");
for (let i=0; i<user.length; i++){
    container.innerHTML += `
    <h1 class="text-center font-semibold text-3xl ${user[i].role == "admin" ? "text-black" : "text-green-500"}"> 
    
    Welcome ${user[i].name}, phone ${user[i].phone}, ${user[i].bal} 
    <span class="${user[i].bal < 1000 ? "text-red-500" : "text-violet-500"}"> ${user[i].bal} </span>
    </h1>
    `;
}