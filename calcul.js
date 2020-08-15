//🔴🔴🔴🔴🔴Def
const output = document.getElementById("output");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btndot = document.getElementById("dot");
const btndiv1 = document.getElementById("(");
const btndiv2 = document.getElementById(")");

let outputArray = [];
let operation = [];
let clickTimes = 0;
const operationProcess = document.querySelector(".operationProcess");
const operationText = operation.toString(); //"1","+","2","+"
const operationTextCut = operationText.substr(0, operationText.length - 1);
//"1","+","2"
const operationResultText = operationTextCut.replace(/,/gi, "");
const btnPlus = document.getElementById("+");
const btnMinus = document.getElementById("-");
const btnMulti = document.getElementById("*");
const btnDivi = document.getElementById("/");
const btnEqual = document.getElementById("=");
const btnC = document.getElementById("C");

//🔴🔴🔴🔴🔴(1)Show numbers
function showOutput() {
  btn1.addEventListener("click", handleBtn1);
  btn2.addEventListener("click", handleBtn2);
  btn3.addEventListener("click", handleBtn3);
  btn4.addEventListener("click", handleBtn4);
  btn5.addEventListener("click", handleBtn5);
  btn6.addEventListener("click", handleBtn6);
  btn7.addEventListener("click", handleBtn7);
  btn8.addEventListener("click", handleBtn8);
  btn9.addEventListener("click", handleBtn9);
  btn0.addEventListener("click", handleBtn0);
  btndot.addEventListener("click", handleBtndot);
  btndiv1.addEventListener("click", handleBtndiv1);
  btndiv2.addEventListener("click", handleBtndiv2);
}

function handleBtn1() {
  outputArray.push("1");
  printOutput();
  operation.push("1");
  console.log(operation);
}

function handleBtn2() {
  outputArray.push("2");
  printOutput();
  operation.push("2");
  console.log(operation);
}

function handleBtn3() {
  outputArray.push("3");
  printOutput();
  operation.push("3");
  console.log(operation);
}

function handleBtn4() {
  outputArray.push("4");
  printOutput();
  operation.push("4");
  console.log(operation);
}

function handleBtn5() {
  outputArray.push("5");
  printOutput();
  operation.push("5");
  console.log(operation);
}
function handleBtn6() {
  outputArray.push("6");
  printOutput();
  operation.push("6");
  console.log(operation);
}
function handleBtn7() {
  outputArray.push("7");
  printOutput();
  operation.push("7");
  console.log(operation);
}
function handleBtn8() {
  outputArray.push("8");
  printOutput();
  operation.push("8");
  console.log(operation);
}
function handleBtn9() {
  outputArray.push("9");
  printOutput();
  operation.push("9");
  console.log(operation);
}
function handleBtn0() {
  outputArray.push("0");
  printOutput();
  operation.push("0");
  console.log(operation);
}

function handleBtndot() {
  outputArray.push(".");
  printOutput();
  operation.push(".");
  console.log(operation);
}

function handleBtndiv1() {
  outputArray.push("(");
  printOutput();
  operation.push("(");
  console.log(operation);
}

function handleBtndiv2() {
  outputArray.push(")");
  printOutput();
  operation.push(")");
  console.log(operation);
}

function printOutput() {
  if (outputArray[1] == null) {
    output.innerText = outputArray[0];
  } else if (outputArray[2] == null) {
    output.innerText = outputArray[0] + outputArray[1];
  } else if (outputArray[3] == null) {
    output.innerText = outputArray[0] + outputArray[1] + outputArray[2];
  } else if (outputArray[4] == null) {
    output.innerText =
      outputArray[0] + outputArray[1] + outputArray[2] + outputArray[3];
  } else if (outputArray[5] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4];
  } else if (outputArray[6] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5];
  } else if (outputArray[7] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6];
  } else if (outputArray[8] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6] +
      outputArray[7];
  } else if (outputArray[9] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6] +
      outputArray[7] +
      outputArray[8];
  } else if (outputArray[10] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6] +
      outputArray[7] +
      outputArray[8] +
      outputArray[9];
  } else if (outputArray[11] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6] +
      outputArray[7] +
      outputArray[8] +
      outputArray[9] +
      outputArray[10];
  } else if (outputArray[12] == null) {
    output.innerText =
      outputArray[0] +
      outputArray[1] +
      outputArray[2] +
      outputArray[3] +
      outputArray[4] +
      outputArray[5] +
      outputArray[6] +
      outputArray[7] +
      outputArray[8] +
      outputArray[9] +
      outputArray[10] +
      outputArray[11];
  }
}

//🔴🔴🔴🔴🔴(2)+ addition
function addition() {
  btnPlus.addEventListener("click", handleAddition);
  btnPlus.addEventListener("click", clickManyAdd);
}

function clickManyAdd() {
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  //"1","+","2"
  const operationResultText = operationTextCut.replace(/,/gi, "");
  console.log(operationResultText.substr(operationResultText.length - 1));
  if (operationResultText.substr(operationResultText.length - 1) === "+") {
    output.innerText = "Error : please input + only once at a time";
  }
}

function handleAddition() {
  operation.push("+");
  outputArray = [];
  const operationText = operation.toString(); //"1","+","2","+"
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  //"1","+","2"
  const operationResultText = operationTextCut.replace(/,/gi, "");
  //"1+2"
  const operationResultMath = eval(operationResultText); //3 : calculate the text into math
  output.innerText = operationResultMath;
  operationProcess.innerText = "=" + operationResultText + "+";
}

//🔴🔴🔴🔴🔴(3)- subtraction
function subtraction() {
  btnMinus.addEventListener("click", handleSubtraction);
  btnMinus.addEventListener("click", clickManySub);
}

function clickManySub() {
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  //"1","+","2"
  const operationResultText = operationTextCut.replace(/,/gi, "");
  console.log(operationResultText.substr(operationResultText.length - 1));
  if (operationResultText.substr(operationResultText.length - 1) === "-") {
    output.innerText = "Error : please input - only once at a time";
  }
}

function handleSubtraction() {
  operation.push("-");
  outputArray = [];
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  const operationResultText = operationTextCut.replace(/,/gi, "");
  const operationResultMath = eval(operationResultText);
  output.innerText = operationResultMath;
  console.log(operationResultText);
  operationProcess.innerText = "=" + operationResultText + "-";
}

//🔴🔴🔴🔴🔴(4)* multiplication
function multiplication() {
  btnMulti.addEventListener("click", handleMultiplication);
  btnMulti.addEventListener("click", clickManyMulti);
}

function clickManyMulti() {
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  //"1","+","2"
  const operationResultText = operationTextCut.replace(/,/gi, "");
  console.log(operationResultText.substr(operationResultText.length - 1));
  if (operationResultText.substr(operationResultText.length - 1) === "*") {
    output.innerText = "Error : please input * only once at a time";
  }
}

function handleMultiplication() {
  operation.push("*");
  outputArray = [];
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  const operationResultText = operationTextCut.replace(/,/gi, "");
  const operationResultMath = eval(operationResultText);
  output.innerText = operationResultMath;
  console.log(operation);
  operationProcess.innerText = "=" + operationResultText + "*";
}

//🔴🔴🔴🔴🔴(5)division
function division() {
  btnDivi.addEventListener("click", handleDivision);
  btnDivi.addEventListener("click", clickManyDivi);
}

function clickManyDivi() {
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  //"1","+","2"
  const operationResultText = operationTextCut.replace(/,/gi, "");
  console.log(operationResultText.substr(operationResultText.length - 1));
  if (operationResultText.substr(operationResultText.length - 1) === "/") {
    output.innerText = "Error : please input / only once at a time";
  }
}

function handleDivision() {
  operation.push("/");
  outputArray = [];
  const operationText = operation.toString();
  const operationTextCut = operationText.substr(0, operationText.length - 1);
  const operationResultText = operationTextCut.replace(/,/gi, "");
  const operationResultMath = eval(operationResultText);
  output.innerText = operationResultMath;
  console.log(operation);
  operationProcess.innerText = "=" + operationResultText + "/";
}

//🔴🔴🔴🔴🔴(6)Equal
function equal() {
  btnEqual.addEventListener("click", handleEqual);
}
function handleEqual() {
  const operationText = operation.toString();
  const operationResultText = operationText.replace(/,/gi, "");
  const operationResultMath = eval(operationResultText);
  output.innerText = operationResultMath;
  operationProcess.innerText = "=" + operationResultText;
}

//🔴🔴🔴🔴🔴(7)Refresh
function refresh() {
  btnC.addEventListener("click", handleRefresh);
}

function handleRefresh() {
  output.innerText = "";
  operation = [];
  outputArray = [];
  operationProcess.innerText = "";
}

//🔴🔴🔴🔴🔴Action
function init() {
  showOutput(); //(1)
  addition(); //(2)
  subtraction(); //(3)
  multiplication(); //(4)
  division(); //(5)
  equal(); //(6)
  refresh(); //(7)
}

init();
