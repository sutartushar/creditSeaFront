import  { useEffect, useState } from 'react';
import axios from 'axios';

const ReportDisplay = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reports');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h2>Credit Reports</h2>
      {reports.map((report, index) => (
        <div key={index}>
          <h3>Basic Details</h3>
          <p>Name: {report.name}</p>
          <p>Mobile: {report.mobilePhone}</p>
          <p>PAN: {report.pan}</p>
          <p>Credit Score: {report.creditScore}</p>
          <h3>Report Summary</h3>
          <p>Total Accounts: {report.reportSummary.totalAccounts}</p>
          <p>Active Accounts: {report.reportSummary.activeAccounts}</p>
          <p>Closed Accounts: {report.reportSummary.closedAccounts}</p>
          <p>Current Balance: {report.reportSummary.currentBalanceAmount}</p>
          <h3>Credit Accounts</h3>
          {report.creditAccounts.map((account, idx) => (
            <div key={idx}>
              <p>Credit Card: {account.creditCard}</p>
              <p>Bank: {account.bank}</p>
              <p>Address: {account.address}</p>
              <p>Account Number: {account.accountNumber}</p>
              <p>Amount Overdue: {account.amountOverdue}</p>
              <p>Current Balance: {account.currentBalance}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ReportDisplay;