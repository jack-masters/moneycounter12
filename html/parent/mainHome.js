export function mainParentHomePage(user) {
    return `
        Email: ${user.email}
        <br>
        Name: ${user.name}
        <br>
        Picture:
        <br>
        <img src="${user.picture}"> </img>
    `;
}
