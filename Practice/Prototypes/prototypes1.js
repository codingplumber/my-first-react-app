function Dance(steps, beat, name) {
    this.steps = steps; //unique for every dance
    this.beat = beat;
    this.name = name;   
}

Dance.prototype.executeSteps = function() { //identical for every dance
        console.log('The ' + this.name + ' goes like ' + this.steps);  //context updates this for whoever invokes it
    }

var quickStep = new Dance('quickly', '4/4', 'Quickstep');
quickStep.executeSteps();  

var arr = new Array();
var arr2 = [];

Array.prototype.sum = function() {
    var array = this;
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = numArr.sum();
sum;

var strArray = ['abc', 'def', 'hij'];
var cat = strArray.sum();
cat;

