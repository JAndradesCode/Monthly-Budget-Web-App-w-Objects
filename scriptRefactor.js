// Global Variables
data= {
    income: 0,
    expenses: {
        rent: 0,
        utilities: 0,
        groceries: 0,
        transport: 0,
        entertainment: 0,
        misc: 0
        },
    savingsTarget: 0,

    set updateIncome(value){
        this.income=value;
    },

    set updateRent(value){
        this.expenses.rent=value;
    },
    set updateUt(value){
        this.expenses.utilities=value;
    },
    set updateGroc(value){
        this.expenses.groceries=value;
    },
    set updateTransport(value){
        this.expenses.transport=value;
    },
    set updateEntertain(value){
        this.expenses.entertainment=value;
    },
    set updateMisc(value){
        this.expenses.misc=value;
    },
    set updateSavings(value){
        this.savingsTarget=value;
    }
    };

function addSalary(){
    let salaryInput= document.getElementById('salaryInput');
    let salary= Number(salaryInput.value);
    if(salary>0){
        //update income in data
        totalIncome=salary;
        data.updateIncome=totalIncome;
        console.log(totalIncome);
        updateSummary();
        salaryInput.value='';
    }
};

function addRent(){
    let rentInput= document.getElementById('rentInput');
    let amount= Number(rentInput.value);
    if(amount>0){
        //update income in data
        rentInput=amount;
        data.updateRent=rentInput;
        console.log(rentInput);
        updateSummary();
        rentInput.value='';
    }
};

function addUtilities(){
    let utInput= document.getElementById('utilitiesInput');
    let amount= Number(utInput.value);
    if(amount>0){
        //update income in data
        utInput=amount;
        data.updateUt=utInput;
        console.log(utInput);
        updateSummary();
        utInput.value='';
    }
};

function addGroceries(){
    let grocInput= document.getElementById('groceriesInput');
    let amount= Number(grocInput.value);
    if(amount>0){
        //update income in data
        grocInput=amount;
        data.updateGroc=grocInput;
        console.log(grocInput);
        updateSummary();
        grocInput.value='';
    }
};

function addTransport(){
    let transportInput= document.getElementById('transportInput');
    let amount= Number(transportInput.value);
    if(amount>0){
        //update income in data
        transportInput=amount;
        data.updateTransport=transportInput;
        console.log(transportInput);
        updateSummary();
        transportInput.value='';
    }
};

function addEntertainment(){
    let entertainInput= document.getElementById('entertainmentInput');
    let amount= Number(entertainInput.value);
    if(amount>0){
        //update income in data
        entertainInput=amount;
        data.updateEntertain=entertainInput;
        console.log(entertainInput);
        updateSummary();
        entertainInput.value='';
    }
};

function addMisc(){
    let miscInput= document.getElementById('miscInput');
    let amount= Number(miscInput.value);
    if(amount>0){
        //update income in data
        miscInput=amount;
        data.updateMisc=miscInput;
        console.log(miscInput);
        updateSummary();
        miscInput.value='';
    }
};

function setSavingsGoal(){
    let savingsInput= document.getElementById('savingsInput');
    let amount= Number(savingsInput.value);
    if(amount>0){
        //update income in data
        savingsInput=amount;
        data.updateSavings=savingsInput;
        console.log(savingsInput);
        updateSummary();
        savingsInput.value='';
    }
};


function updateSummary(){

    document.getElementById('totalIncome').innerHTML= data.income;

    document.getElementById('rentExpense').innerHTML= data.expenses.rent;

    document.getElementById('utilitiesExpense').innerHTML= data.expenses.utilities;

    let housing=data.expenses.rent + data.expenses.utilities;

    document.getElementById('housingExpense').innerHTML= housing;

    let living=data.expenses.groceries + data.expenses.transport;

    document.getElementById('livingExpenses').innerHTML= living;

    let other=data.expenses.entertainment + data.expenses.misc;
    
    document.getElementById('otherExpenses').innerHTML= other;

    let totalExpense=housing+living+other;

    document.getElementById('totalExpenses').innerHTML= totalExpense;

    document.getElementById('savingsGoal').innerHTML= data.savingsTarget;

    let actualSaving=data.income-totalExpense;

    document.getElementById('actualSavings').innerHTML= actualSaving;

    let remaining=data.income-totalExpense;

    document.getElementById('remainingBudget').innerHTML= remaining;

    document.getElementById('yearlyIncome').innerHTML= data.income*12;

    document.getElementById('yearlyExpenses').innerHTML= totalExpense*12;

    document.getElementById('yearlySavings').innerHTML= actualSaving*12;
}