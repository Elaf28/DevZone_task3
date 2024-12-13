import { Component } from "react";
import"./App.css"
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
export default class App extends Component {
  state={
    products:[
      {id:0,name:"shipcy",price:100,items:10},
      {id:1,name:"pepsi",price:200,items:20},
      {id:2,name:"cigaretes",price:300,items:30},
      {id:3,name:"kranshy",price:400,items:40},
      {id:4,name:"molto",price:500,items:50},
    ],
    copyProducts:[{id:0,name:"shipcy",price:100,items:10},
      {id:1,name:"pepsi",price:200,items:20},
      {id:2,name:"cigaretes",price:300,items:30},
      {id:3,name:"kranshy",price:400,items:40},
      {id:4,name:"molto",price:500,items:50},],
    isDarkMode: false,
  };
  increment=(data)=>{
    const incrementProduct = this.state.products.map((product)=>{
      if (data.id==product.id) {
        product.items++;
      }
      return product;
    });
    this.setState({
      products:incrementProduct,
    });
  };
  decrement=(data)=>{
    const decrementProduct = this.state.products.map((product)=>{
      if (data.id==product.id) {
        if (product.items>=1) {
          product.items--;
        }
      }
      return product;
    });
    this.setState({
      products:decrementProduct,
    });
  }
  resetItems=()=>{
    const resetItems = this.state.products.map((product)=>{
        product.items=0;
        return product
    });
    this.setState({
      products:resetItems,
    })
  }
  emptyCard=()=>{
    this.setState({
      products:[],
    })
  }
  delete=(data)=>{
    const deleteProduct = this.state.products.filter((product)=>{
      if (data.id!==product.id ) {
        return product;
      }
    });
    this.setState({
      products:deleteProduct,
    });
  }

  addProduct=(data)=>{
    let myProducts=[...this.state.products];
    let productFound=myProducts.find((product)=>product.id===data.id);
    if (productFound) {
      productFound.items+=1
    }else{
      myProducts.push({...data,items:1});
    }
    this.setState({products:myProducts})
  }
  toggleTheme = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };
  render(){
  let totalPrice=this.state.products.reduce((acc,ele)=>acc+(ele.price*ele.items),0);
    return(<>
      <Header copyProducts={this.state.copyProducts} products={this.state.products} numOfProduct={this.state.products.length} addProduct={this.addProduct} isDarkMode={this.state.isDarkMode}/>
      <Home products={this.state.products} total={totalPrice} increment={this.increment} decrement={this.decrement} delete={this.delete} resetItems={this.resetItems} emptyCard={this.emptyCard} isDarkMode={this.state.isDarkMode} toggleTheme={this.toggleTheme} />
    </>)
  }
}
