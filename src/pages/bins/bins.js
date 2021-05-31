import React, { Component } from "react";

import { Container, Content, Button } from 'native-base';
import { Text } from "react-native";

class Passport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button hasText transparent >
                        <Text>Bins Page Test</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Passport;