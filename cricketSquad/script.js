let squads=[
    {
        name:"Rohith Sharma",
        role:"Batsman-captain",
        pic:"./images/rohith.jpg"
    },
  
    {
        name:"Virat Kohli",
        role:"Batsman",
        pic:"./images/kohli.jpg"
    },
    {
        name:"Shreyas Iyer",
        role:"Batsman",
        pic:"./images/shreyas.jpg"
    },
    {
        name:"KL Rahul",
        role:"WK-Batsman",
        pic:"./images/rahul.jpg"
    },
    {
        name:"Hardik Pandya",
        role:"Allrounder",
        pic:"./images/pandya.jpg"
    },

    {
        name:"Ravindra Jadeja",
        role:"Allrounder",
        pic:"./images/jadeja.jpg"
    },  {
        name:"Shubman Gill",
        role:"Batsman-VC",
        pic:"./images/gill.jpg"
    },
    {
        name:"Mohammed Shami",
        role:"Bowler",
        pic:"./images/shami.jpg"
    }, {
        name:"Axar Patel",
        role:"Allrounder",
        pic:"./images/axar.jpg"
    },
    {
        name:"Varun Chakravarthy",
        role:"Bowler",
        pic:"./images/varun.jpg"
    },
    {
        name:"Kuldeep yadav",
        role:"Bowler",
        pic:"./images/kuldeep.jpg"
    },
    {
        name:"Harshith Rana",
        role:"Bowler",
        pic:"./images/harshith.jpg"
    },
    {
        name:"Rishabh Pant",
        role:"WK-Batsman",
        pic:"./images/pant.jpg"
    },
    {
        name:"Arshdeep Singh",
        role:"Bowler",
        pic:"./images/arshdeep.jpg"
    },
    {
        name:"Washington Sundar",
        role:"Bowler",
        pic:"./images/sundar.jpg"
    },
]
squads.map(({name,role,pic})=>{
let players=document.getElementById("players")
players.innerHTML+=`
<div class="squad">
<div class="player-image"><img src="${pic}"></div>
<div class="player-name">${name}</div>
<div class="player-role">${role}</div>
</div>
`
})