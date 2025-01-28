// On hover show icon for Frontend Project
const frontendCard = document.getElementById('frontendCard');
const frontendImg = document.getElementById('frontendImg');

frontendCard.addEventListener('mouseover', () => {
    frontendImg.classlist.remove('hidden');
    frontendImg.style.opacity = 1;
});

frontendCard.addEventListener('mouseout', () => {
    frontendImg.classList.add('hidden');
    frontendImg.style.opacity = 0;
});

// On hover show icon for CI CD Project
const cicdCard = document.getElementById('cicdCard');
const cicdImg = document.getElementById('cicdImg');

cicdCard.addEventListener('mouseover', () => {
    cicdImg.classList.remove('hidden');
    cicdImg.style.opacity = 1;
});

cicdCard.addEventListener('mouseout', () => {
    cicdImg.classList.add('hidden');
    cicdImg.style.opacity = 0;
});

// On hover show icon for WebSocket Project
const websocketCard = document.getElementById('websocketCard');
const websocketImg = document.getElementById('websocketImg');

websocketCard.addEventListener('mouseover', () => {
    websocketImg.classList.remove('hidden');
    websocketImg.style.opacity = 1;
});

websocketCard.addEventListener('mouseout', () => {
    websocketImg.classList.add('hidden');
    websocketImg.style.opacity = 0;
});

// On hover show icon for Pokemon Project
const pokemonCard = document.getElementById('pokemonCard');
const pokemonImg = document.getElementById('pokemonImg');

pokemonCard.addEventListener('mouseover', () => {
    pokemonImg.classList.remove('hidden');
    pokemonImg.style.opacity = 1;
});

pokemonCard.addEventListener('mouseout', () => {
    pokemonImg.classList.add('hidden');
    pokemonImg.style.opacity = 0;
});

// On hover show icon for Task Management Tool
const taskCard = document.getElementById('taskCard');
const taskImg = document.getElementById('taskImg');

taskCard.addEventListener('mouseover', () => {
    taskImg.classList.remove('hidden');
    taskImg.style.opacity = 1;
});

taskCard.addEventListener('mouseout', () => {
    taskImg.classList.add('hidden');
    taskImg.style.opacity = 0;
});

// On hover show icon for GraphQL Project
const graphqlCard = document.getElementById('graphqlCard');
const graphqlImg = document.getElementById('graphqlImg');

graphqlCard.addEventListener('mouseover', () => {
    graphqlImg.classList.remove('hidden');
    graphqlImg.style.opacity = 1;
});

graphqlCard.addEventListener('mouseout', () => {
    graphqlImg.classList.add('hidden');
    graphqlImg.style.opacity = 0;
});