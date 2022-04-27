function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let price;
 if(eventId == 1){
	 price = 91;
	 t = price*ticknum;
 }
 if(eventId == 2){
	 price = 79;
	 t = price*ticknum;
 }
  if(eventId == 3){
	 price = 83;
	 t = price*ticknum;
 }
  if(eventId == 4){
	 price = 100;
	 t = price*ticknum;
 }
  return t;
}


