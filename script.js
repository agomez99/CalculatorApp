// Refactored code
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
  document.getElementById("result").value = formatNumberWithCommas(result);
  if (result === Infinity) {
    document.getElementById("result").value = "Error";
    return;
  }
}

const buttons = Array.from(document.getElementsByClassName("button"));

const setbackground = () => {
  document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
}

setbackground();

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index === 0) {
      document.getElementById("one").style.backgroundColor = "hsl(6, 63%, 50%)"
      document.getElementsByClassName("toggle-label")[0].style.color = "white";
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      document.getElementsByClassName("calc-text")[0].style.color = "hsl(0, 0%, 100%)";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = " hsl(223, 31%, 20%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementsByClassName('result-input')[0].style.color = 'white';

      var elements = document.getElementsByClassName("number-btn");
      for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].style.backgroundColor = "white";
      elements[i].style.color = "hsl(221, 14%, 31%)";
      elements[i].style.boxShadow= "0px 5px 0px 0px  hsl(225, 6%, 60%)";
      }
      document.getElementsByClassName("delete-btn")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementsByClassName("reset-btn")[0].style.backgroundColor = "hsl(225, 21%, 49%)";
      document.getElementsByClassName("equal-btn")[0].style.backgroundColor = "hsl(6, 63%, 50%";
      
      var labels = document.getElementsByClassName("switch-label");
      for (var i = 0, len = labels.length; i < len; i++) {
        labels[i].style.color = 'white';
        }

        document.getElementsByClassName("equal-btn")[0].style.boxShadow= "0px 5px 0px 0px  hsl(6, 70%, 34%)";

    


    } else if (index === 1) {
      document.getElementById("two").style.backgroundColor = "hsl(25, 98%, 40%)"
      document.getElementsByClassName("toggle-label")[0].style.color = "black"
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 93%)";
      document.getElementsByClassName("calc-text")[0].style.color = "black";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(0, 0%, 100%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(0, 0%, 100%)';
      document.getElementsByClassName('result-input')[0].style.color = 'black';
      var elements = document.getElementsByClassName("number-btn");
      for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].style.backgroundColor = "white";
      elements[i].style.color = "black";
      elements[i].style.boxShadow= "0px 5px 0px 0px  hsl(240, 1%, 50%)";
      }
      document.getElementsByClassName("delete-btn")[0].style.backgroundColor = " hsl(185, 42%, 37%)";
      document.getElementsByClassName("reset-btn")[0].style.backgroundColor = "hsl(185, 42%, 37%)";
      document.getElementsByClassName("equal-btn")[0].style.backgroundColor = "hsl(25, 98%, 40%)";

      var labels = document.getElementsByClassName("switch-label");
      for (var i = 0, len = labels.length; i < len; i++) {
        labels[i].style.color = 'black';
        }

        document.getElementsByClassName("equal-btn")[0].style.boxShadow= "0px 5px 0px 0px  hsl(6, 70%, 34%)";

    
    } else {
      document.getElementById("three").style.backgroundColor = "hsl(176, 100%, 44%)"
      document.getElementsByClassName("toggle-label")[0].style.color = "hsl(52, 100%, 62%)";
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementsByClassName("calc-text")[0].style.color = "hsl(52, 100%, 62%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('result-input')[0].style.color = 'hsl(52, 100%, 62%)';
      var elements = document.getElementsByClassName("number-btn");
      for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].style.backgroundColor = "hsl(268, 47%, 21%)";
      elements[i].style.color = "hsl(52, 100%, 62%)";
      elements[i].style.boxShadow= "0px 5px 0px 0px  hsl(290, 70%, 36%)";
      }
      document.getElementsByClassName("delete-btn")[0].style.backgroundColor = "  hsl(281, 89%, 26%)";
      document.getElementsByClassName("reset-btn")[0].style.backgroundColor = " hsl(281, 89%, 26%)";
      document.getElementsByClassName("equal-btn")[0].style.backgroundColor = "hsl(176, 100%, 44%)";

      var labels = document.getElementsByClassName("switch-label");
      for (var i = 0, len = labels.length; i < len; i++) {
        labels[i].style.color = 'yellow';
        }

        document.getElementsByClassName("equal-btn")[0].style.boxShadow= "0px 5px 0px 0px   hsl(177, 92%, 70%)";


    }
    buttons
      .filter((item) => item !== element)
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
