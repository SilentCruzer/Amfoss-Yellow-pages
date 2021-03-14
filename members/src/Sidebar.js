import './Sidebar.css';
import Membertile from './Membertile';
import React, {useState, useEffect} from 'react';

function Sidebar() {
    const [memberData,setData] = useState([]);
    function getData(){
        const Datareq = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body : '{"query": "{allDetails{name,field,email,github,languages,githubUsername}}"}'
        };

        fetch('http://127.0.0.1:8000/graphql', Datareq).then(res => res.json())
            .then(memberData => setData(memberData['data']['allDetails']));
    }

    useEffect(() => {
        getData();
    },[]);
    console.log(memberData)
    return (
        <div className="leftContainer">
            {
                memberData.map((item)=> (
                    <Membertile
                    name={item.name}
                    stack={item.field}
                    />
                ))
            }
        </div>
    )
}

export default Sidebar
