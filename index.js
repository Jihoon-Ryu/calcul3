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
  }

  function hanldeBtn1() {
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
    const operationText = operation.toString(); //"1","+","2","+"
    const operationTextCut = operationText.substr(0, operationText.length-1);
    //"1","+","2"
    const operationResultText = operationTextCut.replace(/,/gi, "");
    //"1+2"
    if(operationResultText.substr(operationResultText.length-1) === "+") {
        output.innerText = "Error : please input + only once at a time";
    }
}

function handleAddition() {
    operation.push("+");
    outputArray = [];
    const operationText = operation.toString(); //"1","+","2","+"
    const operationTextCut = operationText.substr(0, operationText.length-1);
    //"1","+","2"
    const operationResultText = operationTextCut.replace(/,/gi, "");
    //"1+2"
    const operationResultMath = eval(operationResultText); //3
    output.innerText =operationResultMath;
    operationProcess.innerText = "=" + operationResultText + "+";
}










