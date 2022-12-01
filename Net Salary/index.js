const prompt=require("prompt-sync")();
//requesting the user to input the salary
let salaryInput=prompt("Enter salary in Ksh.:");
let salary=salaryInput;
//outputing the results
function computation() {
    const payeeDeduct= calculatePayee(salary);
    const nssfDeduct = calculateNssf(salary);
    const nhifDeduct= CalculateNhif(salary);
    console.log(`PAYE: ${payeeDeduct}`)
    console.log(`NSSF Deduction: ${nssfDeduct}`)
    console.log(`NHIF Deduction: ${nhifDeduct}`)
    const totalDeduction=payeeDeduct+nssfDeduct+nhifDeduct;
    console.log(`Total deduction: ${totalDeduction}`);
    const netPay = salary- totalDeduction;
    console.log(`NetPay: ${netPay}`)
  }
  //computing paye
  function calculatePayee(salary) {
    if (salary >= 0 && salary <= 24000) {
      payee= (1 * salary)/100;
      return payee;
    } else if (salary> 24000 && salary <= 32333) {
      payee= (25 * salary)/100;
      return payee;
    } else if (salary> 32333) {
      payee = (3 * salary)/100;
      return payee;
    }
  }
//calculate Nhif
  function CalculateNhif(salary) {
    if (salary>= 0 && salary <6000) {
      return 150;
    } else if (salary >5999 && salary<8000) {
      return 300;
    } else if (salary >79999 && salary< 12000) {
      return 400;
    } else if (salary >11999 && salary < 15000) {
      return 500;
    } else if (salary >14999&& salary < 20000) {
      return 600;
    } else if (salary >19999 && salary <25000) {
      return 750;
    } else if (salary >24999 && salary <30000) {
      return 850;
    } else if (salary >29999 && salary < 35000) {
      return 900;
    } else if (salary >34999&& salary <40000) {
      return 950;
    } else if (salary >39999 && salary <45000) {
      return 1000;
    } else if (salary>44999 && salary <50000) {
      return 1100;
    } else if (salary >49999 && salary <60000) {
      return 1200;
    } else if (salary>59999 && salary <70000) {
      return 1300;
    } else if (salary >69999 && salary <80000) {
      return 1400;
    } else if (salary >79999&& salary <90000) {
      return 1500;
    } else if (salary>89999 && salary <100000) {
      return 1600;
    } else if (salary >= 100000) {
      return 1700;
    }
    
  }
  //NSSF contributions
  function calculateNssf(salary) {
    nssf = (salary* 6)/100;
    return nssf;
  }
  
  computation();