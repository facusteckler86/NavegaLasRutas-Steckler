/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import { CarritoContextt } from './CarritoContex'

const CART_ACTIONS = {
    ADD: '[CARRITO] Agregar Compra',
    INCREASE: '[CARRITO] Aumentar Cantidad Compra',
    DECREASE: '[CARRITO] Disminuir Cantidad Compra',
    REMOVE: '[CARRITO] Eliminar Compra',
    CLEAR: '[CARRITO] Limpiar Carrito'
}

const initialState = []

export const CarritoProvider = ({ children }) => {
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case CART_ACTIONS.ADD:
                { const existingItem = state.find(item => item.id === action.payload.id)
                if (existingItem) {
                    return state.map(item => 
                        item.id === action.payload.id 
                            ? {...item, cantidad: item.cantidad + 1}
                            : item
                    )
                }
                return [...state, action.payload] }
            case CART_ACTIONS.INCREASE:
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if(item.id === action.payload) return {...item, cantidad: cant}
                    return item
                })
            case CART_ACTIONS.DECREASE:
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                    return item
                })
            case CART_ACTIONS.REMOVE:
                return state.filter(compra => compra.id !== action.payload)
            case CART_ACTIONS.CLEAR:
                return initialState
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const total = listaCompras.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        dispatch({ type: CART_ACTIONS.ADD, payload: compra })
    }

    const aumentarCantidad = (id) => {
        dispatch({ type: CART_ACTIONS.INCREASE, payload: id })
    }

    const disminuirCantidad = (id) => {
        dispatch({ type: CART_ACTIONS.DECREASE, payload: id })
    }

    const eliminarCompra = (id) => {
        dispatch({ type: CART_ACTIONS.REMOVE, payload: id })
    }

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR })
    }

    return (
        <CarritoContextt.Provider value={{
            listaCompras,
            total,
            agregarCompra,
            aumentarCantidad,
            disminuirCantidad,
            eliminarCompra,
            clearCart
        }}>
            {children}
        </CarritoContextt.Provider>
    )
}