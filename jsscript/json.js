// json [javascript object notation]

const user = {
    name: "Rabi",
    phone: {call : 3453434323, wahp : 3456456},
    email: "rabi@gmail.com"
}
console.log(user.name);
console.log(user.phone.wahp);





const users = [
    {
    name: "Rabi",
    phone: 3453434323,
    email: "rabi@gmail.com"
    },
    {
    name: "Ronal",
    phone: 3453434323,                        //moi2 gi name khak puthokpa
    email: "rabi@gmail.com"
    },
    {
    name: "Sarju",
    phone: 3453434323,
    email: "rabi@gmail.com"
    }
]
for (let i=0; i<users.length; i++){
    console.log(users[i].name);
}







const userss = [
    {
    name: "Rabi",
    phone: 3453434323,
    email: "rabi@gmail.com"
    },
    {
    name: "Ronal",
    phone: 3453434323,                 
    email: "ronal@gmail.com"
    },
    {
    name: "Sarju",
    phone: 3453434323,
    email: "sarju@gmail.com"
    }
]
for (let i=0; i<userss.length; i++){
    const line = `Wellcome ${userss[i].name}, ${userss[i].phone}, ${userss[i].email}`;
    console.log(line);
}



const usersss = [
    {
    name: "Rabi",
    phone: 3453434323,
    email: "rabi@gmail.com"
    },
    // {
    // name: "Ronal",
    // phone: 9087434323,                 
    // email: "ronal@gmail.com"
    // },
    // {
    // name: "Sarju",
    // phone: 1275434323,
    // email: "sarju@gmail.com"
    // }
]

const container = document.getElementById("container");
for (let i=0; i<usersss.length; i++){
    const line = `<h1> Welcome: <br> Name: ${usersss[i].name} <br> Phone: ${usersss[i].phone} <br> Email: ${usersss[i].email} </h1>`;
    container.innerHTML += line;
}



