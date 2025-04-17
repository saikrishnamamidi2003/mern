const todoarray = [];
function todo(){
   const input_element = document.querySelector('.js-input');
   const name = input_element.value;
   input_element.value = '';
   todoarray.push(name);
   console.log(todoarray);
}