import React, { ReactNode, useState } from "react";

export interface UserProfile {
    name: string;
}

interface Resistances {
    physicalDamage: number;
    physicalResistance: number;
    magicDamage: number;
    magicResistance: number;
    energyDamage: number;
    energyResistance: number;
}

interface Stats {
    maxHealth: number;
    currentHealth: number;
}

export interface PlayerCharacter {
    name: string;
    class: string;
    stats: Stats;
    resistances: Resistances;
}

interface PlayerCharacterContext {
    currentCharacter: PlayerCharacter;
    physAttack: () => void;
    magAttack: () => void;
    energyAttack: () => void;
}


interface Props {
    children: ReactNode;
}


export const playerCharacterContext  = React.createContext({} as PlayerCharacterContext);

export const PlayerCharacterContextProvider = ({children}: {children: ReactNode}) => {
    
    const [currentCharacter, setCurrentCharacter] = useState<PlayerCharacter>({
            name: 'Name',
            class: 'default class',
            stats: {
                maxHealth: 1,
                currentHealth: 1,
            },
            resistances: {
                physicalDamage: 1,
                physicalResistance: 1,
                magicDamage: 1,
                magicResistance: 1,
                energyDamage: 1,
                energyResistance: 1,
            },
    })

    const physAttack = () => {
        console.log('this is a physical attack');
    }

    const magAttack = () => {
        console.log('this is a magic attack');
    }

    const energyAttack = () => {
        console.log('this is a magic attack');
    }

    return(
        <playerCharacterContext.Provider value={{
            currentCharacter,
            physAttack,
            magAttack,
            energyAttack,
        }}>
            {children}
        </playerCharacterContext.Provider>
    )

}

export default playerCharacterContext;