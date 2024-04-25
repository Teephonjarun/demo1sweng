const { dayOfTheWeek } = require('./app');
const { monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});
test('getMonth returns the month of the year', () => {
    const month = new Date('3/11/2020').toLocaleMonthString('en-US', { month: 'long' });
    expect(month).toBe('November');

});