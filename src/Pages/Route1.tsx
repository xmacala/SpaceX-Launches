import Card from '../Components/Card';
import {SPACEX_QUERY} from '../graphql/queries'
import { useQuery } from 'urql';
import './Route1.css'
import { Key } from 'react';

export default function Route1(){
    
    const [result] = useQuery({
        query: SPACEX_QUERY,
    });
    
    const { data, fetching, error } = result;
    
    if (fetching) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return(
        <div className='Route1'>
        <h1>SpaceX Launches</h1>
        <div className='Cards'>
        {data.launchesPast.map((data: { id: Key | null | undefined; }) => (
            <Card spacexData={data} key={data.id}></Card>
            ))}
        </div>
        </div>
    )
}