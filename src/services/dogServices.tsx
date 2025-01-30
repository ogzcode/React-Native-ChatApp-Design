const BASE_URL = "https://dog.ceo/api/breeds/image/random";

export const getDogImage = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.message;
}