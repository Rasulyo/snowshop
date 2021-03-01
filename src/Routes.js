import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home'
import Register from "./containers/Auth/Register";
import Login from "./containers/Auth/Login";
import AuthContextProvider from "./contexts/AuthContext";
import Company from "./components/Company/Company";
import AddItems from './components/Hero/Admin/AddItems/AddItems';
import ItemList from './components/Hero/Admin/ItemList/ItemList';
import EditItems from './components/Hero/Admin/EditItem/EditItems';
import View from './components/Hero/View/View';
import PaymentForm from "./containers/Card/Card";
import ContextItemProvider from "./contexts/ContextItem";
import Checkout from './OrderForm/CheckOut';
import Favorite from './components/Favorite/Favorite';
import ItemDetail from './components/Hero/Admin/ItemDetail/itemDetail';
import CartContextProvider from './contexts/CardContex';
import LocalItemProvider from './contexts/LocalContext';
import Cart from './components/Cart/Cart';
import UserList from './components/Hero/Admin/ItemList/UserList';
import CommentsContextProvider from './contexts/CommentsContext';

const Routes = () => {
    return (
        <ContextItemProvider>
            <AuthContextProvider>
                <CartContextProvider>
                    <LocalItemProvider>
                        <CommentsContextProvider>
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/home" />
                                    </Route>
                                    <Route path="/home" component={Home} />
                                    <Route path="/company" component={Company} />
                                    <Route path="/register" component={Register} exact />
                                    <Route path="/login" component={Login} exact />
                                    <Route exact path='/add' component={AddItems} />
                                    <Route exact path='/list' component={ItemList} />
                                    <Route exact path='/edit/:id' component={EditItems} />
                                    <Route exact path='/view' component={View} />
                                    <Route exact path='/payment' component={PaymentForm} />
                                    <Route exact path='/order' component={Checkout} />
                                    <Route exact path='/favourite' component={Favorite} />
                                    <Route exact path='/detail/:id' component={ItemDetail} />
                                    <Route exact path='/cart' component={Cart} />
                                    <Route exact path='/userlist' component={UserList} />
                                </Switch>
                            </BrowserRouter>
                        </CommentsContextProvider>
                    </LocalItemProvider>
                </CartContextProvider>
            </AuthContextProvider>
        </ContextItemProvider>
    );
};

export default Routes;
