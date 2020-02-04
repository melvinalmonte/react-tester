import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export const Banner = (props) => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{props.bannerTitle}</h1>
                <p>
                   {props.bannerContent}
                </p>
            </Container>
        </Jumbotron>
    )
}