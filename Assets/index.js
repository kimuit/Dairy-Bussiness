
 var shadeProductionA;
 var shadeProductionB;
 var shadeProductionC;
 var shadeProductionD;
 var totalProduction;
 let brookside = 44;

 function readValue(){
    var shadeProductionA =parseInt(document.getElementById("shadeProductionA").value);
    document.getElementById("shadeA").innerHTML = shadeProductionA;

    var shadeProductionB =parseInt(document.getElementById("shadeProductionB").value);
    document.getElementById("shadeB").innerHTML = shadeProductionB;

    var shadeProductionC = parseInt(document.getElementById("shadeProductionC").value);
    document.getElementById("shadeC").innerHTML = shadeProductionC;
    
    var shadeProductionD = parseInt(document.getElementById("shadeProductionD").value);
    document.getElementById("shadeD").innerHTML = shadeProductionD;
    
    var totalProduction = shadeProductionA + shadeProductionB + shadeProductionC + shadeProductionD;
    document.getElementById("totals").innerHTML = totalProduction;

    var weeklyProduction = totalProduction*7
    document.getElementById("weekTotals").innerHTML = weeklyProduction;

    var weeklyProduction = totalProduction*7
    document.getElementById("weekTotals").innerHTML = weeklyProduction;

    var yearlyProduction = totalProduction*365
    document.getElementById("yearlyTotals").innerHTML = yearlyProduction;

    var weeklyIncome = totalProduction*7*brookside
    document.getElementById("weekIncome").innerHTML = weeklyIncome;

    var yearlyIncome = totalProduction*365*brookside
    document.getElementById("yearlyIncome").innerHTML = yearlyIncome;


 }
