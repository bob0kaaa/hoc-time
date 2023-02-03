import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';
import 'moment/locale/ru';
import './App.css';

moment.locale('ru');


function Video(props) {
    const { url, date } = props;
    const HocComponent = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe title="title" l oading="lazy" src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <HocComponent date={date} />
        </div>
    )
}
//<DateTime date={date} />

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}



export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    useEffect(() => {
        setList(prevList => prevList);
        console.log(list);
    }, [list]);



    return (
        <>
            <VideoList list={list} />
        </>
    );
}