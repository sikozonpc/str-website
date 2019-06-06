import React from "react";
import {
    NavbarContainer,
    NavList,
    NavLink,
    Logo,
    Telm,
    LogoContainer,
    NavItem,
    Number,
    TelmImg,
} from "./styles";

import logo from "../../images/logo.svg";
import telmSvg from "../../images/Telm.svg";

class Navbar extends React.Component {
    state = {
        shrink: false,
    };
    componentDidMount() {
        window.onscroll = () => this.onScroll();
    }

    onScroll = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            this.setState({ shrink: true });
        } else this.setState({ shrink: false });
    };

    render() {
        console.log(this.state.shrink);
        return (
            <NavbarContainer
                shrink={this.state.shrink ? this.state.shrink : undefined}
            >
                <LogoContainer
                    shrink={this.state.shrink ? this.state.shrink : undefined}
                    to="/"
                >
                    <Logo src={logo} />
                </LogoContainer>

                <NavList>
                    <NavItem>
                        <NavLink to="/eletrodomesticos">
                            Eletrodomésticos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/condutas">Condutas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/paineissolares">Paineis solares</NavLink>
                    </NavItem>
                </NavList>
                <Telm>
                    <TelmImg src={telmSvg} />
                    <Number>910 000 000</Number>
                </Telm>
            </NavbarContainer>
        );
    }
}

export default Navbar;
