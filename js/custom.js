// Login Button event handel
const submitBtn = document.getElementById("loginBtn");
submitBtn.addEventListener("click", function(){
   const loginPage = document.getElementById("login-area");
   loginPage.style.display="none";
   const transitionArea = document.getElementById("transition-area");
   transitionArea.style.display="block";
})

// Deposit Button event handel
const depositBtn = document.getElementById("AddDeposit");
    depositBtn.addEventListener("click",function(){
        const depositAmount = document.getElementById("DepositInput").value;
        const AmountNumber = parseFloat(depositAmount);

        depositFunction("DepositMoney","DepositInput");
        depositFunction("BalanceMoney","DepositInput");

        //function for the Deposit Balance
        function depositFunction(id,DepositInput){
            const balanceMoney = document.getElementById(id).innerText;
            const balancenumber = parseFloat(balanceMoney);
            const TotalBalance = AmountNumber+ balancenumber;
            document.getElementById(id).innerText=TotalBalance;
            document.getElementById(DepositInput).value="";
        }

    })
// Deposit Button event handel

//Withdraw Button event handel
const withdrawButton = document.getElementById("withdrawBtn");
withdrawButton.addEventListener("click",function(){
    const withdrawinput = document.getElementById("withdrawInput").value;
    const withdrawinputNum = parseFloat(withdrawinput);   

    const withdrawMoney= document.getElementById("withdrawMoney").innerText;
    const withdrawNum = parseFloat(withdrawMoney);
    const totalwithdraw = withdrawinputNum+withdrawNum;
    document.getElementById("withdrawMoney").innerText=totalwithdraw;
    document.getElementById("withdrawInput").value="";

    const withdrawBalance = document.getElementById("BalanceMoney").innerText;
    const withBalanceNum = parseFloat(withdrawBalance);
    const totalwithdrawBalance = withBalanceNum-withdrawinputNum;
    document.getElementById("BalanceMoney").innerText=totalwithdrawBalance;


}) 
