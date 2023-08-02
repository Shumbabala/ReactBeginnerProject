import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  function onOptionClick(event) {
    //event object date value will be extracted in parent component (Expenses.js)
    //so we simply pass the event object to said parent component
    props.onFilterChange(event);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedFilter} onChange={onOptionClick}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
