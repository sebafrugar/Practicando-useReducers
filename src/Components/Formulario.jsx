import React, { useReducer } from 'react';
import Validations from "../Utils/Validations";

const initialState = {
    firstName: {
        value: '',
        error: null,
    },
    lastName: {
        value: '',
        error: null,
    },
    email: {
        value: '',
        error: null,
    }
};
const userValidations = new Validations();

const reducer = (state,action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
};

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
    return (
        <div>
            <div>
                <label>
                    <span>firstName:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                {state.firstName.error !== null && (
                <p>{JSON.stringify(state.firstName)}</p>)}
            </div>
            <div>
                <label>
                    <span>lastName:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
                {state.lastName.error !== null && (
                <p>{JSON.stringify(state.lastName)}</p>)}
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                {state.email.error !== null && (
                <p>{JSON.stringify(state.email)}</p>)}
            </div>
        </div>
    );
}

