// Glitch effect for panel headers
const panelHeaders = document.querySelectorAll('.panel-header');

panelHeaders.forEach(header => {
    setInterval(() => {
        header.classList.toggle('glitch');
    }, 1000);
});

// Add glitch effect styles
const style = document.createElement('style');
style.innerHTML = `
    .glitch {
        text-shadow: 
            1px 0 red, 
            -1px 0 blue, 
            0 1px green, 
            0 -1px yellow;
        animation: glitch 0.5s infinite;
    }

    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, -2px); }
        40% { transform: translate(2px, 2px); }
        60% { transform: translate(-2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);
