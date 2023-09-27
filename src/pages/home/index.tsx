import React, { useState } from "react";
import { ButtonRegisterAClient, Container, Search, SubContainer } from "./style";
import { Clients } from "../clients";

export const HomePage: React.FC = () => {

    return (
        <Container>
            <SubContainer>
                <div>
                    <h3>dashboard - all clients</h3>
                    <Search
                        type="text"
                        placeholder="search client"
                    />
                    <ButtonRegisterAClient>register a new client</ButtonRegisterAClient>
                    <Clients />
                </div>
            </SubContainer>
        </Container>
    )
} 