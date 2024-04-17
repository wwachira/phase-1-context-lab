/* Your Code Here */
/** create employee records, manage time-in and time-out events, 
 * calculate wages for specific dates, 
 * find employees by their first name and calculates the total payroll for a list of employees.
 */     

const createEmployeeRecord = (employeeData) => {
    const [firstName, lastName, title, payPerHour] = employeeData;
    return {
      firstName,
      lastName,
      title,
      payPerHour,
      timeInEvents: [], //clock in
      timeOutEvents: [], //clock out
    };
  };
  
  const createTimeInEvent = (dateStamp) => {
    const [date, hour] = dateStamp.split(' ');
    const timeInEvent = {
      type: 'TimeIn',
      date,
      hour,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  };
  
  const createTimeOutEvent = (dateStamp) => {
    const [date, hour] = dateStamp.split(' ');
    const timeOutEvent = {
      type: 'TimeOut',
      date,
      hour,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
  };
  
  const hoursWorkedOnDate = (date) => {
    const timeInIndex = this.timeInEvents.findIndex(
      (event) => event.date === date
    );
    const timeOutIndex = this.timeOutEvents.findIndex(
      (event) => event.date === date
    );
  
    if (timeInIndex === -1 || timeOutIndex === -1) {
      return 0;
    }
  
    const timeInEvent = this.timeInEvents[timeInIndex];
    const timeOutEvent = this.timeOutEvents[timeOutIndex];
  
    const timeInHour = parseInt(timeInEvent.hour.slice(0, 2), 10);
    const timeOutHour = parseInt(timeOutEvent.hour.slice(0, 2), 10);
  
    return timeOutHour - timeInHour;
  };
  
  const wagesEarnedOnDate = (date) => {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
  };
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map((e) => e.date);
  
    const payable = eligibleDates.reduce((memo, d) => {
      return memo + wagesEarnedOnDate.call(this, d);
    }, 0);
  
    return payable;
  };
  
  const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find((record) => record.firstName === firstName);
  };
  
  const calculatePayroll = (employees) => {
    return employees.reduce((memo, record) => {
      return memo + allWagesFor.call(record);
    }, 0);
  };


//two employee records, their time in, out with a payrate of ksh5000 p/h
const employeeData = ['Joseph', 'Tumi', 'Software Engineer', 5000];
const employeeRecord = createEmployeeRecord(employeeData);

console.log(employeeRecord);

