({
    createExpense: function(component, expense) {
        let theExpenses = component.get("v.expenses");

        // Copy the expense to a new object
        // THIS IS A DISGUSTING, THEMPORARY HACK
        let newExpenses = JSON.parse(JSON.stringify(expense));

        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
        theExpenses.push(newExpenses);
        // ここではv.expensesの値を空更新することで、v.expensesを使用したすべての場所に更新をカスケードする。
        component.set("v.expenses", theExpenses);
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
    },
})
