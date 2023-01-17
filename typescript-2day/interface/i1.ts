// function printLabel(labeledObj: {size: number, label: string }) {
//     console.log(labeledObj.label);
//     console.log(labeledObj.size);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

//////////////////////////////////////////////////////

interface LabeledValue {
    label: string;
    size: number;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
    console.log(labeledObj.size);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);