/* Your Code Here */
function createEmployeeRecord(array) {
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;

}

function createEmployeeRecords(arrayOfArrays) {
    const employeeRecords = arrayOfArrays.map(createEmployeeRecord);
    return employeeRecords;
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    //const obj = this
    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour),
        date:date
        }
    )
    return this//obj
}

function createTimeOutEvent (dateStamp) {
    const [date, hour] =dateStamp.split(" ");
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour),
        date:date
    }
    )
    return this;
}

function hoursWorkedOnDate(dateStamp) {
       const timeCard = this.timeInEvents;
       for (const num in timeCard) {
        const dateWorked = timeCard[num]["date"]
        if (dateStamp == dateWorked) {
            const hoursWorked = 0.01*((this.timeOutEvents[num]['hour']) - (this.timeInEvents[num]['hour']));
            return hoursWorked;
        }
    }
}

function wagesEarnedOnDate (dateStamp) {
    const wages = hoursWorkedOnDate.call(this,dateStamp)*this.payPerHour;
    return wages
}
//   const eventObj = this.timeInEvents.find(isDate)
  //      function isDate (obj) {
   //         return obj.date == dateStamp
    //      const hoursWorked = eventObj.

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray,firstName) {
    const fname = firstName;
    function isName (records) {
        return records.firstName == fname
    }
    return srcArray.find(isName)
}

function sumFunc (total, num) {
    return total + num
}
function calculatePayroll (array) {
    const employeePay = [];
    for (const records of array ) {
       employeePay.push(allWagesFor.call(records));
      // employeePay.push(allWages);
    }
    const totalPay = employeePay.reduce(sumFunc,0)
    return totalPay

}