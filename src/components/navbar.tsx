import { Navbar as NavbarBs, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 

export function NavBar() {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className ="me-auto">
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/store">
                        Store
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/about">
                        About
                    </Nav.Link>
                </Nav>

                <Button>
                    
                </Button>
            </Container>
        </NavbarBs>
    );
}
