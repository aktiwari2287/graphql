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
    const responseBody = await response.json();
    console.log(responseBody);
    
}
greeting();

