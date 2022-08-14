const header = "counter";

const IncrementAction = () => ({ type: `${header}/increment` });
const DecrementAction = () => ({ type: `${header}/decrement` });

export { IncrementAction, DecrementAction };
