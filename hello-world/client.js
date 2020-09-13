/*
    This is a client to fetch the graphQL data
*/
async function greeting() {
    const response = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            query{
                greeting
            }
            `
        })
    
    });
    const {data} = await response.json();
    return data;
}
greeting().then(({greeting})=>{
    console.log(greeting);    
});

