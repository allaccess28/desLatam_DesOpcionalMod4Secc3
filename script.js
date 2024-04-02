const url = 'https://jsonplaceholder.typicode.com/photos';

const datosApi = async () => {
    try{
        const response = await fetch(url);
        const datos = await response.json();
    datos.forEach(element => {
        if (element.id <=20) {
            console.log(`${element.id}: ${element.title}.`);
        }
    });
    }catch (error){
        console.log(error)
    }  
};
datosApi();
const mensaje = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve('Informacion Enviada');
        },3000);
    })
}

const mostarMsje = async () =>{
    const msje = await mensaje();
    console.log(msje);
}
mostarMsje();



