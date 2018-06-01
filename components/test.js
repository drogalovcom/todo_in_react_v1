import React from 'react';

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div add_news={my_news} className="test_block" />
        )
    }
}