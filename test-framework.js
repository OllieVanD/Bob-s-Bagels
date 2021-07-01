const assertEquals = (val1,val2) => {
    if (val1.length !== val2.length) {
        return false
    } for (let i = 0; i<val2.length; i++){
        if (val1[i] !== val2[i]){
            return false
        }
    } return true;
};
module.exports = assertEquals;