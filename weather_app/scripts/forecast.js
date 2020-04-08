const key='nOQGqOPoP38TqUxe42BtUSXBQJU6U5gQ';
const getwhether=async(id)=>{
    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    //const code=id;
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base+ query);
    const data= await response.json();
    return data[0];

};
const getCity=async(city) =>{
    const base="http://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${key}&q=${city}`;

    const response=await fetch(base+ query);
    const data= await response.json();
    return data[0];
};

/*getCity('Dhaka').then(data=> {
    return getwhether(data.Key);
}).then(data=>{
    console.log(data);
}).catch(err => console.log(err.message));
*/
            
