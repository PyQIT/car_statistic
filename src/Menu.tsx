import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { browserHistory } from "react-router";
import './App.css';

function onNavigateHome(){
    browserHistory.push("/home")
}

function onNavigateWeight(){
    browserHistory.push("/weight")
}

function onNavigateCapacity(){
    browserHistory.push("/capacity")
}

function onNavigateInhabitants(){
    browserHistory.push("/inhabitants")
}

function onNavigateMotorEnergy(){
    browserHistory.push("/motorEnergy")
}

function onNavigateAge(){
    browserHistory.push("/age")
}

function Menu() {
    return (
        <div className="steering" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '7vh'}}>
            <ButtonComponent onClick={onNavigateHome}>
                Mapa
            </ButtonComponent>
            <ButtonComponent onClick={onNavigateWeight}>
                Waga
            </ButtonComponent>
            <ButtonComponent onClick={onNavigateAge}>
                Wiek
            </ButtonComponent>
            <ButtonComponent onClick={onNavigateCapacity}>
                Pojemność
            </ButtonComponent>
            <ButtonComponent onClick={onNavigateMotorEnergy}>
                Moc
            </ButtonComponent>
            <ButtonComponent onClick={onNavigateInhabitants}>
                Ilość samochodów
            </ButtonComponent>
        </div>
    );
}

export default Menu;
