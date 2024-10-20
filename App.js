const { useState } = React;

function App() {
    const [page, setPage] = useState('home');
    const [balance, setBalance] = useState(0);
    const [form, setForm] = useState({ name: '', email: '', password: '', depositAmount: '', withdrawAmount: '' });
    const [allData, setAllData] = useState([]);

    const handlePageChange = (pageId) => {
        setPage(pageId);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const createAccount = (e) => {
        e.preventDefault();
        const { name, email, password } = form;
        if (!name) {
            alert('Name is required');
            return;
        }
        if (!email) {
            alert('Email is required');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        alert('Account successfully created!');
        const currentDate = new Date();
        setAllData([...allData, { action: 'Account Created', name, email, balance: 0, date: currentDate.toLocaleDateString(), time: currentDate.toLocaleTimeString() }]);
        setForm({ ...form, name: '', email: '', password: '' });
    };

    const deposit = (e) => {
        e.preventDefault();
        const amount = parseFloat(form.depositAmount);
        if (isNaN(amount)) {
            alert('Please enter a valid number');
            return;
        }
        if (amount <= 0) {
            alert('Deposit amount must be greater than zero');
            return;
        }
        setBalance(balance + amount);
        alert('Deposit successful!');
        setAllData([...allData, { action: 'Deposit', amount }]);
        setForm({ ...form, depositAmount: '' });
    };

    const withdraw = (e) => {
        e.preventDefault();
        const amount = parseFloat(form.withdrawAmount);
        if (isNaN(amount)) {
            alert('Please enter a valid number');
            return;
        }
        if (amount <= 0) {
            alert('Withdrawal amount must be greater than zero');
            return;
        }
        if (amount > balance) {
            alert('Insufficient funds');
            return;
        }
        setBalance(balance - amount);
        alert('Withdrawal successful!');
        setAllData([...allData, { action: 'Withdraw', amount }]);
        setForm({ ...form, withdrawAmount: '' });
    };

    return (
        <div className="container mt-4">
            <Navbar page={page} onNavigate={handlePageChange} />
            {page === 'home' && <Home />}
            {page === 'createAccount' && <CreateAccount form={form} onInputChange={handleInputChange} createAccount={createAccount} />}
            {page === 'deposit' && <Deposit balance={balance} form={form} onInputChange={handleInputChange} deposit={deposit} />}
            {page === 'withdraw' && <Withdraw balance={balance} form={form} onInputChange={handleInputChange} withdraw={withdraw} />}
            {page === 'allData' && <AllData allData={allData} />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
