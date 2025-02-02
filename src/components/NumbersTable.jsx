import {useState} from 'react';

function NumbersTable () {
    const [state] = useState({
        cells:[]
    })
    
   let renderTable=(limit=0)=>{
        let {cells} = state;

        for(let i=0; i < limit; i ++){
            cells.push(i + 1)
        }
        return (
            <div style={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    maxWidth:600

            }}>
                {cells.map((item,index_cells)=>(
                    <div style={{
                        width:100,
                        height:100,
            backgroundColor:index_cells % 2 !== 0 ? 'red' : '#fff', 
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        border:'1px solid black'
                }}>
                    <span>{item}</span>
                </div>
            ))}
            </div>
        )
    }

    
    return <div> {renderTable()}</div>
}

export default NumbersTable;