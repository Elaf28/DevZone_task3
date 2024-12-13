import { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
export class TopButton extends Component {
    state={};
    render(){
        return<>
            <div className="w-100 justify-content-center mt-2 d-flex gap-3 align-item-center">
                <Button variant={this.props.isDarkMode ? 'light' : 'dark'} className="ms-3" onClick={this.props.toggleTheme}>
                    {this.props.isDarkMode ? <IoSunnyOutline size={20} /> : <FaRegMoon size={20} />}
                </Button>
                <Button onClick={this.props.resetItems} variant="btn btn-warning">Reset Items</Button>
                <Button onClick={this.props.emptyCard} variant=" btn btn-info">empty cart</Button>
            </div>
        </>
    }
}