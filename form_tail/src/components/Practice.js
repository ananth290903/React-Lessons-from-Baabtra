const people = [
  {
    Name: "Ananthamoorthy",
    City: "Kochi",
    Age: 22
  },
  {
    Name: "Meera",
    City: "Chennai",
    Age: 25
  }
]

people.map((element,index)=>{
    Object.entries(element).forEach(([key,value])=>
    {
        console.log(`Key :${key} ,Value:${value}`);
        })
})