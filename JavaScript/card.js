const user = [
    {
    name: "Rabi",
    phone: 3453434323,
    email: "rabi@gmail.com",
    },
    {
    name: "Ronal",
    phone: 3453434323,                 
    email: "ronal@gmail.com",
    },
    {
    name: "Sarju",
    phone: 3453434323,
    email: "sarju@gmail.com",
    }
]

const card = document.getElementById("card");
for (let i=0; i<user.length; i++){
    card.innerHTML +=`
    <div style ="background-color:red; width:250px; padding-top:9px; padding-bottom:9px; border-radius: 9px;">
        <div style = "display:flex; flex-direction: column; align-items: center; gap:5px;">
            <h3 style= "margin:0;">Name: ${user[i].name}</h3>
            <h3 style= "margin:0;"> Phone: ${user[i].phone} </h3>
            <h3 style= "margin:0;"> Email: ${user[i].email} </h3>
        </div>
    </div>
    `;
}