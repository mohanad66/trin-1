class UserInfo {
    constructor(Name, Address, Balance, Age) {
        this.Name = Name;
        this.Age = Age;
        this.Adress = Address = {
            city: Address.city,
            street: Address.street,
            buildingNumber: Address.buildingNumber
        };
        this.Balance = Balance;
    }

    accountInfo() {
        console.log(`Username : ${this.Name}`)
        console.log(`Balance : ${this.Balance}`)
    }
    deposit(amount) {
        return new Promise((res, rej) => {
            if (amount < 0) {
                rej("there is error")
            }
            else {
                setTimeout(res(amount), 1000)
            }
        })
    }
    addAmount(amount) {
        this.Balance += amount
        return this.Balance
    }
    balancecompare(withdrawamount) {
        return new Promise((resolve, reject) => {
            if (withdrawamount <= this.Balance) {
                resolve("Withdrawing...");
            } else {
                reject("Insufficient funds");
            }
        });
    }

    async withdrawbalance(withdrawamount) {
        try {
            let datastuff = await this.balancecompare(withdrawamount);
            console.log(datastuff);
            this.Balance -= withdrawamount;
            console.log("Done!");
            return this.Balance;
        } catch (error) {
            console.log("Error:", error);
        }
    }
}
// Create a new user account
let userAccount = new UserInfo("Joe", { city: "New York", street: "Imbaba", buildingNumber: "11" }, 1000, 50);

userAccount.accountInfo();

// Test deposit
userAccount.deposit(500)
    .then(amount => {
        console.log("New balance after deposit:", userAccount.addAmount(amount));
    })
    .catch(error => console.error("Deposit error:", error));

// Test withdrawal
(async () => {
    console.log("Balance after withdrawal:", await userAccount.withdrawbalance(300)); // Should succeed
    console.log("Balance after withdrawal:", await userAccount.withdrawbalance(1500)); // Should fail due to insufficient funds
})();

// class UserInfo {
//     constructor(Name, Address, Balance, Age) {
//         this.Name = Name;
//         this.Age = Age;
//         this.Address = {
//             city: Address.city,
//             street: Address.street,
//             buildingNumber: Address.buildingNumber
//         };
//         this.Balance = Balance;
//     }

//     accountInfo() {
//         console.log(`Username : ${this.Name}`);
//         console.log(`Balance : ${this.Balance}`);
//     }

//     deposit(amount) {
//         return new Promise((res, rej) => {
//             if (amount < 0) {
//                 rej("Deposit amount must be positive");
//             } else {
//                 setTimeout(() => res(amount), 1000);
//             }
//         });
//     }

//     addAmount(amount) {
//         this.Balance += amount;
//         return this.Balance;
//     }

//     balancecompare(withdrawamount) {
//         return new Promise((resolve, reject) => {
//             if (withdrawamount <= this.Balance) {
//                 resolve("Withdrawing...");
//             } else {
//                 reject("Insufficient funds");
//             }
//         });
//     }

//     async withdrawbalance(withdrawamount) {
//         try {
//             let datastuff = await this.balancecompare(withdrawamount);
//             console.log(datastuff);
//             this.Balance -= withdrawamount;
//             console.log("Done!");
//             return this.Balance;
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     }
// }

// // Create a new user account
// let userAccount = new UserInfo("Joe", { city: "New York", street: "Imbaba", buildingNumber: "11" }, 1000, 50);

// userAccount.accountInfo();

// // Test deposit
// userAccount.deposit(500)
//     .then(amount => {
//         console.log("New balance after deposit:", userAccount.addAmount(amount));
//     })
//     .catch(error => console.error("Deposit error:", error));

// // Test withdrawal
// (async () => {
//     console.log("Balance after withdrawal:", await userAccount.withdrawbalance(300)); // Should succeed
//     console.log("Balance after withdrawal:", await userAccount.withdrawbalance(1500)); // Should fail due to insufficient funds
// })();
// // I TOLD YOU YOU USE GIT -hend
// // i lit told u >:( -h