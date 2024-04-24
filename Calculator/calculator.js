	
	//clear display of all numbers and operators
	var operand1='';
	var operand2='';
	var operator='';
	
	function clearDisplay(){
		var display=document.getElementById('display')
		display.innerText=''
		operand1='';
		operand2='';
		operator='';
	}
	//When we press a operator, the operator appears on the display
	function showOperator(op){
		if(operand1.length > 0 && operator.length==0){
			var display=document.getElementById('display')
			display.innerText=display.innerText + op
			operator=op
			console.log(operator)
		}
	}
	//When we press a number, the number appears on the display
	function showNumber(number){
		var display=document.getElementById('display')
		display.innerText=display.innerText + number
		if(operator.length == 0){
			operand1=operand1+number
			console.log(operand1)
		}
		else{
			operand2=operand2+number
			console.log(operand2)
		}
	}
	function calculate(){
		var display=document.getElementById('display')
		if(operator == '+'){
			operand1=parseFloat(operand1)+parseFloat(operand2)
		}
		else{
			if(operator=='-'){
				operand1=parseFloat(operand1)-parseFloat(operand2)
			}
			else{
				if(operator=='*'){
					operand1=parseFloat(operand1)*parseFloat(operand2)
				}
				else{
					operand1=parseFloat(operand1)/parseFloat(operand2)
				}
			}
		}
		operand1=operand1+''
		display.innerText=operand1
		operand2=''
		operator=''
	}
	
	
	
	
	
	
	
	
	var myDiv=document.getElementById('test')
	myDiv.innerText='Hi'
	
	function sayHi(){
		var myField=document.getElementById('test')
		alert('Hi '+ myField.value)
	}
	