import React, { Component } from 'react'
import Display from './Display';
import './css_files/Number.css';

let hello = "";
class Number extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            hello: "",
            loading: false
        }
    }

    componentDidMount() {
        let number = [];
        let counter = 0;
        let n = 9;
        let num = []
        for (let i = 0; i < 10; i++) {
            num[i] = +i;
        }
        let symbols = ['clr', '+', '-', '*', '/', '='];
        for (let i = 0; i < 16; i++) {
            number[i] = symbols[counter];
            counter++;
            if (i > 5) {
                number[i] = num[n];
                n--;
            }
        }
        this.setState({
            number: number,
            loading: true
        })
    }

    click = (e) => {
        e.preventDefault();
        let eve = e.target.value;
        hello = hello + eve;
        let plus = hello.indexOf('+');
        let min = hello.indexOf('-');
        let pro = hello.indexOf('*');
        let divi = hello.indexOf('/');
        if (eve === 'clr') {
            hello = '';
        }
        if (eve === '=') {
            if (hello[plus] === '+') {
                let test = hello.slice(0, plus);
                let test1 = hello.slice(plus + 1, hello.length - 1);
                plus = (+test) + (+test1);
                hello = ""
                this.setState({
                    hello: plus
                })
            }
            else if (hello[min] === '-') {
                let test = hello.slice(0, min);
                let test1 = hello.slice(min + 1, hello.length - 1);
                min = (+test) - (+test1);
                hello = ""
                this.setState({
                    hello: min
                })
            }
            else if (hello[pro] === '*') {
                let test = hello.slice(0, pro);
                let test1 = hello.slice(pro + 1, hello.length - 1);
                pro = (+test) * (+test1);
                hello = ""
                this.setState({
                    hello: pro
                })
            }
            else if (hello[divi] === '/') {
                let test = hello.slice(0, divi);
                let test1 = hello.slice(divi + 1, hello.length - 1);
                if (test1 === '0') {
                    hello = '';
                    this.setState({
                        hello: `you can't divide a number by 0 🙂`
                    })
                } else {
                    divi = (+test) / (+test1);
                    hello = ""
                    this.setState({
                        hello: divi
                    })
                }
            }
            else {
                hello = ''
            }
        }
        else {
            this.setState({
                hello
            })
        }
    }

    render() {

        let { number, loading, hello } = this.state;
        if (!loading) {
            return <h1>loading....</h1>
        }

        return (
            <React.Fragment>
                <Display test={hello} />
                <div className="btns">
                    {number.map((num, index) => {
                        return <input key={num}
                            value={num}
                            type="button"
                            id={`btn-${index}`}
                            onClick={this.click}
                        />
                    })}
                </div>
            </React.Fragment>

        )
    }

}
export default Number;
