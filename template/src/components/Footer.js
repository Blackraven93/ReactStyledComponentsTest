import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons'
const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/doterraLogo.png' alt="" />
                <Flex>
                    <ul>
                        <li>
                            간단한 설명
                        </li>
                        <li>+82-10-1234-1234</li>
                        <li>raven@raven.com</li>
                    </ul>
                    <ul>
                        <li>제휴</li>
                        <li>상품 문의</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>이력</li>
                        <li>블로그</li>
                        <li>제휴 문의</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 doTERRA</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer
