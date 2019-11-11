//BUDGET  CONTROLLER
var budgetController = (function() {

	 var Expense = function(id, description,value){

	 	this.id = id;
	 	this.description = description;
	 	this.value = value;
	 }

	 var Income = function(id, description,value){

	 	this.id = id;
	 	this.description = description;
	 	this.value = value;
	 }
})();

var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputbtn: '.add__btn' 
	};

	return{

		GetInput: function() {

			return{

		type: document.querySelector(DOMstrings.inputType).value ,
		description: document.querySelector(DOMstrings.inputDescription).value ,  
		value:  document.querySelector(DOMstrings.inputValue).value
			};
		},
			getDOMstrings: function() {

				return DOMstrings;
			}
	};
})();

var controller = (function(budgetctrl , UICtrl) {

	var setupEventListners = function() {

		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.inputbtn).addEventListener('click' , ctrlAddItem);


	document.addEventListener('keypress' , function(event){

		if(event.keyCode === 13 || event.which === 13)
		{
			ctrlAddItem();
		}
	});

	}

	var ctrlAddItem = function() {
		console.log('jai hind dosto!!');
		//1. Get the feild input data
		var input = UICtrl.GetInput();
		console.log(input);
		//2. Add the items to budget controller app
		//3. Add the items to the UI
		//4. Calculate the budget
	};

	return {
		init : function() {
			console.log('Nikal lavde!!!');
			setupEventListners();
		}
	};

})(controller , UIController);

controller.init();

