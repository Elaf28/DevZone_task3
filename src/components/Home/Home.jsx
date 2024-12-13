import { Component } from "react";
import Button from 'react-bootstrap/Button';
import { TopButton } from "../TopButton/TopButton";
export class Home extends Component {
    state={};
    render(){
        return<>
        <div className={`mt-4 ${this.props.isDarkMode ? 'bg-dark text-light' : ''}`} >
        <TopButton resetItems={this.props.resetItems} emptyCard={this.props.emptyCard} toggleTheme={this.props.toggleTheme} isDarkMode={this.props.isDarkMode}/>
        <div className=" d-flex flex-column gap-3 m-4">
            {this.props.products.map((data,i)=>(
                <div key={i} className="border border-3 border-secondary  d-flex gap-2 justify-content-evenly ">
                <h2 className="ms-3">Name:{data.name}</h2>
                <h2 className="ms-3">Price:{data.price}</h2>
                <h2 className="ms-3">Items:{data.items}</h2>
                <h2 className="ms-3">total price:{data.price * data.items}</h2>
                <div className="d-flex gap-2 m-2">
                    <Button onClick={()=>{this.props.increment(data)}} variant="btn btn-outline-primary">increment</Button>
                    <Button onClick={()=>{this.props.decrement(data)}} variant="btn btn-outline-success">decrement</Button>
                    <Button onClick={()=>{this.props.delete(data)}} variant="btn btn-outline-danger">delete</Button>
                </div>
            </div>
            ))}
        </div>
        {this.props.products.length==0?<div className="text-center fs-2 fw-bold">Empty Items</div>:``}
        {this.props.products.length!=0?<div className="text-center fs-2 fw-bold ">Total Price {this.props.total}</div>:``}
        </div>
        </>
    }
}