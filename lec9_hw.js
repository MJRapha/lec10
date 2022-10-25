class RestApi {
    // prop without a value:
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    put() {
        return `The Endpoint is : ${this.endpoint}`;
    }
}

const rest = new RestApi('/movies');
//save an object:
localStorage.setItem('r1', JSON.stringify(rest));//{"endpoint":"/movies"}


//read from disk:
let str = localStorage.getItem('r1');
let obj = JSON.parse(str);
console.log(obj.endpoint);
