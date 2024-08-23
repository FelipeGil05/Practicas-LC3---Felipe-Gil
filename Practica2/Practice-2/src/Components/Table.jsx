import React from 'react';

const Table = ({ netIncomes }) => {
return (
    <table>
        <thead>
            <tr>
                <th>Marca</th>
                <th>Ingreso neto</th>
            </tr>
        </thead>
        <tbody>
        {netIncomes.map((incomeData, index) => (
            <tr key={index}>
                <td>{incomeData.brand}</td>
                <td>{incomeData.income}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
};

export default Table;
