import "./App.css";

function App() {
  return (
    <>
      {/* Video Background */}
      <video autoPlay muted loop playsInline id="bg-video">
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="container">

        <h1>💰 Expense Tracker</h1>
        <p>Manage your income and expenses efficiently</p>

        {/* Summary Cards */}
        <div className="cards">

          <div className="card">
            <h2>💰 Income</h2>
            <h3>₹0</h3>
          </div>

          <div className="card">
            <h2>💸 Expense</h2>
            <h3>₹0</h3>
          </div>

          <div className="card">
            <h2>🏦 Balance</h2>
            <h3>₹0</h3>
          </div>

        </div>

        {/* Form */}
        <div className="form">

          <input
            type="text"
            placeholder="Title"
          />

          <input
            type="number"
            placeholder="Amount"
          />

          <input
            type="text"
            placeholder="Category"
          />

          <select>
            <option>Income</option>
            <option>Expense</option>
          </select>

          <button>Add Transaction</button>

        </div>

        {/* Transactions */}
        <div className="transactions">

          <h2>Recent Transactions</h2>

          <div className="transaction">
            <span>Salary</span>
            <span>₹5000</span>
            <span>Income</span>
          </div>

          <div className="transaction">
            <span>Food</span>
            <span>₹350</span>
            <span>Expense</span>
          </div>

          <div className="transaction">
            <span>Movie</span>
            <span>₹200</span>
            <span>Expense</span>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;