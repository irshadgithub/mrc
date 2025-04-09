import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css'; // Import the new CSS file

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token, authorization denied');
        return;
      }
      try {
        const res = await axios.get(`http://localhost:5000/api/reports`, {
          params: {
            page,
            sort: sortOrder,
            sortColumn,
            search,
          },
          headers: {
            'x-auth-token': token,
          },
        });
        setReports(res.data.reports);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error('Failed to fetch reports', error);
      }
    };

    fetchReports();
  }, [page, sortOrder, sortColumn, search]);

  const handleSort = (column) => {
    const order = column === sortColumn ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('date')}>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setPage(Math.max(page - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(Math.min(page + 1, totalPages))} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Reports;