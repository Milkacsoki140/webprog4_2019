var cnt = 0;
var incrise = () => {counter++};
var decrease = () => {counter--};
var counter = () => {return cnt};

module.exports = {
    inc : incrise,
    dec : decrease,
    val : counter
};
