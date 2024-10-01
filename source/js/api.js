export const fetchParams = async (url) => {
    const response = await fetch(url);
    let data = await response.json(); // читаем ответ в формате JSON
    return data;
}
