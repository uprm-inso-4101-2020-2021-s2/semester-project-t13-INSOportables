import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import DATA from '/.DATA.json'
import {COLUMNS} from './Columns'

const columns = useMemo(() => COLUMNS, []);
const data = useMemo(() => DATA, []);


export const table = () => {
    const tableInstance = useTable({
        columns: columns,
        data: data
    });
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    return(
        <table {...getTableProps()}>
            <thead>
            {...headerGroups.map(headerGroup =>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroups.headers.map((column) =>(
                            <th {column.getHeaderProps()}>
                                {column.render('Header')}</th>
                        ))
                    }
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row =>{
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) =>{
                              return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}</td>
                            })
                        }
                    </tr>
                )
            })
            }
            </tbody>
        </table>
    );
}