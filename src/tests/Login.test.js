import {render, screen, fireEvent} from '@testing-library/react';
import Home from "../Pages/Home/Home";
test("Login form displaying",() => {
    // render(<Home/>);
    const {getByTestId} = render(<Home/>);
    expect(getByTestId('signInButton')).toBeInTheDocument();
    // const linkElement = screen.getByText('Login');
    // expect(linkElement).toBeInTheDocument();
});

test("Register form Displaying and login, register tabs working",() => {
    const {getByTestId} = render(<Home/>);
    let LoginTab = getByTestId('signInTab');
    let SignUPTab = getByTestId('signUpTab');
    expect(LoginTab).toBeInTheDocument();
    expect(SignUPTab).toBeInTheDocument();
    fireEvent.click(SignUPTab);
    expect(getByTestId('signUpButton')).toBeInTheDocument();
    fireEvent.click(LoginTab);
    expect(getByTestId('signInButton')).toBeInTheDocument()
});