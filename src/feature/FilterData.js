const filterData = (data,role) => {
    const arr = [];
    for (let index = 0; index < data.length; index++) {
        if(data[index][2]=== role) {
            arr.push(data[index]);
        }
    }
    return arr;
}

export default filterData ;