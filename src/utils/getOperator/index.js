
const operators = {
  'SW': 'South West Trains',
  '*B': 'Bus'
};

const getOperator = code => {
  return operators[code] || code;
};

export default getOperator;
