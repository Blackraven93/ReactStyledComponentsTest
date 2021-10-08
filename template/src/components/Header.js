import React from 'react'
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled';


const Header = () => {
    return (
        <StyledHeader >
            <Container>
                <Nav>
                    <Logo src='./images/doterraLogo.png' alt='' />
                    <Button>Home</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>
                            <a href="https://ko.wikipedia.org/wiki/%EC%95%84%EB%A1%9C%EB%A7%88%ED%85%8C%EB%9D%BC%ED%94%BC">아로마 테라피</a>에 대해 알고 계신가요?
                        </h1>
                        <p>
                            많은 사람들이 유기농, 웰빙을 추구하고 특히나 요즘은 더더욱 절실하게 건강을 유지하기 위해
                            다양한 노력을 하는것 같아요
                            그중에서 에센셜오일 아로마 테라피에 대해서 함께 이야기 하고자 해요
                        </p>

                    </div>
                    <Image src='./images/fall.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header
