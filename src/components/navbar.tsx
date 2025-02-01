import { Navbar as NavbarBs, Container } from "react-bootstrap";

export function NavBar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <NavbarBs.Brand href="#">Nav</NavbarBs.Brand>
            </Container>
        </NavbarBs>
    );
}
