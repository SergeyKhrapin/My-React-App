const getTime = ()=> {
    const date = new Date();

    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    return time.map((el)=> {
        return el > 9 ? el : `0${el}`;
    }).join(':');
}

export default getTime;