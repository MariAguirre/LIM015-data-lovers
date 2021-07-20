// estas funciones son de ejemplo

const funciones = {

  sortData: (data, sortOrder)=> {
    let dataPoke= data.pokemon;
  switch (sortOrder) {
    
    case 'ascendente':
      
     dataPoke.sort((a,b)=> {
      if(a.name.toLowerCase() < b.name.toLowerCase()) 
        return -1; 
     });return dataPoke;

    case 'descendente':
      
      dataPoke.sort((a,b)=> {
        if(b.name.toLowerCase() < a.name.toLowerCase()) 
          return -1; 
       });return dataPoke;      
  
    default: return dataPoke
  
  }},

  filterDatabyName: (data,textValue)=>   
    data.filter((element)=>element.name.includes(textValue)),

  filterDataByCP:(data,numValue)=>
    data.filter((element)=>element.num.includes(numValue)),

  filterDataByType:(data,type)=>
    data.filter((element)=>element.type==type),


  computeStats: (data, typePoke) => {
    let tipoPorcen = [];
    for (let i = 0; i < data.length; i++) {
      for (let x = 0; x < data[i].type.length; x++) {
        if (data[i].type[x] === typePoke) {
          tipoPorcen.push(data[i].type[x]);
        }
      }
    }
    return ('El porcentaje del pokemon de tipo ' + typePoke + ' es: ' + ((tipoPorcen.length) / 251 * 100).toFixed(2).bold() + '%');
  },

    
}; 
  


export const anotherExample = () => {
  return 'OMG';
};




export default funciones