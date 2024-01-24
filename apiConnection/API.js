const URL = "http://localhost:4000/coders";

/* 2. Obtener datos (coders) desde rest API - GET */
export const getCoders = async () => {
    try {
        const result = await fetch(URL)
        const coders = await result.json()
        return coders;
    } catch (error) {
        
    }
}
