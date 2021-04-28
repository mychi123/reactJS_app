import React from'react'
import  './Style.css'

function NameList(){
    const names=['a','b','c']
    const namelist=names.map(name =><h2>{name}</h2>)
    const persons=[
        {
            id:1,
            name:"nguyen van a",
            age:20,
            skill:'react'
        },
        {
            id:2,
            name:"nguyen van b",
            age:21,
            skill:'react'
        },
        {
            id:3,
            name:"nguyen van c",
            age:22,
            skill:'react'
        }
    ]
    const personList = persons.map(person=><h2>
       I'm {person.name} ,  I'm  {person.age} yeal old </h2>)
    return(
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>
        
         <h2 class="bai10">
             <h3>Bài 10</h3>
             {namelist}
             {personList}
     
        </h2>
    )
}
export default NameList;