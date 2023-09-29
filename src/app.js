// intersection types
// allow us to combine other types
// equivalent  to interface extends
// usefull when working with multiole types
var el = {
    name: 'test',
    prividge: 'user',
    startDate: new Date()
};
function addTest(a, b) {
    if (typeof a == 'string' || typeof b == 'string') {
        console.log(' a.toString()+b.toString()', a.toString() + b.toString());
        return a.toString() + b.toString();
    }
    return a + b;
}
addTest('a', "b");
function UnknownEmployeeInfo(employee) {
    if ('prividge' in employee) {
        console.log('employee', employee.prividge);
    }
}
