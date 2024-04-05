import inquirer from "inquirer";
let user1Pin = 1856;
let accountBalance = 1000000;
let atm = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Welcome to our atm service please enter your pin!",
    },
]);
if (atm.pin === user1Pin) {
    console.log(`Your balance is ${accountBalance} rupees`);
    let choices = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "What you want to do?",
            choices: ["FastCash", "Random Withdrawal"]
        }
    ]);
    if (choices.option === "FastCash") {
        let fastcash = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What you want to do?",
                choices: [500, 1000, 5000, 10000, 25000],
            },
        ]);
        console.log(`Your balance is now ${accountBalance - fastcash.option}`);
    }
    else if (choices.option === "Random Withdrawal") {
        let randomwithdrawal = await inquirer.prompt([
            {
                name: "money",
                type: "number",
                message: "How much money you want to withdraw write in numbers?",
            },
        ]);
        console.log(`Your balance is now ${accountBalance - randomwithdrawal.money}`);
    }
    console.log("Thanks for using our atm services");
}
