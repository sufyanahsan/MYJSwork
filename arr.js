let arr = [
  {
    color: "purple",
    type: "minivan",
    registration: "2017 - 01 - 03",
    capacity: 7,
  },
  {
    color: "white",
    type: "station wagon",
    registration: "2018 - 03 - 03",
    capacity: 5,
  },
  {
    color: "green",
    type: "station wagon",
    registration: "2017 - 07 - 08",
    capacity: 5,
  },
  {
    color: "blue",
    type: "station wagon",
    registration: "2019 - 01 - 05",
    capacity: 3,
  },
  {
    color: "orange",
    type: "station wagon",
    registration: "2019 - 05 - 07",
    capacity: 5,
  },
];

function makearr(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += 
    `<card>
    <hr/>
        ${"Color" + " : " + arg[i].color} 
        <br/> 
        <br/> 
        ${"type" + " : " + arg[i].type} 
        <br/> 
        <br/> 
        ${"registration" + " : " + arg[i].registration} 
        <br/> 
        <br/> 
        ${"capacity" + " : " + arg[i].capacity} 
        <br/> 
        <br/> 

        </card>`;
  }
  
  return items;
}
document.querySelector("main").innerHTML = `
<ol>
${makearr(arr)}
</ol>
`;
