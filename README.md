## **IMPLEMENTATION**

 ### **what's in here?**
The idea behind this project is to create a system where:
* a user can create an account.
* a user can make deposits into their account.
* a user can transfer funds to another user's account.
* a user can make withdrawals from their account.


### **Create Account**

To create an account, you only need to input your first and last names while the application takes care of the rest. That is, it automatically generates a 10 digit acount number and gives a balance of 0.
The balance is gotten by truncating the first 3 characters of an already converted Date().getTime() string that comes in 3 characters.

### **Fund Account**
To fund an account, an already existing user only needs to insert his/her account number and input an amount.



### **How it was implemented?**

### **GULP**
Gulp is a toolkit to automate repetitive tasks. Here, I used it to compile JavaScript ES6. Running the **GULP**  command first converts TypeScript to JavaScript.


```
npm i gulp-install
```
---

### **NodeJS**

### **KnexJS**

### **MySQL**

### **TypeScript**

### **HOW TO USE**

### *kindly note...*
Kindly note that you must have had typescript installed and linked before you can use this project.

To install Typescript, run:

```
npm install -g typescript
```

and to link TypeScript, run:

```
npm link typescript
```

After successfully installing the packages, run:

```
gulp
```
 on the command line to compile the program, and then:
 ```
 npm start
 ```
 to execute the program.

 




### **API Calls**

### **/createAcc**

### **/fundAcc**

### **/transferFunds**

### **/withdrawFunds**

### **/allAccounts**




  