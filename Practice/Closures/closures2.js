function calculator() {
    //add, subtract multiply divide
    var total = 0;
    total;

    // function multiply(num) {   another way to write the functions in the parent function above
    //     total = total * num;
    // }

    return {
        add: function(num) {
            total = total + num; //total is coming from parent function, we are still getting closure because it has to access the parent function calculator()
        },
        subtract: function(num) {
            total = total - num;
        },
        multiply: function(num) {
            total = total * num;
        },
        divide: function(num) {
            total = total / num;
        },
        getTotal: function() {
            return total;
        }
    };
}

var calc1 = calculator();
calc1.add(7);
calc1.multiply(343);
calc1.divide(201);
var total1 = calc1.getTotal();
total1;