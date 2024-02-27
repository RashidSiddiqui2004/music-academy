
"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle
} from "./ui/text-reveal-card";

export function SecretCard() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="Knock! Knock! Who"
                revealText="I'm using Acertinity UI"
            >
                <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    This is a text reveal card. Hover over the card to reveal the hidden
                    text.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
