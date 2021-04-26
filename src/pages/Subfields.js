import React, {useMemo} from 'react'
import './Subfields.css'
import {useTable} from 'react-table'
import DATA from '../table/DATA.json'
import {COLUMNS} from '../table/Columns'

function Subfields(){
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <form>
            <div className="Subfields">
                <h1>Subfields</h1>
                <p>This is a table listing all subfields that include the traditional study of computer architecture, programming languages, and software development.</p>

                <div className="SubfieldsForm">
                    <>
                        <table {...getTableProps()}>
                            <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                            <tfoot>
                            {footerGroups.map(footerGroup => (
                                <tr {...footerGroup.getFooterGroupProps()}>
                                    {footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                                    ))}
                                </tr>
                            ))}
                            </tfoot>
                        </table>
                    </>
                </div>
            </div>
        </form>
    )
}
export default Subfields;
