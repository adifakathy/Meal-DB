const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();


const displayBuddies = data => {
    console.log(data);
}