import React from "react";

// Odd Players using Destructuring
export function OddPlayers([first, , third, , fifth]) {
    return (
        <div>
            <h1>Odd Players</h1>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>
        </div>
    );
}

// Even Players using Destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
        <div>
            <h1>Even Players</h1>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>
        </div>
    );
}

// Merge two arrays using Spread Operator
export function IndianPlayersMerged() {

    const T20players = [
        "Sachin",
        "Dhoni",
        "Virat"
    ];

    const RanjiTrophy = [
        "Rohit",
        "Yuvraj",
        "Raina"
    ];

    const IndianPlayers = [...T20players, ...RanjiTrophy];

    return (
        <div>
            <h1>List of Indian Players Merged</h1>

            <ul>
                {
                    IndianPlayers.map((player, index) => (
                        <li key={index}>Mr. {player}</li>
                    ))
                }
            </ul>
        </div>
    );
}