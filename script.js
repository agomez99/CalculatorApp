const getElement = (id) => document.getElementById(id);

const appendValue = (value) => {
  getElement("result").value += value;
};

const clearResult = () => {
  getElement("result").value = "";
};

const deleteLastCharacter = () => {
  let result = getElement("result").value;
  getElement("result").value = result.slice(0, -1);
};

const calculate = () => {
  let result = eval(getElement("result").value);
  getElement("result").value = result;
};

const buttons = [...document.getElementsByClassName("button")];
const setbackground = () => {
  document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
}

setbackground();

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(element);
    element.style.opacity = "1";
    if (index === 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)";
      document.getElementsByClassName("calc-text")[0].style.color = "hsl(0, 0%, 100%)";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = " hsl(223, 31%, 20%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      document.getElementsByClassName('result-input')[0].style.color = 'white';


    } else if (index === 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(0, 0%, 93%)";
      document.getElementsByClassName("calc-text")[0].style.color = "black";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = "hsl(0, 0%, 90%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(0, 0%, 100%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(0, 0%, 100%)';
      document.getElementsByClassName('result-input')[0].style.color = 'black';

    
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)";
      document.getElementsByClassName("wrapper")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementsByClassName("calc-text")[0].style.color = "hsl(52, 100%, 62%)";
      document.getElementsByClassName('result-container')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('result-input')[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      document.getElementsByClassName('result-input')[0].style.color = 'hsl(52, 100%, 62%)';

      

    }
    buttons
      .filter((item) => item !== element)
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
