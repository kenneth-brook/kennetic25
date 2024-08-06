const state = {
    user: null,
    isAuthenticated: false,
};

export const getState = () => ({ ...state });

export const setState = (newState) => {
    Object.assign(state, newState);
    window.dispatchEvent(new Event('statechange'));
};
