import { AppBar } from "@mui/material";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Logo><Link to="/">Inicio</Link></Logo>
                </Left>
                <Center>
                    <MenuItem><Link to="/category/1">VINOS</Link></MenuItem>
                    <MenuItem><Link to="/category/9">SIN ALCOHOL</Link></MenuItem>
                    <MenuItem><Link to="/category/5">LICORES</Link></MenuItem>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;