export const fetchParams = async (url) => {
    const response = await fetch(url);
    let data = await response.json(); // читаем ответ в формате JSON
    return data;
}

export const createOrder = async (url,data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json()
}