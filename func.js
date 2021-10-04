//Function Declaration 
function addPaintAndSupps(totalCost,callback){
    let cost = prompt("Enter the cost for the paint and supplies?");
    cost = parseFloat(cost);
    if (cost > 100)
        cost*=1.1;
    console.log(cost);
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
}
//Function Expression 
const addFloorCoverings = function (totalCost,callback){
    let cost = prompt("Enter the cost for the Furniture?");
    cost = parseFloat(cost);
    if (cost < 500){
        costOne = cost * .15;
        cost = cost - costOne;
    console.log(cost);
    let furnArea = document.querySelector(".floorCoverings");
    furnArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
    }
    
    else{console.log(cost);
        let furnArea = document.querySelector(".floorCoverings");
        furnArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;
        callback(totalCost + cost);
        return (totalCost + cost);
    }
}
//Arrow funciton 
const addFurniture = (totalCost,callback) => {
    let cost = prompt("Enter the cost for the Furniture?");
    cost = parseFloat(cost);
    if (cost < 500){
        costOne = cost * .10;
        cost = cost - costOne;
    console.log(cost);
    let furnArea = document.querySelector(".furniture");
    furnArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    callback(totalCost + cost);
    return (totalCost + cost);
    }
    else{console.log(cost);
        let furnArea = document.querySelector(".furniture");
        furnArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
        callback(totalCost + cost);
        return (totalCost + cost);
    }
}
//Callback Function 
const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML= `Total $ ${cost.toFixed(2)}`
}
let totalCost = 0;
totalCost = addPaintAndSupps(totalCost, updateTotals);
console.log(totalCost);
totalCost = addFloorCoverings(totalCost,updateTotals);
console.log(totalCost);
totalCost = addFurniture(totalCost,updateTotals);
console.log(totalCost);