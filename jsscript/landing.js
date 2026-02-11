const futureAIContainer = document.getElementById("futureAIContainer");
for (let i = 0; i < 4; i++) {
  futureAIContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md">
      <img 
        class="w-full aspect-5/3 object-cover"
        src="https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80" 
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold">Project AI</h1>
        <p class="text-sm text-justify text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque optio quas ad rem labore debitis voluptatum veritatis quibusdam ducimus!</p>
      </div>
    </div>
  `;
  
}


// response == arrXCard
const arrXCard = ["Tech Orbit", "DiginetX", "Technologia", "NexusEvent", "Uralink", "SalaiJX", "IT hub", "NeuroX", "Quantara", "Project AI"];
const arrXPara = ["rei faijf ijfoa fidoa fdsjfoa ifjaojf jfoai",
  "fds er flegl gltjlw lt alrjel ltlerif leoijfljtoeojf",
  "Tje name of the my schol is red schiil fajjkei jf",
  "rei faijf ijfoa fidoa fdsjfoa ifjaojf jfoi",
  "fds er flegl gltjlw lt alrjel ltlerif leoijfljtoeojf",
  "Tje name of the my schol is red schiil fajjkei jf",
  "rei faijf ijfoa fidoa fdsjfoa ifjaojf jfoai",
  "fds er flegl gltjlw lt alrjel ltlerif leoijfljtoeojf",
  "Tje name of the my schol is red schiil fajjkei jf",
  "rei faijf ijfoa fidoa fdsjfoa ifjaojf jfoi",
]
const arrXImg = [
  "https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg?semt=ais_hybrid&w=740&q=80",
  "https://royceindia.com/cdn/shop/files/ChocolateBarBlack_1.webp?v=1705398052&width=1080",  
  "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/474531165_122219413994071381_5129735367266395090_n.jpg?stp=c0.67.653.653a_dst-jpg_s565x565_tt6&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=uk2QEEB86jMQ7kNvwGLsuFl&_nc_oc=AdkLt1z-P9_twpfKyNtJmo9u5yFS1ygdEGVvnsYgQ5gWiyhkh36R6_jbm8GGXjC9Oj5rHGUR1KdCgjVvjx6LFYIC&_nc_zt=23&_nc_ht=scontent.fshl2-1.fna&_nc_gid=GPIfOWbbAzASYDAeN0IOYg&oh=00_Afu9POvaqTAgqmL253BrseEufgH6h4mYSChELoNNr13H9w&oe=6984C391",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGqd4ZskQbsM7vILpprp-8PznB1j3c4cWXQ&s",
  "https://wiki.d-addicts.com/images/thumb/6/62/Nancy.jpg/360px-Nancy.jpg",
  "https://i1.pickpik.com/photos/516/857/262/smile-profile-face-male-preview.jpg",
  "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-Zoom.jpg",
  "https://theportrait.company/wp-content/uploads/2022/06/Corporate-Headshot-for-a-LinkedIn-Profile.jpg",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  "https://i1.pickpik.com/photos/516/857/262/smile-profile-face-male-preview.jpg",
]

const scrollXCardContainer = document.getElementById("scrollXCardContainer");
for (let i = 0; i < arrXCard.length; i++) {
  scrollXCardContainer.innerHTML += `
    <div class="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-md min-w-80">
      <img 
        class="w-full aspect-5/3 object-cover"
        src="${arrXImg[i]}" 
        alt=""
      >
      <div class="p-5">
        <h1 class="font-bold text-lg">${arrXCard[i]}</h1>
        <p> ${arrXPara[i]} </p>
      </div>
    </div>
  `;
}

