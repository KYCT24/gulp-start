export const getStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName));
};

export const addToStorage = (data, storageName) => {
    let storageData = JSON.parse(localStorage.getItem(storageName));
    
    if(storageData) {
        const index = storageData.findIndex(item => item.id === data.id);
        
        if (index !== -1) {
            storageData[index].amount++;
        } else {
            storageData.push({...data, amount: 1});
        }
        
    } else {
        storageData = [{...data, amount: 1}];
    }
    localStorage.setItem(storageName, JSON.stringify(storageData));
};

export const removeFromStorage = (id, storageName) => {
    const storageData = JSON.parse(localStorage.getItem(storageName));
    
    if(!storageData) {
        return;
    }
    
    const index = storageData.findIndex(el => el.id === id);
    
    storageData.splice(index, 1);

    localStorage.setItem(storageName, JSON.stringify(storageData));
}
