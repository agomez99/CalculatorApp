const getElement = (id) => document.getElementById(id);

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const appendValue = (value) => {
  const result = getElement("result");
  const formattedValue = result.value.replace(/,/g, '') + value;
  result.value = formatNumberWithCommas(formattedValue);
};

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const clearResult = () => {
  getElement("result").value = "";
};

const deleteLastCharacter = () => {
  let result = getElement("result").value;
  getElement("result").value = result.slice(0, -1);
};

const calculate = () => {
  let result = eval(getElement("result").value);
  if (result === '') {
    return; // Do nothing if the input is empty
  }
  result = eval(result);
  getElement("result").value = formatNumberWithCommas(result);
  if (result === Infinity) {
    getElement("result").value = "Error";
    return;
  }
}

const buttons = Array.from(document.getElementsByClassName("button"));
const setBackground = () => {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
}
setBackground();
buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    const colors = [
      {
        bgColor: " hsl(222, 26%, 31%)",
        textColor: "white",
        toggleColor:"hsl(6, 63%, 50%)",
        calcColor: "hsl(0, 0%, 100%)",
        wrapperColor: "hsl(223, 31%, 20%)",
        resultContainerColor: "hsl(224, 36%, 15%)",
        resultInputColor: "hsl(224, 36%, 15%)",
        numberBtnBgColor: "hsl(30, 25%, 89%)",
        numberBtnTextColor: "hsl(221, 14%, 31%)",
        numberBtnBoxShadow: "0px 5px 0px 0px  hsl(28, 16%, 65%)",
        deleteBtnBgColor: "hsl(225, 21%, 49%)",
        deleteBtnBoxShadow:"0px 5px 0px 0px  hsl(224, 28%, 35%)",
        resetBtnBgColor: "hsl(225, 21%, 49%)",
        resetBtnBoxShadow:"0px 5px 0px 0px  hsl(224, 28%, 35%)",
        equalBtnBgColor: "hsl(6, 63%, 50%)",
        switchLabelColor: "white",
        equalBtnBoxShadow: "0px 5px 0px 0px  hsl(6, 70%, 34%)"
      },
      {
        bgColor: "hsl(0, 0%, 93%)",
        textColor: "black",
        toggleColor:"hsl(25, 98%, 40%)",
        calcColor: "black",
        wrapperColor: "hsl(0, 0%, 90%)",
        resultContainerColor: "hsl(0, 0%, 100%)",
        resultInputColor: "white",
        numberBtnBgColor: "white",
        numberBtnTextColor: "black",
        numberBtnBoxShadow: "0px 5px 0px 0px  hsl(240, 1%, 50%)",
        deleteBtnBgColor: "hsl(185, 42%, 37%)",
        deleteBtnBoxShadow:"0px 5px 0px 0px hsl(224, 28%, 35%)",
        resetBtnBgColor: "hsl(185, 42%, 37%)",
        resetBtnBoxShadow:"0px 5px 0px 0px hsl(224, 28%, 35%)",
        equalBtnBgColor: "hsl(25, 98%, 40%)",
        switchLabelColor: "black",
        equalBtnBoxShadow: "0px 5px 0px 0px  hsl(6, 70%, 34%)"
      },
      {
        bgColor: "hsl(268, 75%, 9%)",
        textColor: "hsl(52, 100%, 62%)",
        toggleColor:"hsl(176, 100%, 44%)",
        calcColor: "hsl(52, 100%, 62%)",
        wrapperColor: "hsl(268, 71%, 12%)",
        resultContainerColor: "hsl(268, 71%, 12%)",
        resultInputColor: "hsl(268, 71%, 12%)",
        numberBtnBgColor: "hsl(268, 47%, 21%)",
        numberBtnTextColor: "hsl(52, 100%, 62%)",
        numberBtnBoxShadow: "0px 5px 0px 0px  hsl(290, 70%, 36%)",
        deleteBtnBgColor: "hsl(281, 89%, 26%)",
        deleteBtnBoxShadow:"0px 5px 0px 0px  hsl(285, 91%, 52%)",
        resetBtnBgColor: "hsl(281, 89%, 26%)",
        resetBtnBoxShadow:"0px 5px 0px 0px  hsl(285, 91%, 52%)",
        equalBtnBgColor: "hsl(176, 100%, 44%)",
        switchLabelColor: "yellow",
        equalBtnBoxShadow: "0px 5px 0px 0px   hsl(177, 92%, 70%)"
      }
    ];
    document.body.style.backgroundColor = colors[index].bgColor;
    document.getElementsByClassName("button")[0].style.backgroundColor = colors[index].toggleColor;
    document.getElementsByClassName("button")[1].style.backgroundColor = colors[index].toggleColor;
    document.getElementsByClassName("button")[2].style.backgroundColor = colors[index].toggleColor;
    document.getElementsByClassName("toggle-label")[0].style.color = colors[index].textColor;
    document.getElementsByClassName("calc-text")[0].style.color = colors[index].calcColor;
    document.getElementsByClassName("wrapper")[0].style.backgroundColor = colors[index].wrapperColor;
    document.getElementsByClassName('result-container')[0].style.backgroundColor = colors[index].resultContainerColor;
    document.getElementsByClassName('result-input')[0].style.backgroundColor = colors[index].resultInputColor;
    document.getElementsByClassName('result-input')[0].style.color = colors[index].textColor;
    document.getElementsByClassName("delete-btn")[0].style.backgroundColor = colors[index].deleteBtnBgColor;
    document.getElementsByClassName("delete-btn")[0].style.boxShadow  = colors[index].deleteBtnBoxShadow;
    document.getElementsByClassName("reset-btn")[0].style.backgroundColor = colors[index].resetBtnBgColor;
    document.getElementsByClassName("reset-btn")[0].style.boxShadow = colors[index]. resetBtnBoxShadow;
    document.getElementsByClassName("equal-btn")[0].style.backgroundColor = colors[index].equalBtnBgColor;
    document.getElementsByClassName("equal-btn")[0].style.boxShadow = colors[index].equalBtnBoxShadow;
    var elements = document.getElementsByClassName("number-btn");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].style.backgroundColor = colors[index].numberBtnBgColor;
      elements[i].style.color = colors[index].numberBtnTextColor;
      elements[i].style.boxShadow = colors[index].numberBtnBoxShadow;
    }

    var labels = document.getElementsByClassName("switch-label");
    for (var i = 0, len = labels.length; i < len; i++) {
      labels[i].style.color = colors[index].switchLabelColor;
    }
    buttons
      .filter((item) => item !== element)
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
