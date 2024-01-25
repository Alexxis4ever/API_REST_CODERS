const URL = "http://localhost:4000/coders";

/* 2. Obtener datos (coders) desde rest API metodo HTTP : (GET) */
export const getCoders = async () => {
    try {
        const result = await fetch(URL)
        const coders = await result.json()
        return coders;
    } catch (error) {
        
    }
}

/* 11. Insertar nuevo coder en REST API - Metodo HTTP : (POST) */

export const newCoder = coder => {
    // console.log(coder);
    try {
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(coder),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
