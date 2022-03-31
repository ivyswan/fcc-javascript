const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}

console.log(countOnline(users));
//countOnline() should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it
//countOnline() should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it