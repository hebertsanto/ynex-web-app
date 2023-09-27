import React from "react";
import { ButtonRegisterAClient, Container, Search, SubContainer } from "./style";
import { Clients } from "../clients";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <SubContainer>
             <div>
                <p>Dashboard - all clients</p>
                <Search
                  type="text"
                  placeholder="search client"
                />
                <ButtonRegisterAClient
                  onClick={() => navigate('/dashboard/client/new')}
                  >register a new client</ButtonRegisterAClient>
                    <Clients />
                </div>
            </SubContainer>
        </Container>
    )
} 