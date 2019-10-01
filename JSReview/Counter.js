class Counter{
    construction(cnt_init){
        if(cnt_init === null)
        {
            this.cnt = 0;
        }
        else{
            this.cnt = cnt_init;
        }

    }
    increase(){
        this.cnt++;
    }
    decrease(){
        this.cnt--;
    }
    counter(){
        return this.cnt;
    }
}

var cnt = 0;
var incrise = () => {counter++};
var decrease = () => {counter--};
var counter = () => {return cnt};

module.exports = Counter;